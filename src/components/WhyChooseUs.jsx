export default function WhyChooseUs() {
    const features = [
        "Soy wax blend",
        "Plant-based scents",
        "Low-smoke burn",
        "Gift-ready design",
    ];

    return (
        <section id="why"
            style={{
                padding: "100px 24px",
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
                    marginBottom: "14px",
                }}
            >
                Our Promise
            </p>

            <h2 style={{ fontSize: "48px", marginBottom: "32px" }}>
                Made for Everyday Calm
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "24px",
                    maxWidth: "1000px",
                    margin: "0 auto",
                }}
            >
                {features.map((feature) => (
                    <div
                        key={feature}
                        style={{
                            padding: "28px",
                            border: "1px solid #eadfce",
                            borderRadius: "24px",
                            backgroundColor: "#f8f3ec",
                        }}
                    >
                        {feature}
                    </div>
                ))}
            </div>
        </section>
    );
}