import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../assets/images/hero.png";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section
            id="home"
            style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                alignItems: "center",
                padding: isMobile ? "60px 24px" : "100px 60px",
                gap: "60px",
                minHeight: "80vh",
            }}
        >
            <div>
                <p
                    style={{
                        color: "#8b6f55",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        marginBottom: "18px",
                    }}
                >
                    WELLNESS · MINDFULNESS · RITUALS
                </p>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: isMobile ? "56px" : "84px",
                        lineHeight: "1",
                        letterSpacing: "-2px",
                        marginBottom: "24px",
                    }}
                >
                    Transform Everyday
                    <br />
                    Moments Into Rituals
                </motion.h1>

                <p
                    style={{
                        fontSize: "21px",
                        lineHeight: "1.8",
                        color: "#6e5b4d",
                        maxWidth: "600px",
                        marginBottom: "32px",
                    }}
                >
                    Hand-poured soy candles crafted to support calm,
                    balance and everyday wellness through meaningful rituals.
                </p>

                <button
                    onClick={() => {
                        window.location.href = "/collection";
                    }}
                    style={{
                        padding: "16px 28px",
                        borderRadius: "999px",
                        border: "none",
                        backgroundColor: "#2d241f",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Shop Candles
                </button>
            </div>

            <div
                style={{
                    height: isMobile ? "420px" : "620px",
                    borderRadius: "42px",
                    background: "linear-gradient(to bottom right, #eadfce, #d8c0a4)",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 30px 80px rgba(61, 45, 34, 0.12)",
                }}
            >
                <img
                    src={heroImage}
                    alt="Decorina Rituals Candle"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                    }}
                />
            </div>
        </section>
    );
}