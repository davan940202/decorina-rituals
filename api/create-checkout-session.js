import Stripe from "stripe";

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const origin = req.headers.origin || "http://localhost:3000";
    const subtotal = cartItems.reduce((sum, item) => {
      return sum + Number(item.price.replace("$", "")) * item.quantity;
    }, 0);

    const shippingFee = subtotal >= 150 ? 0 : 7.95;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      shipping_address_collection: {
        allowed_countries: ["AU"],
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: Math.round(shippingFee * 100),
              currency: "aud",
            },
            display_name:
              shippingFee === 0
                ? "Free Standard Delivery"
                : "Standard Delivery",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 2,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
      ],

      phone_number_collection: {
        enabled: true,
      },

      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "aud",
          product_data: {
            name: item.name,
            description: item.scent,
          },
          unit_amount: Math.round(Number(item.price.replace("$", "")) * 100),
        },
        quantity: item.quantity,
      })),

      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return res.status(500).json({ error: error.message });
  }
}