import { useEffect, useState } from "react";

export default function Header({ cart }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "22px 28px",
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
                    fontSize: "30px",
                    letterSpacing: "1px",
                }}
            >
                Decorina Rituals
            </h1>

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

            <div
                style={{
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                }}
            >
                Cart ({cart})
            </div>
        </header>
    );
}