import Stripe from "stripe";
import { Resend } from "resend";

export const config = {
    api: {
        bodyParser: false,
    },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
    }

    const sig = req.headers["stripe-signature"];
    const rawBody = await buffer(req);

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
        const webhookSession = event.data.object;

        const session = await stripe.checkout.sessions.retrieve(webhookSession.id, {
            expand: ["payment_intent"],
        });

        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

        const itemsHtml = lineItems.data
            .map(
                (item) =>
                    `<li>${item.description} × ${item.quantity} — $${(
                        item.amount_total / 100
                    ).toFixed(2)} AUD</li>`
            )
            .join("");

        const customer = session.customer_details;
        const paymentIntentShipping = session.payment_intent?.shipping;

        const shippingName =
            session.shipping_details?.name ||
            paymentIntentShipping?.name ||
            "N/A";

        const shippingAddress =
            session.shipping_details?.address ||
            paymentIntentShipping?.address;

        const formattedShippingAddress = shippingAddress
            ? `
        <strong>Name:</strong> ${shippingName}<br />
        ${shippingAddress.line1 || ""}<br />
        ${shippingAddress.line2 || ""}<br />
        ${shippingAddress.city || ""}, ${shippingAddress.state || ""} ${shippingAddress.postal_code || ""
            }<br />
        ${shippingAddress.country || ""}
      `
            : "No shipping address provided.";

        await resend.emails.send({
            from: "Decorina Rituals <orders@decorinarituals.com>",
            to: "info@decorinarituals.co.site",
            subject: "New Decorina Rituals Order",
            html: `
                <h2>New Decorina Rituals Order</h2>

                <h3>Customer</h3>
                <p>
                    <strong>Name:</strong> ${customer?.name || "N/A"}<br />
                    <strong>Email:</strong> ${customer?.email || "N/A"}<br />
                    <strong>Phone:</strong> ${customer?.phone || "N/A"}
                </p>

                <h3>Shipping Address</h3>
<p>
    ${formattedShippingAddress}
</p>

                <h3>Items</h3>
                <ul>${itemsHtml}</ul>

                <h3>Total Paid</h3>
                <p>$${(session.amount_total / 100).toFixed(2)} AUD</p>
            `,
        });
    }

    return res.status(200).json({ received: true });
}