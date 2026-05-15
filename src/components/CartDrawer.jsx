import { motion } from "framer-motion";

export default function CartDrawer({
    cartItems,
    isCartOpen,
    setIsCartOpen,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
}) {
    const total = cartItems.reduce((sum, item) => {
        return sum + Number(item.price.replace("$", "")) * item.quantity;
    }, 0);

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

                <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
                    Your Cart
                </h2>

                {cartItems.length === 0 ? (
                    <p style={{ color: "#6e5b4d" }}>Your cart is empty.</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item.name}
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
                                    <h3 style={{ marginBottom: "6px" }}>
                                        {item.name}
                                    </h3>

                                    <p
                                        style={{
                                            color: "#6e5b4d",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        {item.price} × {item.quantity} = $
                                        {(
                                            Number(item.price.replace("$", "")) * item.quantity
                                        ).toFixed(2)}
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
                                                    decreaseQuantity(item.name)
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
                                                    increaseQuantity(item.name)
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
                                                removeFromCart(item.name)
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
                        <h3 style={{ marginTop: "24px" }}>
                            Total: ${total.toFixed(2)}
                        </h3>

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

                                    const data = await response.json();

                                    if (data.url) {
                                        window.location.href = data.url;
                                    }
                                    else {
                                        alert("Checkout could not start. Please try again.");
                                    }
                                } catch (error) {
                                    console.error("Checkout error:", error);
                                    alert("Checkout error. Check your terminal or browser console.");
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