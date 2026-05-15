import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "./data/products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import About from "./components/About";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  const [cart, setCart] = useState(0);

  const products = [
    {
      name: "Lait de Coco",
      scent: "Coconut Milk · Vanilla",
      price: "$14",
    },
    {
      name: "Sauge Marine",
      scent: "Sea Salt · Sage",
      price: "$14",
    },
    {
      name: "Rose de Velours",
      scent: "Rose · Amber",
      price: "$14",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #f8f3ec, #f3ece3)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        fontFamily: "serif",
        color: "#2d241f",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <Header cart={cart} />

      <Hero />

      <ProductSection cart={cart} setCart={setCart} />

      <WhyChooseUs />

      <About />

      <Footer />

    </div>
  );
}