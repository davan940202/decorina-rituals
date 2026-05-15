import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: "#fff",
                borderRadius: "24px",
                padding: "24px",
                transition: "0.3s",
                transform: isHovered
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow: isHovered
                    ? "0 14px 30px rgba(0,0,0,0.14)"
                    : "0 4px 12px rgba(0,0,0,0.08)",
            }}
        >
            <div
                style={{
                    overflow: "hidden",
                    borderRadius: "20px",
                    marginBottom: "20px",
                }}
            >
                <img
                    src={product.image}

                    alt={product.name}
                    style={{
                        width: "100%",
                        height: "260px",
                        objectFit: "cover",
                        transition: "0.4s",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                />
            </div>
            <p
                style={{
                    color: "#9c8877",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                }}
            >
                100g Soy Candle
            </p>

            <h2
                style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                }}
            >
                {product.name}
            </h2>

            <p
                style={{
                    color: "#8b6f55",
                    marginBottom: "20px",
                }}
            >
                {product.scent}
            </p>
            <p
                style={{
                    color: "#6e5b4d",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                }}
            >
                {product.description}
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <strong>{product.price}</strong>

                <button
                    onClick={() => addToCart()}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#4a3b31";
                    }}

                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#2d241f";
                    }}
                    style={{
                        padding: "12px 20px",
                        borderRadius: "999px",
                        border: "none",
                        backgroundColor: "#2d241f",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "15px",
                        transition: "0.25s ease",
                        transform: isHovered ? "translateY(-1px)" : "translateY(0)",
                        letterSpacing: "0.5px",
                    }}
                >
                    + Add to Cart
                </button>
            </div>
        </div>
    );
}