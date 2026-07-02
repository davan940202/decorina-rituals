export default function WhyChooseUs() {
    const features = [
        {
            icon: "🍃",
            title: "Naturally Crafted",
            description:
                "Hand-poured using natural soy wax and thoughtfully selected ingredients.",
        },
        {
            icon: "🌿",
            title: "Wellness First",
            description:
                "Designed to encourage slow living, mindfulness, and moments of everyday calm.",
        },
        {
            icon: "🕯️",
            title: "Everyday Rituals",
            description:
                "Created to transform ordinary routines into meaningful moments of relaxation.",
        },
        {
            icon: "🎁",
            title: "Beautifully Gifted",
            description:
                "Elegant, soothing, and gift-ready for the people and spaces that matter.",
        },
    ];

    return (
        <section
            id="why"
            style={{
                padding: "130px 24px",
                backgroundColor: "#fffaf5",
                textAlign: "center",
            }}
        >
            <p
                style={{
                    color: "#8b6f55",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    marginBottom: "18px",
                }}
            >
                OUR PHILOSOPHY
            </p>

            <h2
                style={{
                    fontSize: "56px",
                    marginBottom: "24px",
                    color: "#2d241f",
                }}
            >
                Crafted for Mindful Living
            </h2>

            <div
                style={{
                    width: "70px",
                    height: "1px",
                    backgroundColor: "#d9c8b5",
                    margin: "0 auto 30px",
                }}
            />

            <p
                style={{
                    maxWidth: "760px",
                    margin: "0 auto 70px",
                    fontSize: "18px",
                    lineHeight: "1.9",
                    color: "#6e5b4d",
                }}
            >
                Every Decorina Rituals candle is thoughtfully crafted using
                natural ingredients and timeless fragrance blends to transform
                everyday moments into meaningful rituals of calm, wellness, and
                intentional living.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "30px",
                    maxWidth: "1220px",
                    margin: "0 auto",
                }}
            >
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        style={{
                            padding: "48px 32px",
                            minHeight: "320px",
                            border: "1px solid #ede6dc",
                            borderRadius: "30px",
                            backgroundColor: "#faf6f1",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            transition: "all 0.35s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.boxShadow =
                                "0 20px 40px rgba(67, 56, 49, 0.08)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <div
                            style={{
                                fontSize: "34px",
                                marginBottom: "22px",
                            }}
                        >
                            {feature.icon}
                        </div>

                        <h3
                            style={{
                                fontSize: "24px",
                                color: "#2d241f",
                                marginBottom: "16px",
                            }}
                        >
                            {feature.title}
                        </h3>

                        <p
                            style={{
                                color: "#6e5b4d",
                                lineHeight: "1.9",
                                fontSize: "15px",
                                margin: 0,
                            }}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}