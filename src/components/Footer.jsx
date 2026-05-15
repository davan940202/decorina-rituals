import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="contact"
            style={{
                padding: "80px 24px",
                backgroundColor: "#fffaf5",
                borderTop: "1px solid #ddd",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "38px",
                    marginBottom: "16px",
                }}
            >
                Decorina Rituals
            </h2>

            <p
                style={{
                    color: "#6e5b4d",
                    marginBottom: "28px",
                    fontSize: "17px",
                }}
            >
                Hand-poured wellness candles from Melbourne.
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "28px",
                    marginBottom: "30px",
                    fontSize: "15px",
                    flexWrap: "wrap",
                }}
            >
                <a
                    href="https://www.instagram.com/decorinarituals?igsh=MWZ6cXRvcTVkZzN0MA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = "#8b6f55";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = "#2d241f";
                    }}
                >
                    Instagram
                </a>

                <a
                    href="mailto:info@decorinarituals.co.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = "#8b6f55";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = "#2d241f";
                    }}
                >
                    info@decorinarituals.co.site
                </a>
            </div>

            <p
                style={{
                    color: "#9c8877",
                    fontSize: "14px",
                }}
            >
                © 2026 Decorina Rituals. All rights reserved.
            </p>
        </motion.footer>
    );
}