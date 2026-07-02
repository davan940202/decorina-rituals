import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductModal({
  selectedProduct,
  setSelectedProduct,
  addToCart,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setSelectedProduct]);

  if (!selectedProduct) return null;

  return (
    <>
      <div
        onClick={() => setSelectedProduct(null)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: 1000,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          inset: 0,
          margin: "auto",
          height: "fit-content",
          maxHeight: "90vh",
          overflowY: "auto",
          width: "980px",
          maxWidth: "92vw",
          backgroundColor: "#fffaf5",
          borderRadius: "30px",
          padding: isMobile ? "22px" : "32px",
          zIndex: 1001,
          boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
          gap: "34px",
        }}
      >
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          style={{
            width: "100%",
            height: isMobile ? "280px" : "560px",
            objectFit: "cover",
            borderRadius: "24px",
            position: isMobile ? "static" : "sticky",
            top: "0",
            marginTop: "80px",
          }}
        />

        <div>
          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              float: "right",
              border: "none",
              background: "none",
              fontSize: "30px",
              cursor: "pointer",
              color: "#2d241f",
            }}
          >
            ×
          </button>

          <p
            style={{
              color: "#9c8877",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            100g Soy Candle
          </p>

          <h2
            style={{
              fontSize: isMobile ? "36px" : "46px",
              marginBottom: "12px",
              color: "#2d241f",
            }}
          >
            {selectedProduct.name}
          </h2>

          <p
            style={{
              color: "#8b6f55",
              marginBottom: "22px",
              fontSize: "16px",
            }}
          >
            {selectedProduct.scent}
          </p>

          <p
            style={{
              color: "#6e5b4d",
              lineHeight: "1.8",
              marginBottom: "24px",
              whiteSpace: "pre-line",
            }}
          >
            {selectedProduct.story || selectedProduct.description}
          </p>

          <div
            style={{
              backgroundColor: "#f5ede4",
              borderRadius: "18px",
              padding: "20px",
              marginBottom: "24px",
              color: "#5f4d42",
              lineHeight: "1.8",
            }}
          >
            <p style={{ marginBottom: "10px" }}>
              <strong>Burn Time:</strong> {selectedProduct.burnTime}
            </p>

            {selectedProduct.notes && (
              <>
                <p style={{ marginBottom: "6px" }}>
                  <strong>Fragrance Notes</strong>
                </p>
                <p style={{ marginBottom: "4px" }}>
                  <strong>Top:</strong> {selectedProduct.notes.top}
                </p>
                <p style={{ marginBottom: "4px" }}>
                  <strong>Heart:</strong> {selectedProduct.notes.heart}
                </p>
                <p style={{ marginBottom: "14px" }}>
                  <strong>Base:</strong> {selectedProduct.notes.base}
                </p>
              </>
            )}

            <p>
              <strong>Mood:</strong> {selectedProduct.mood}
            </p>
          </div>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "24px",
              color: "#2d241f",
            }}
          >
            <strong>{selectedProduct.price}</strong>
          </p>

          <button
            onClick={() => {
              addToCart(selectedProduct);
              setSelectedProduct(null);
            }}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#2d241f",
              color: "white",
              cursor: "pointer",
              fontSize: "15px",
              letterSpacing: "0.4px",
            }}
          >
            + Add to Cart
          </button>
        </div>
      </motion.div>
    </>
  );
}