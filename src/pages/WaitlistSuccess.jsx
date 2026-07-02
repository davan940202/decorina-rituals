import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WaitlistSuccess() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
        minHeight: "100vh",
        fontFamily: "serif",
        color: "#2d241f",
      }}
    >
      <Header cart={0} setIsCartOpen={() => {}} />

      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            background: "#fffaf5",
            padding: "70px 46px",
            borderRadius: "32px",
            boxShadow: "0 20px 60px rgba(67, 56, 49, 0.10)",
          }}
        >
          <p
            style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "12px",
              color: "#8b6f55",
              marginBottom: "18px",
            }}
          >
            Decorina Rituals
          </p>

          <h1
            style={{
              fontSize: "54px",
              lineHeight: "1.05",
              color: "#433831",
              marginBottom: "24px",
            }}
          >
            Welcome to the Beginning
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#7a685a",
              marginBottom: "34px",
            }}
          >
            Thank you for becoming part of our story. You’re now among the
            first to experience Decorina Rituals before our official launch.
          </p>

          <div
            style={{
              background: "#f5ede4",
              padding: "22px",
              borderRadius: "18px",
              color: "#6e5b4d",
              lineHeight: "1.8",
              marginBottom: "34px",
            }}
          >
            Early access · Exclusive launch offers · Limited editions
          </div>

          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "16px 34px",
              borderRadius: "999px",
              backgroundColor: "#433831",
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
              letterSpacing: "0.5px",
            }}
          >
            Return Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}