import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, Leaf, Gift, Mail, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const scents = [
  {
    name: "Lait de Coco",
    mood: "Creamy coconut milk, soft warmth, and quiet comfort.",
    price: "$14.00",
    notes: "Coconut Milk · Vanilla · Soft Musk",
  },
  {
    name: "Sauge Marine",
    mood: "A clean hotel-inspired scent with sea salt and herbal calm.",
    price: "$14.00",
    notes: "Sea Salt · Sage · Driftwood",
  },
  {
    name: "Rose de Velours",
    mood: "Elegant rose wrapped in a smooth velvet finish.",
    price: "$14.00",
    notes: "Rose · Amber · Powder Musk",
  },
  {
    name: "Gardénia Paradis",
    mood: "Bright, floral, and graceful for a fresh home ritual.",
    price: "$14.00",
    notes: "Gardenia · White Florals · Green Leaves",
  },
  {
    name: "Pluie d’Osmanthus",
    mood: "A poetic floral scent inspired by soft rain and golden blossoms.",
    price: "$14.00",
    notes: "Osmanthus · Tea · Soft Woods",
  },
  {
    name: "Citronnelle Lumière",
    mood: "Fresh citronella with a crisp outdoor glow.",
    price: "$14.00",
    notes: "Citronella · Lemon Peel · Green Herbs",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Soy Wax Blend",
    text: "Made for a cleaner, softer burn with a calm everyday feel.",
  },
  {
    icon: Sparkles,
    title: "Plant-Based Scents",
    text: "Designed with elegant scent profiles for relaxation and ambience.",
  },
  {
    icon: Gift,
    title: "Gift-Ready Aesthetic",
    text: "Minimal, warm, and refined packaging for thoughtful gifting.",
  },
];

export default function DecorinaRitualsWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.length, [cart]);

  const addToCart = (scent) => {
    setCart((items) => [...items, scent]);
  };

  const navLinks = ["Shop", "About", "Wholesale", "Contact"];

  return (
    <div className="min-h-screen bg-[#fbf7f0] text-[#2d241f]">
      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fbf7f0]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-xl font-serif tracking-wide">
            Decorina Rituals
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#8b6f55]">
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="rounded-full">
              <ShoppingBag className="mr-2 h-4 w-4" /> Cart ({cartCount})
            </Button>
            <Button className="rounded-full bg-[#2d241f] px-5 text-[#fbf7f0] hover:bg-[#5c4736]">
              Shop Now
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#eadfce] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              ))}
              <span>Cart ({cartCount})</span>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8b6f55]">Melbourne Wellness Candles</p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Rituals for calm, light, and everyday wellness.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6e5b4d]">
              Hand-poured 100g soy candles crafted with plant-based scents to create a peaceful home atmosphere — elegant, affordable, and made for mindful moments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-[#2d241f] px-8 py-6 text-[#fbf7f0] hover:bg-[#5c4736]">
                Shop Candles
              </Button>
              <Button variant="outline" className="rounded-full border-[#cdbda8] px-8 py-6 hover:bg-[#f4eadc]">
                Wholesale Enquiry
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#eadfce] via-[#f8efe2] to-[#d2bea4] p-8 shadow-2xl">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/60 bg-[#fffaf3]/65 p-8 backdrop-blur-sm">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f55]">Signature 100g Candle</p>
                  <h2 className="mt-5 font-serif text-4xl">Soft Glow Collection</h2>
                </div>
                <div className="mx-auto h-52 w-40 rounded-t-[5rem] rounded-b-2xl bg-[#f7efe5] shadow-inner ring-1 ring-[#e2d3be]" />
                <p className="text-center text-sm leading-6 text-[#6e5b4d]">Minimal, warm, and gift-ready for calm home rituals.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="shop" className="bg-[#fffaf3] px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f55]">Shop</p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">Signature Scents</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#6e5b4d]">
                Start with your best-selling scent profiles. Replace these cards with your final product photos once available.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scents.map((scent) => (
                <Card key={scent.name} className="overflow-hidden rounded-[1.75rem] border-[#eadfce] bg-[#fbf7f0] shadow-sm">
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-[#eee3d2] to-[#d8c4aa]">
                    <div className="h-36 w-28 rounded-t-[4rem] rounded-b-2xl bg-[#fffaf3] shadow-md ring-1 ring-[#e0d0b9]" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl">{scent.name}</h3>
                        <p className="mt-2 text-sm text-[#8b6f55]">{scent.notes}</p>
                      </div>
                      <p className="font-medium">{scent.price}</p>
                    </div>
                    <p className="mt-4 min-h-[3rem] text-sm leading-6 text-[#6e5b4d]">{scent.mood}</p>
                    <Button onClick={() => addToCart(scent)} className="mt-5 w-full rounded-full bg-[#2d241f] text-[#fbf7f0] hover:bg-[#5c4736]">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-[2rem] bg-[#eadfce] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f55]">About</p>
              <h2 className="mt-4 font-serif text-4xl">A softer ritual for your space.</h2>
            </div>
            <div className="text-[#6e5b4d]">
              <p className="text-lg leading-8">
                Decorina Rituals is a Melbourne-based wellness candle brand created for calm, mindfulness, and beautiful home ambience. Each candle is designed to feel premium yet affordable — perfect for everyday self-care or elegant gifting.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-[#eadfce] bg-[#fffaf3] p-5">
                      <Icon className="mb-4 h-5 w-5 text-[#8b6f55]" />
                      <h3 className="font-medium text-[#2d241f]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="wholesale" className="bg-[#2d241f] px-5 py-16 text-[#fbf7f0] md:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d2bea4]">Wholesale</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">For studios, spas, clinics, and gift stores.</h2>
            </div>
            <div>
              <p className="leading-8 text-[#eadfce]">
                Offer your clients a calming retail product that fits beautifully into wellness, beauty, and gifting spaces. Wholesale and co-branded candle enquiries are welcome.
              </p>
              <Button className="mt-6 rounded-full bg-[#fbf7f0] px-8 py-6 text-[#2d241f] hover:bg-[#eadfce]">
                Start a Wholesale Enquiry
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="rounded-[2rem] border border-[#eadfce] bg-[#fffaf3] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f55]">Contact</p>
            <h2 className="mt-4 font-serif text-4xl">Let’s create your next ritual.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[#6e5b4d]">
              For orders, wholesale, stockist enquiries, or collaborations, contact Decorina Rituals through Instagram or email.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" className="rounded-full border-[#cdbda8] px-6 py-6 hover:bg-[#f4eadc]">
                <Instagram className="mr-2 h-4 w-4" /> @decorinarituals
              </Button>
              <Button variant="outline" className="rounded-full border-[#cdbda8] px-6 py-6 hover:bg-[#f4eadc]">
                <Mail className="mr-2 h-4 w-4" /> hello@decorinarituals.com
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadfce] px-5 py-8 text-center text-sm text-[#8b6f55] md:px-8">
        © 2026 Decorina Rituals. Hand-poured wellness candles in Melbourne.
      </footer>
    </div>
  );
}
