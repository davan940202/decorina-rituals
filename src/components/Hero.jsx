import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import candle from "../assets/images/candle.jpg";

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
                    Melbourne Wellness Candles
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
                    A Soft Ritual
                    <br />
                    for Calm & Wellness
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
                    Hand-poured soy candles crafted for relaxation, mindfulness, and
                    beautiful home ambience.
                </p>

                <button
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
                    height: isMobile ? "400px" : "600px",
                    borderRadius: "40px",
                    background: "linear-gradient(to bottom right, #eadfce, #d6bea1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        background: "rgba(255,255,255,0.18)",
                        borderRadius: "50%",
                        top: "-120px",
                        right: "-120px",
                        filter: "blur(20px)",
                    }}
                />

                <img
                    src={candle}
                    alt="Decorina Rituals Candle"
                    style={{
                        width: isMobile ? "260px" : "340px",
                        height: "auto",
                        borderRadius: "30px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                        position: "relative",
                        zIndex: 2,
                    }}
                />
            </div>
        </section>
    );
}