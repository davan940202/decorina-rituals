import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                minHeight: "78vh",
                padding: "120px 24px 90px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <p
                style={{
                    color: "#8b6f55",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    marginBottom: "24px",
                }}
            >
                WELLNESS · MINDFULNESS · RITUALS
            </p>

            <h1
                style={{
                    fontSize: "clamp(54px, 8vw, 96px)",
                    lineHeight: "0.95",
                    letterSpacing: "-2px",
                    marginBottom: "30px",
                    maxWidth: "980px",
                }}
            >
                Transform Everyday
                <br />
                Moments Into Rituals
            </h1>

            <p
                style={{
                    fontSize: "21px",
                    lineHeight: "1.8",
                    color: "#6e5b4d",
                    maxWidth: "680px",
                    marginBottom: "38px",
                }}
            >
                Hand-poured soy candles crafted to support calm, balance and
                everyday wellness through meaningful rituals.
            </p>

            <a
                href="#shop"
                style={{
                    padding: "16px 32px",
                    borderRadius: "999px",
                    backgroundColor: "#2d241f",
                    color: "white",
                    fontSize: "16px",
                    textDecoration: "none",
                    display: "inline-block",
                }}
            >
                Shop Candles
            </a>
        </motion.section>
    );
}