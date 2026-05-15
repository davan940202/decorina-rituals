import { useEffect, useState } from "react";

export default function Header({ cart, setIsCartOpen }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: isMobile ? "18px 20px" : "22px 28px",
                borderBottom: "1px solid #ddd",
                backgroundColor: scrolled
                    ? "rgba(255,250,245,0.92)"
                    : "#fffaf5",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                transition: "0.3s",
                position: "sticky",
                top: 0,
                zIndex: 10,
            }}
        >
            <h1
                style={{
                    fontSize: isMobile ? "30px" : "30px",
                    letterSpacing: "1px",
                    lineHeight: "1.1",
                }}
            >
                Decorina Rituals
            </h1>

            {!isMobile && (
                <nav
                    style={{
                        display: "flex",
                        gap: "20px",
                        fontSize: "14px",
                        letterSpacing: "0.5px",
                    }}
                >
                    <a href="#home">Home</a>
                    <a href="#shop">Shop</a>
                    <a href="#about">About</a>
                    <a href="#why">Why Us</a>
                    <a href="#contact">Contact</a>
                </nav>
            )}

            <button
                onClick={() => setIsCartOpen(true)}
                style={{
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    transition: "0.3s",
                    color: "#2d241f",
                }}
            >
                Cart ({cart})
            </button>
        </header>
    );
}