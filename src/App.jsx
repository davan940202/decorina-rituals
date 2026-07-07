import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import About from "./components/About";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import CartDrawer from "./components/CartDrawer";
import ProductModal from "./components/ProductModal";
import Collection from "./pages/Collection";
import Waitlist from "./pages/Waitlist";
import WaitlistSuccess from "./pages/WaitlistSuccess";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("decorina_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  useEffect(() => {
    localStorage.setItem("decorina_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
  useEffect(() => {
    if (window.location.pathname === "/success") {
      localStorage.removeItem("decorina_cart");
      setCartItems([]);
    }
  }, []);

  function addToCart(product) {
    setToastMessage(`${product.name} added to cart`);

    setTimeout(() => {
      setToastMessage("");
    }, 1800);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(productId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productId) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const currentPath = window.location.pathname;
  if (currentPath === "/waitlist-success") {
    return <WaitlistSuccess />;
  }
  if (window.location.pathname === "/waitlist") {
    return <Waitlist />;
  }
  if (currentPath === "/collection") {
    return (
      <div
        style={{
          background: "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
          minHeight: "100vh",
          fontFamily: "serif",
          color: "#2d241f",
        }}
      >
        <Header cart={cartCount} setIsCartOpen={setIsCartOpen} />

        <Collection
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
        />

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
        {toastMessage && (
          <div
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              backgroundColor: "#2d241f",
              color: "#fffaf5",
              padding: "14px 22px",
              borderRadius: "999px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
              zIndex: 3000,
              fontSize: "15px",
              letterSpacing: "0.3px",
            }}
          >
            ✓ {toastMessage}
          </div>
        )}
      </div>
    );
  }
  if (currentPath === "/success") {

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
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
          padding: "24px",
          fontFamily: "serif",
          color: "#2d241f",
        }}
      >
        <div
          style={{
            backgroundColor: "#fffaf5",
            padding: "56px 36px",
            borderRadius: "32px",
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              width: "82px",
              height: "82px",
              borderRadius: "50%",
              backgroundColor: "#efe4d7",
              margin: "0 auto 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              color: "#8b6f55",
            }}
          >
            ✕
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
              fontSize: "46px",
              marginBottom: "18px",
              lineHeight: "1.1",
            }}
          >
            Order Cancelled
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#6e5b4d",
              lineHeight: "1.8",
              marginBottom: "26px",
            }}
          >
            Your payment was not completed. No worries — your cart is still waiting for you.
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
            Need help checking out? Contact us at info@decorinarituals.com.
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                padding: "16px 30px",
                borderRadius: "999px",
                backgroundColor: "#2d241f",
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "0.5px",
              }}
            >
              Back to Home
            </a>

            <a
              href="/collection"
              style={{
                padding: "16px 30px",
                borderRadius: "999px",
                border: "1px solid #b89b82",
                color: "#2d241f",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "0.5px",
              }}
            >
              Return to Cart
            </a>
          </div>
        </div>
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

      <section id="home" style={{ scrollMarginTop: "90px" }}>
        <Hero />
      </section>

      <section id="shop" style={{ scrollMarginTop: "90px" }}>
        <ProductSection
          addToCart={addToCart}
          setSelectedProduct={setSelectedProduct}
        />
      </section>

      <section id="why-us" style={{ scrollMarginTop: "90px" }}>
        <WhyChooseUs />
      </section>

      <section id="about" style={{ scrollMarginTop: "90px" }}>
        <About />
      </section>

      <section id="contact" style={{ scrollMarginTop: "90px" }}>
        <Footer />
      </section>

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

      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            backgroundColor: "#2d241f",
            color: "#fffaf5",
            padding: "14px 22px",
            borderRadius: "999px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            zIndex: 3000,
            fontSize: "15px",
            letterSpacing: "0.3px",
          }}
        >
          ✓ {toastMessage}
        </div>
      )}
      <Analytics />
    </div>
  );
}