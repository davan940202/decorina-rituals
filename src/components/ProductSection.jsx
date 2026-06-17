import ProductCard from "./ProductCard";
import { featuredProducts } from "../data/products";
import { motion } from "framer-motion";

export default function ProductSection({ addToCart, setSelectedProduct }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="shop"
            style={{
                padding: "120px 24px",
            }}
        >
            <p
                style={{
                    textAlign: "center",
                    color: "#8b6f55",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    marginBottom: "14px",
                }}
            >
                Best Sellers
            </p>

            <h2
                style={{
                    fontSize: "44px",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                Signature Scents
            </h2>

            <div
                style={{
                    width: "160px",
                    height: "1px",
                    backgroundColor: "#bfa58a",
                    margin: "0 auto 32px",
                }}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "30px",
                }}
            >
                {featuredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </div>

            <div
                style={{
                    textAlign: "center",
                    marginTop: "48px",
                }}
            >
                <a
                    href="/collection"
                    style={{
                        color: "#8b6f55",
                        textDecoration: "none",
                        fontSize: "18px",
                        letterSpacing: "0.5px",
                        fontStyle: "italic",
                        borderBottom: "1px solid #bfa58a",
                        paddingBottom: "4px",
                    }}
                >
                    Browse the Rituals
                </a>
            </div>
        </motion.section>
    );
}