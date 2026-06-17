import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Collection({
    addToCart,
    setSelectedProduct,
}) {
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
                    marginBottom: "60px",
                }}
            >
                Discover all Decorina Rituals scents.
            </p>
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
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "30px",
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </div>
        </div>
    );
}