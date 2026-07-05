import { motion } from "framer-motion";

export default function CartDrawer({
    cartItems,
    isCartOpen,
    setIsCartOpen,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
}) {
    const subtotal = cartItems.reduce((sum, item) => {
        return sum + Number(item.price.replace("$", "")) * item.quantity;
    }, 0);

    const shippingFee = subtotal >= 150 ? 0 : 7.95;
    const total = subtotal + shippingFee;

    if (!isCartOpen) return null;

    return (
        <>
            <div
                onClick={() => setIsCartOpen(false)}
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.35)",
                    zIndex: 998,
                }}
            />

            <motion.div
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                exit={{ x: 400 }}
                transition={{ duration: 0.35 }}
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "380px",
                    maxWidth: "90vw",
                    height: "100vh",
                    backgroundColor: "#fffaf5",
                    boxShadow: "-10px 0 30px rgba(0,0,0,0.12)",
                    zIndex: 999,
                    padding: "28px",
                    overflowY: "auto",
                }}
            >
                <button
                    onClick={() => setIsCartOpen(false)}
                    style={{
                        border: "none",
                        background: "none",
                        fontSize: "28px",
                        cursor: "pointer",
                        float: "right",
                    }}
                >
                    ×
                </button>

                <h2
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "56px",
                        fontWeight: 500,
                        marginBottom: "34px",
                    }}
                >                    Your Cart
                </h2>

                {cartItems.length === 0 ? (
                    <p style={{ color: "#6e5b4d" }}>Your cart is empty.</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    borderBottom: "1px solid #eadfce",
                                    padding: "20px 0",
                                    display: "flex",
                                    gap: "16px",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "cover",
                                        borderRadius: "18px",
                                    }}
                                />

                                <div style={{ flex: 1 }}>
                                    <h3
                                        style={{
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "26px",
                                            fontWeight: 500,
                                            marginBottom: "6px",
                                        }}
                                    >                                        {item.name}
                                    </h3>

                                    <p
                                        style={{
                                            color: "#6e5b4d",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        {item.price} × {item.quantity}
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                border: "1px solid #d8c5b2",
                                                borderRadius: "999px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                style={{
                                                    border: "none",
                                                    background: "transparent",
                                                    width: "36px",
                                                    height: "36px",
                                                    cursor: "pointer",
                                                    fontSize: "18px",
                                                    color: "#2d241f",
                                                }}
                                            >
                                                -
                                            </button>

                                            <span
                                                style={{
                                                    width: "36px",
                                                    textAlign: "center",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                style={{
                                                    border: "none",
                                                    background: "transparent",
                                                    width: "36px",
                                                    height: "36px",
                                                    cursor: "pointer",
                                                    fontSize: "18px",
                                                    color: "#2d241f",
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            style={{
                                                marginLeft: "auto",
                                                border: "none",
                                                background: "none",
                                                color: "#8b6f55",
                                                cursor: "pointer",
                                                fontSize: "14px",
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div style={{ marginTop: "28px", lineHeight: "2" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Shipping</span>
                                <span>
                                    {shippingFee === 0
                                        ? "Complimentary"
                                        : `$${shippingFee.toFixed(2)}`}
                                </span>
                            </div>

                            {subtotal < 150 && (
                                <p style={{ color: "#8b6f55", fontSize: "14px" }}>
                                    Spend ${(150 - subtotal).toFixed(2)} more to enjoy complimentary shipping.
                                </p>
                            )}

                            <hr
                                style={{
                                    margin: "18px 0",
                                    border: "none",
                                    borderTop: "1px solid #eadfce",
                                }}
                            />

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontWeight: 600,
                                    fontSize: "22px",
                                }}
                            >
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsCartOpen(false)}
                            style={{
                                marginTop: "18px",
                                width: "100%",
                                padding: "14px",
                                borderRadius: "999px",
                                border: "1px solid #d8c5b2",
                                backgroundColor: "transparent",
                                color: "#2d241f",
                                cursor: "pointer",
                                fontSize: "15px",
                                fontWeight: 500,
                            }}
                        >
                            Continue Shopping
                        </button>

                        <button
                            disabled={cartItems.length === 0}
                            onClick={async () => {
                                try {
                                    const response = await fetch(
                                        "/api/create-checkout-session",
                                        {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify({ cartItems }),
                                        }
                                    );

                                    const text = await response.text();

                                    console.log("Response:", text);

                                    const data = text ? JSON.parse(text) : {};

                                    if (data.url) {
                                        window.location.href = data.url;
                                    }
                                    else {
                                        alert(JSON.stringify(data));
                                    }
                                } catch (error) {
                                    console.error("Checkout error:", error);
                                    alert(error.message);
                                }
                            }}
                            style={{
                                marginTop: "24px",
                                width: "100%",
                                padding: "14px",
                                borderRadius: "999px",
                                border: "none",
                                backgroundColor:
                                    cartItems.length === 0 ? "#c8b8a8" : "#2d241f",
                                color: "white",
                                cursor:
                                    cartItems.length === 0 ? "not-allowed" : "pointer",
                                fontSize: "15px",
                                fontWeight: 500,
                                opacity: cartItems.length === 0 ? 0.7 : 1,
                            }}
                        >
                            Checkout
                        </button>
                    </>
                )}
            </motion.div>
        </>
    );
}