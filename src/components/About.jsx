import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="about"
            style={{
                padding: "120px 24px",
                backgroundColor: "#fffaf5",
                textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
                About Decorina Rituals
            </h2>

            <div
                style={{
                    width: "160px",
                    height: "1px",
                    backgroundColor: "#c9b39a",
                    margin: "0 auto 32px",
                }}
            />

            <p
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    fontSize: "20px",
                    lineHeight: "1.8",
                    color: "#6e5b4d",
                }}
            >
                Decorina Rituals is a Melbourne-based wellness candle brand created to
                bring calm, warmth, and mindfulness into everyday spaces. Our candles
                are designed to feel elegant, soothing, and gift-ready.
            </p>
        </motion.section>
    );
}