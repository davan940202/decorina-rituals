import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductModal({
    selectedProduct,
    setSelectedProduct,
    addToCart,
}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProduct]);
    if (!selectedProduct) return null;

    return (
        <>
            <div
                onClick={() => setSelectedProduct(null)}
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 1000,
                }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "fixed",
                    inset: 0,
                    margin: "auto",
                    height: "fit-content",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    width: "760px",
                    maxWidth: "92vw",
                    backgroundColor: "#fffaf5",
                    borderRadius: "28px",
                    padding: "28px",
                    zIndex: 1001,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "28px",
                }}
            >
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    style={{
                        width: "100%",
                        height: isMobile ? "260px" : "420px",
                        objectFit: "cover",
                        borderRadius: "22px",
                    }}
                />

                <div>
                    <button
                        onClick={() => setSelectedProduct(null)}
                        style={{
                            float: "right",
                            border: "none",
                            background: "none",
                            fontSize: "28px",
                            cursor: "pointer",
                        }}
                    >
                        ×
                    </button>

                    <p
                        style={{
                            color: "#9c8877",
                            fontSize: "12px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            marginBottom: "12px",
                        }}
                    >
                        100g Soy Candle
                    </p>

                    <h2
                        style={{
                            fontSize: "42px",
                            marginBottom: "12px",
                        }}
                    >
                        {selectedProduct.name}
                    </h2>

                    <p
                        style={{
                            color: "#8b6f55",
                            marginBottom: "18px",
                        }}
                    >
                        {selectedProduct.scent}
                    </p>

                    <p
                        style={{
                            color: "#6e5b4d",
                            lineHeight: "1.7",
                            marginBottom: "24px",
                        }}
                    >
                        {selectedProduct.description}
                    </p>

                    <p style={{ marginBottom: "12px" }}>
                        <strong>Burn style:</strong> Low-smoke soy wax blend
                    </p>

                    <p style={{ marginBottom: "12px" }}>
                        <strong>Best for:</strong> Relaxation, gifting, and home ambience
                    </p>

                    <p style={{ marginBottom: "28px" }}>
                        <strong>Price:</strong> {selectedProduct.price}
                    </p>

                    <button
                        onClick={() => {
                            addToCart(selectedProduct);
                            setSelectedProduct(null);
                        }}
                        style={{
                            width: "100%",
                            padding: "15px",
                            borderRadius: "999px",
                            border: "none",
                            backgroundColor: "#2d241f",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "15px",
                        }}
                    >
                        + Add to Cart
                    </button>
                </div>
            </motion.div>
        </>
    );
}