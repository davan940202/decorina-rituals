import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Waitlist() {
    const kitFormRef = useRef(null);

    useEffect(() => {
        if (!kitFormRef.current) return;

        kitFormRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-uid", "ab0a42c537");
        script.src = "https://decorina-rituals.kit.com/ab0a42c537/index.js";

        kitFormRef.current.appendChild(script);
    }, []);

    return (
        <div
            style={{
                background: "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
                minHeight: "100vh",
                fontFamily: "serif",
                color: "#2d241f",
            }}
        >
            <Header cart={0} setIsCartOpen={() => { }} />

            <main
                style={{
                    padding: "120px 24px 120px",
                    maxWidth: "1600px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#8b6f55",
                        marginBottom: "16px",
                    }}
                >
                    Decorina Rituals
                </p>

                <h1
                    style={{
                        fontSize: "58px",
                        lineHeight: "1.05",
                        color: "#433831",
                        marginBottom: "22px",
                    }}
                >
                    Become Part of Our Story
                </h1>

                <p
                    style={{
                        maxWidth: "620px",
                        margin: "0 auto 52px",
                        fontSize: "18px",
                        lineHeight: "1.8",
                        color: "#7a685a",
                    }}
                >
                    Be among the first to experience Decorina Rituals. Receive early
                    access, exclusive launch offers, and first access to our signature
                    scent collection.
                </p>

                <p
                    style={{
                        fontSize: "14px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "#8b6f55",
                        marginBottom: "35px",
                    }}
                >
                    Early access · Exclusive launch offers · Limited editions
                </p>

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        margin: "0 auto 100px",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "1400px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            ref={kitFormRef}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}