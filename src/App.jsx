import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import About from "./components/About";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import CartDrawer from "./components/CartDrawer";
import ProductModal from "./components/ProductModal";

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("decorina_cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    localStorage.setItem("decorina_cart", JSON.stringify(cartItems));
  }, [cartItems]);
  function increaseQuantity(productName) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productName) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productName) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== productName)
    );
  }

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);

      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const currentPath = window.location.pathname;

  if (currentPath === "/success") {
  localStorage.removeItem("decorina_cart");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
        padding: "24px",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fffaf5",
          padding: "60px 40px",
          borderRadius: "32px",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            backgroundColor: "#efe4d7",
            margin: "0 auto 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          ✓
        </div>

        <p
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#9c8877",
            marginBottom: "12px",
          }}
        >
          Decorina Rituals
        </p>

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "18px",
            lineHeight: "1.1",
            color: "#2d241f",
          }}
        >
          Thank You
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#6e5b4d",
            lineHeight: "1.8",
            marginBottom: "34px",
          }}
        >
          Your order has been placed successfully.
          We can’t wait for you to experience your new rituals at home.
        </p>

        <div
          style={{
            backgroundColor: "#f5ede4",
            padding: "18px",
            borderRadius: "18px",
            marginBottom: "30px",
            color: "#6e5b4d",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          A confirmation email and shipping updates
          will be sent once your order is processed.
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "16px 34px",
            borderRadius: "999px",
            backgroundColor: "#2d241f",
            color: "white",
            textDecoration: "none",
            fontSize: "15px",
            letterSpacing: "0.5px",
          }}
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

  if (currentPath === "/cancel") {
    return (
      <div style={{ padding: "80px 24px", textAlign: "center" }}>
        <h1>Order Cancelled</h1>
        <p>Your payment was not completed.</p>
        <a href="/">Back to Home</a>
      </div>
    );
  }
  return (


    <div
      style={{
        background: "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        fontFamily: "serif",
        color: "#2d241f",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >

      <Header cart={cartCount} setIsCartOpen={setIsCartOpen} />

      <Hero />

      <ProductSection
        addToCart={addToCart}
        setSelectedProduct={setSelectedProduct}
      />

      <WhyChooseUs />

      <About />

      <Footer />

      <CartDrawer
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
      <ProductModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
}