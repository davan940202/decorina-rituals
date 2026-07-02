import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Collection({
    addToCart,
    setSelectedProduct,
}) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div
            style={{
                padding: "120px 24px",
                maxWidth: "1400px",
                margin: "0 auto",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "56px",
                    marginBottom: "20px",
                }}
            >
                The Ritual Collection
            </h1>

            <p
                style={{
                    textAlign: "center",
                    color: "#8b6f55",
                    marginBottom: "40px",
                }}
            >
                Discover all Decorina Rituals scents.
            </p>

            {/* Search Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "50px",
                }}
            >
                <input
                    type="text"
                    placeholder="Search by candle name..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    style={{
                        width: "100%",
                        maxWidth: "420px",
                        padding: "14px 20px",
                        border: "1px solid #d8c5b2",
                        borderRadius: "999px",
                        backgroundColor: "#fffaf5",
                        color: "#2d241f",
                        fontSize: "15px",
                        outline: "none",
                        fontFamily: "inherit",
                    }}
                />
            </div>

            <div
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                }}
            >
                <a
                    href="/"
                    style={{
                        color: "#8b6f55",
                        textDecoration: "none",
                        fontSize: "16px",
                        letterSpacing: "0.5px",
                    }}
                >
                    ← Return to Rituals
                </a>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(300px, 300px))",
                    justifyContent: "center",
                    gap: "30px",
                }}
            >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            setSelectedProduct={setSelectedProduct}
                        />
                    ))
                ) : (
                    <p
                        style={{
                            gridColumn: "1 / -1",
                            textAlign: "center",
                            color: "#8b6f55",
                            fontSize: "18px",
                            marginTop: "40px",
                        }}
                    >
                        No candles found.
                    </p>
                )}
            </div>
        </div>
    );
}