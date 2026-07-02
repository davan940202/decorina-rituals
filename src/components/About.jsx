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
            <h2
                style={{
                    fontSize: "48px",
                    marginBottom: "24px",
                    color: "#2d241f",
                }}
            >
                About Decorina Rituals
            </h2>

            <div
                style={{
                    width: "160px",
                    height: "1px",
                    backgroundColor: "#c9b39a",
                    margin: "0 auto 48px",
                }}
            />

            <div
                style={{
                    maxWidth: "850px",
                    margin: "0 auto",
                    color: "#6e5b4d",
                    textAlign: "left",
                    lineHeight: "2",
                    fontSize: "18px",
                }}
            >
                <p style={{ marginBottom: "28px" }}>
                    <strong>Decorina Rituals</strong> is a Melbourne-based wellness and
                    lifestyle brand created to bring calm, warmth, and intentional living
                    into everyday spaces.
                </p>

                <p style={{ marginBottom: "28px" }}>
                    We believe that true wellness begins with the small rituals we create
                    for ourselves. Every candle is thoughtfully designed to transform
                    ordinary moments into meaningful experiences—whether you're starting
                    your morning with intention, unwinding after a long day, practising
                    mindfulness, or simply enjoying a quiet evening at home.
                </p>

                <p style={{ marginBottom: "28px" }}>
                    Inspired by nature and crafted with care, our candles are hand-poured
                    using natural soy wax and thoughtfully curated fragrance blends. We
                    value natural ingredients, timeless design, and fragrances that create
                    not only beautiful homes, but a peaceful state of mind.
                </p>

                <p style={{ marginBottom: "28px" }}>
                    At Decorina Rituals, our candles are more than home fragrances—they
                    represent a lifestyle centred around balance, wellness, and slowing
                    down. Every scent is designed to evoke a feeling, tell a story, and
                    become part of your everyday rituals.
                </p>

                <p>
                    Elegant, soothing, and gift-ready, each candle is created to bring a
                    sense of quiet luxury into your home while reflecting the way we believe
                    life should be lived: intentionally, beautifully, and mindfully.
                </p>
            </div>
        </motion.section>
    );
}