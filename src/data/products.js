import blancElegance from "../assets/images/products/blanc-elegance.png";
import citronellaBreeze from "../assets/images/products/citronella-breeze.png";
import coconutSilk from "../assets/images/products/coconut-silk.png";
import heavenlyGardenia from "../assets/images/products/heavenly-gardenia.png";
import mademoiselleCoco from "../assets/images/products/mademoiselle-coco.png";
import midnightUnderworld from "../assets/images/products/midnight-underworld.png";
import osmanthusRain from "../assets/images/products/osmanthus-rain.png";
import oudOrangeBlossom from "../assets/images/products/oud-orange-blossom.png";
import seaSaltSage from "../assets/images/products/sea-salt-sage.png";
import velvetRose from "../assets/images/products/velvet-rose.png";

export const products = [
  {
    id: 1,
    name: "Lait de Coco",
    scent: "Coconut Milk · Vanilla · Soft Musk",
    description: "A creamy and comforting scent for slow evenings and soft self-care moments.",
    price: "$14",
    image: coconutSilk,
  },
  {
    id: 2,
    name: "Sauge Marine",
    scent: "Sea Salt · Sage · Driftwood",
    description: "A clean, fresh scent inspired by calm hotel-style spaces and ocean air.",
    price: "$14",
    image: seaSaltSage,
  },
  {
    id: 3,
    name: "Rose de Velours",
    scent: "Rose · Amber · Powder Musk",
    description: "An elegant floral candle with a soft velvet finish.",
    price: "$14",
    image: velvetRose,
  },
  {
    id: 4,
    name: "Heavenly Gardenia",
    scent: "Gardenia · Jasmine · White Musk",
    description: "A delicate floral blend that brings softness and serenity to any room.",
    price: "$14",
    image: heavenlyGardenia,
  },
  {
    id: 5,
    name: "Osmanthus Rain",
    scent: "Osmanthus · White Tea · Rain Mist",
    description: "A refreshing floral scent inspired by gentle rain and blooming osmanthus.",
    price: "$14",
    image: osmanthusRain,
  },
  {
    id: 6,
    name: "Blanc Élégance",
    scent: "White Linen · Cotton Blossom · Soft Musk",
    description: "Clean, elegant and timeless. Perfect for creating a luxurious atmosphere.",
    price: "$14",
    image: blancElegance,
  },
  {
    id: 7,
    name: "Mademoiselle Coco",
    scent: "Coco Noir · Patchouli · Vanilla Orchid",
    description: "A sophisticated fragrance inspired by Parisian elegance and confidence.",
    price: "$14",
    image: mademoiselleCoco,
  },
  {
    id: 8,
    name: "Midnight Underworld",
    scent: "Oud · Smoked Woods · Dark Amber",
    description: "A rich and mysterious scent designed for intimate evenings and deep relaxation.",
    price: "$14",
    image: midnightUnderworld,
  },
  {
    id: 9,
    name: "Oud Orange Blossom",
    scent: "Orange Blossom · Oud · Sandalwood",
    description: "A luxurious balance of floral brightness and warm woody depth.",
    price: "$14",
    image: oudOrangeBlossom,
  },
  {
    id: 10,
    name: "Citronella Breeze",
    scent: "Citronella · Lemon Peel · Fresh Herbs",
    description: "A bright and refreshing scent ideal for outdoor gatherings and summer evenings.",
    price: "$14",
    image: citronellaBreeze,
  },
];

export const featuredProducts = [
  products[0], // Lait de Coco
  products[1], // Sauge Marine
  products[2], // Rose de Velours
];