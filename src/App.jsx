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
    return (
      <div style={{ padding: "80px 24px", textAlign: "center" }}>
        <h1>Thank you for your order</h1>
        <p>Your payment was successful.</p>
        <a
          href="/"
          onClick={() => {
            localStorage.removeItem("decorina_cart");
          }}
        >
          Back to Home
        </a>
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