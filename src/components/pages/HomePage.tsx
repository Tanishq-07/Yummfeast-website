"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Award,
  Flame,
  PartyPopper,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import CustomButton from "../ui/custom-button";
import { Counter } from "../counter";
import CursorGlow from "@/components/ui/cursor-glow";
import { X } from "lucide-react";

interface NewsItem {
  title: string;
  image: string;
  alt: string;
  date: string;
  slug: string;
  description: string;
  content: string;
}

const NewsModal = ({
  news,
  isOpen,
  onClose,
}: {
  news: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!news) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-2xl bg-gray-200">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                {/* Date and Title */}
                <div className="mb-6">
                  <p className="text-sm text-red-600 font-medium mb-2 uppercase tracking-wide">
                    {news.date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4 leading-tight">
                    {news.title}
                  </h2>
                  <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {news.description}
                  </p>
                </div>

                {/* Content/Markup Area */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    News Details
                  </h3>
                  <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                    {news.content}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
// Define types for our components
interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const ProductCircle = ({
  product,
  index,
  navigateTo,
}: {
  product: Product;
  index: number;
  navigateTo: (page: string, category?: any) => void;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.img
        src="/images/patch3.png"
        alt=""
        className="absolute top-6 h-52 w-52"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "linear",
        }}
        style={{ transformOrigin: "center center" }}
      />

      <motion.img
        key={index}
        initial={{ opacity: 0, scale: 0, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.2 }}
        src={product.image}
        alt={product.name}
        className="w-48 h-48 object-contain -rotate-12 mb-12"
      />

      {/* Label/Button */}
      <CustomButton
        navigateTo={navigateTo}
        className="bg-orange-500"
        value={product.category}
      />
    </div>
  );
};

const features = [
  {
    icon: Sparkles,
    title: "Endless Flavors",
    description:
      "From classic to exotic, we offer an incredible variety of flavors to satisfy every craving and preference.",
    image: "/flavor-variety.png",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
  },
  {
    icon: Heart,
    title: "Shared Moments",
    description:
      "Our snacks bring people together, creating precious moments of joy and connection with loved ones.",
    image: "/sharing-moments.png",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
  },
  {
    icon: Factory,
    title: "Quality Production",
    description:
      "State-of-the-art facilities and rigorous quality control ensure every pack meets our highest standards.",
    image: "/quality-production.png",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
  },
];

const funFacts = [
  "Indians consume over 1 billion snack packets every month!",
  "The world's largest potato chip was 25 inches long and 14 inches wide.",
  "Aloo Bhujia is one of India's top 5 most loved namkeens.",
  "Masala is the most preferred chip flavor in India.",
  "India has over 200+ regional snack varieties.",
  "Chips were invented in 1853 by accident!",
  "An average Indian household stocks 3 types of snacks at any time.",
  "The global snack market is worth over $400 billion.",
  "Chana Jor Garam is over 100 years old as a street snack.",
  "In Rajasthan, Bikaneri Bhujia holds a GI tag.",
  "Maharashtra's favorite tea-time snack? Chiwda!",
  "Kolkata's famous jhal muri is eaten by millions every day.",
  "Bhelpuri, a puffed rice snack, is iconic on Mumbai's beaches.",
  "India's packaged snack consumption per household is about 12.8 kg per year as of 2025.",
  "People can recognize chip flavors blindfolded 75% of the time!",
  "The word 'namkeen' comes from 'namak' meaning salt.",
  "India is second largest consumer of snacks in the world.",
  "The crunch sound of chips is designed to make snacks sound fresher.",
];

// Feature card with enhanced hover effects and proper typing
const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className={`relative overflow-hidden rounded-2xl ${feature.bgColor} p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
        <img
          src="/images/featureBg.png"
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {/*<motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 shadow-lg`}
        >
          <feature.icon className="w-6 h-6" />
        </motion.div>*/}

        {/* Title */}
        <h3 className="text-xl font-normal text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
          {feature.description}
        </p>

        {/* Feature Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated counter component
const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * value);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span ref={countRef}>{count}</span>;
};

interface HomePageProps {
  navigateTo: (page: string, category?: any) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [currentChipIndex, setCurrentChipIndex] = useState(0);
  const [selectedChip, setSelectedChip] = useState("images/chips1.png");
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
        setIsVisible(true);
      }, 300);
    }, 4000); // Change fact every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const chipVariants = [
    "images/chips1.png",
    "images/chips2.png",
    "images/chips3.png",
    "images/chips4.png",
  ];

  const chipColorMap = {
    "images/chips1.png": {
      bg: "bg-red-600",
      ring: "border-red-400",
      text: "text-red-600",
      shadow: "red",
    },
    "images/chips2.png": {
      bg: "bg-blue-600",
      ring: "border-blue-400",
      text: "text-blue-600",
      shadow: "blue",
    },
    "images/chips3.png": {
      bg: "bg-green-600",
      ring: "border-green-400",
      text: "text-green-600",
      shadow: "green",
    },
    "images/chips4.png": {
      bg: "bg-purple-600",
      ring: "border-purple-400",
      text: "text-purple-600",
      shadow: "purple",
    },
  };

  const { bg, ring, text, shadow } =
    chipColorMap[selectedChip] || chipColorMap["images/chips1.png"];

  const instagramPosts = [
    {
      id: "1",
      image: "images/insta1.png",
      caption:
        "The victory that made it all worth it in the end!🏆We wholeheartedly congratulate @royalchallengers.bengaluru for bringing home the most amazing and smashing victory!🥳",
      likes: "13",
      comments: "0",
      type: "image",
      timestamp: "1 days ago",
      link: "",
    },
    {
      id: "2",
      image: "images/insta2.png",
      caption:
        "Jeet ki taiyyari bhi puri, aur snacking ki bhi!😍Stock up on our mouth-watering snacks before tonight’s epic match begins and cheer for your favourite team louder than ever!🥳🏏",
      likes: "2.1k",
      comments: "78",
      type: "image",
      timestamp: "3 days ago",
      link: "https://www.instagram.com/p/DKbtZdSpsoh/",
    },
    {
      id: "3",
      image: "images/insta3.png",
      caption:
        "Drive safe into the weekend and munch happy with our Tangy Rings!🧡🍅🚗.",
      likes: "3.5k",
      comments: "156",
      type: "carousel",
      timestamp: "5 days ago",
      link: "https://www.instagram.com/p/DKUeIDFpYNm/",
    },
    {
      id: "4",
      image: "images/insta4.png",
      caption:
        "Craving something chatpata? Yummfeast snacks are loaded with bold desi flavors that hit just right!",
      likes: "1.8k",
      comments: "92",
      type: "video",
      timestamp: "1 week ago",
      link: "https://www.instagram.com/p/DKUBsryPHMz/",
    },
    {
      id: "5",
      image: "images/insta5.png",
      caption: "he humble potato—making our lives better everyday!😋🥔",
      likes: "2.7k",
      comments: "134",
      type: "image",
      timestamp: "1 week ago",
      link: "https://www.instagram.com/p/DKR5c_3JQsg/",
    },
    {
      id: "6",
      image: "images/insta6.png",
      caption:
        "We really experience unmatched happiness when it’s time for some Yummfeast Snacks!😋😍",
      likes: "1.9k",
      comments: "67",
      type: "video",
      timestamp: "2 weeks ago",
      link: "https://www.instagram.com/p/DKPW2H3p8tA/",
    },
    {
      id: "7",
      image: "images/insta7.png",
      caption:
        "Treat your taste buds with the most amazing snack-fix while you cheer for your favourite team tonight!🏏😋",
      likes: "1.4k",
      comments: "38",
      type: "image",
      timestamp: "2 weeks ago",
      link: "https://www.instagram.com/p/DKJ4S1CtlCm/",
    },
    {
      id: "8",
      image: "images/insta8.png",
      caption: "Cravings cured. Hearts full. Taste buds happy!😍💊💚",
      likes: "2.3k",
      comments: "89",
      type: "image",
      timestamp: "3 weeks ago",
      link: "https://www.instagram.com/p/DKHwdifN-76/",
    },
  ];

  const newsItems: NewsItem[] = [
    {
      title: "Yummfeast Takes a Flavourful Leap at Bihar Business Connect 2023",
      image: "/images/news/news1.jpg",
      alt: "Indian Consumers",
      date: "2 days ago",
      slug: "indian-taste-preferences",
      description:
        "Yummfeast showcased its innovative snacking solutions at the Bihar Business Connect 2023, connecting with retailers and distributors across the region.",
      content: `Yummfeast made a significant impact at Bihar Business Connect 2023, presenting its latest product innovations and distribution strategies to business leaders and entrepreneurs.

Key highlights from the event:
• Unveiled new snack flavors tailored for regional preferences
• Established partnerships with 50+ retailers across Bihar
• Demonstrated commitment to supporting local businesses
• Showcased quality manufacturing and packaging standards

The event was a tremendous success, reflecting Yummfeast's dedication to expanding its presence in eastern India while maintaining the highest standards of quality and taste.`,
    },
    {
      title:
        "Yummfeast Dealers' Meet 2025: Celebrating Partnerships, Purpose & Progress",
      image: "/images/news/news2.png",
      alt: "New Flavors",
      date: "2 weeks ago",
      slug: "new-flavors-launch",
      description:
        "Our annual Dealers' Meet 2025 brought together our entire distribution network to celebrate achievements and plan for exciting growth ahead.",
      content: `The Yummfeast Dealers' Meet 2025 was a grand celebration of partnership and progress, bringing together dealers, distributors, and business partners from across the country.

Meeting highlights:
• Recognition of top-performing dealers and distributors
• Launch of three new snack varieties for 2025
• Introduction of improved packaging and supply chain processes
• Special incentive programs for retail partners
• Interactive workshops on market trends and consumer preferences

This gathering reinforced our commitment to supporting our dealers and creating a thriving ecosystem where everyone grows together.`,
    },
    {
      title:
        "Yummfeast's Dealership Meet 2022: A Grand Introduction to a Bold New Brand",
      image: "/images/news/news3.jpg",
      alt: "Taste Test",
      date: "5 days ago",
      slug: "taste-test-results",
      description:
        "The 2022 Dealership Meet marked Yummfeast's bold entry into the market with an impressive showcase of product quality and brand vision.",
      content: `Yummfeast's 2022 Dealership Meet was a groundbreaking event that introduced our brand vision to dealers and partners nationwide.

Event overview:
• More than 200 dealers attended from across India
• Comprehensive product tasting sessions conducted
• Brand story and mission shared with all partners
• Distribution network established in 15 states
• Long-term growth strategy outlined

This meet was the foundation for Yummfeast's rapid expansion and success in the competitive snacking market.`,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentChipIndex === chipVariants.length - 1 ? 0 : currentChipIndex + 1;

      setCurrentChipIndex(nextIndex);
      setSelectedChip(chipVariants[nextIndex]);
    }, 2500); // Auto change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [currentChipIndex, chipVariants]);

  const products: Product[] = [
    {
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image: "/images/products/cream-and-onion.png",
      price: "₹10",
      category: "Chips",
    },
    {
      name: "Hara Matar",
      description: "Crispy pasta snacks with Italian herbs seasoning",
      image: "/images/chips5.png",
      price: "₹5",
      category: "Namkeen",
    },
    {
      name: "Yummfeast All-in-One",
      description:
        "A delightful mix of various namkeen for the perfect snack time",
      image: "/images/chips6.png",
      price: "₹20",
      category: "Extruded",
    },
    {
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image: "/images/chips7.png",
      price: "₹10",
      category: "Fryums",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Flavor Fiesta",
      description:
        "Whether you’re vibing with Cream & Onion coolness or diving into a Magic Masala flavor storm — we bring the party to your palate.",
      image: "/images/pic2.png",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    },
    {
      icon: Heart,
      title: "Snack & Bond",
      description:
        "Our snacks bring people together — for laughs, movie nights, road trips, or just “oops, I ate the whole pack” moments.",
      image: "/images/sharing-moments.png",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
    },
    {
      icon: Factory,
      title: "Crispy Craftsmanship",
      description:
        "Crunch meets quality. We whip up our snacks in top-tier facilities with ninja-level quality control — so every pack is a superstar.",
      image: "/images/features/quality-production.png",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
  ];

  const banners = [
    {
      id: 0,
      image1: "/images/banners/main.jpg",
      image2: "/images/banners/mob-main.jpg",
    },
    {
      id: 1,
      image1: "/images/b1l.png",
      image2: "/images/b1r.png",
    },
    {
      id: 2,
      image1: "/images/banners/right2.png",
      image2: "/images/banners/left2.png",
    },
    {
      id: 3,
      image1: "/images/banners/left1.png",
      image2: "/images/banners/right1.png",
    },
    {
      id: 4,
      image1: "/images/b2r.png",
      image2: "/images/b2l.png",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[45vh] md:min-h-[75vh] flex place-items-center justify-between px-6 md:px-60 overflow-hidden bg-[url('/images/bg.png')]"
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevBanner}
          className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextBanner}
          className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <AnimatePresence mode="wait">
          {currentBanner === 0 ? (
            // First banner: single fullscreen image
            <motion.div
              key={currentBanner}
              className="flex absolute left-0 top-0 h-full flex items-center justify-center z-10"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src={
                  isMobile
                    ? banners[currentBanner].image2
                    : banners[currentBanner].image1
                }
                className="w-full h-full object-cover"
                alt="Banner Image"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          ) : (
            // 2nd/3rd banners: two side-by-side images
            <motion.div
              key={currentBanner}
              className="flex place-items-center justify-between w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Left image - Slide in from left */}
              <motion.img
                src={banners[currentBanner].image1}
                className="w-1/2 ms-0 md:w-2/5 md:me-16 md:mt-10 drop-shadow-2xl"
                alt="Left Banner Image"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* Right image - Drop in from top */}
              <motion.img
                src={banners[currentBanner].image2}
                className="w-1/2 md:w-2/5 md:h-4/5 me-8 md:mx-16 md:mt-10 drop-shadow-2xl"
                alt="Right Banner Image"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 hidden md:block"
          >
            <defs>
              <clipPath id="wave-clip">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
                    70.36-5.37,136.33-33.31,206.8-37.5,
                    C438.64,32.43,512.34,53.67,583,72.05,
                    c69.27,18,138.3,24.88,209.4,13.08,
                    36.15-6,69.85-17.84,104.45-29.34,
                    C989.49,25,1113-14.29,1200,52.47V0Z"
                />
              </clipPath>
            </defs>
            <image
              href="/images/white-bg1.jpg"
              width="1200"
              height="120"
              preserveAspectRatio="none"
              clipPath="url(#wave-clip)"
              transform="scale(-1,1) translate(-1200, 0)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 md:hidden"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-16 relative"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1 text-sm bg-red-50 border-red-200"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Flame className="w-4 h-4 mr-1 inline text-red-500" />
                </motion.span>
                TASTY TREATS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                Our Delicious Range Of Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular snacks that customers love. Quality
                and taste guaranteed in every bite!
              </p>
            </motion.div>
          </div>

          <Carousel
            className="w-full"
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[Autoplay({ delay: 2500 })]}
          >
            <CarouselContent className="mt-2 mb-2 px-4 md:px-16">
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <ProductCircle
                    product={product}
                    index={index}
                    navigateTo={() => navigateTo("product", product.category)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows: Only one set, responsive */}
            <CarouselPrevious className="ms-16" />
            <CarouselNext className="me-16" />
          </Carousel>
        </div>
      </section>

      {/*Recent new and updates*/}
      <div className="overflow-x-hidden">
        {/* Cursor glow effect */}
        <CursorGlow />

        <section className="py-24 bg-red-600 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="w-[120%] h-[120%] bg-[url('/images/pattern.svg')] opacity-10"
              animate={{ x: [-20, 0], y: [-20, 0] }}
              transition={{
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>
          <motion.div
            className="absolute top-20 right-0 w-64 h-64 rounded-full bg-white/10 opacity-30 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-white/10 opacity-30 blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Left side - Title */}
              <div className="lg:w-1/4 mb-8 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                    Recent
                  </h2>
                  <p className="text-2xl lg:text-3xl text-white/90 font-normal">
                    News and updates
                  </p>
                  <div className="w-16 h-1 bg-white mt-4"></div>
                </motion.div>
              </div>

              {/* Right side - News Cards Carousel */}
              <div className="w-full relative">
                <Carousel
                  isOverflow={true}
                  className="w-full"
                  opts={{ loop: true }}
                  plugins={[Autoplay({ delay: 4000 })]}
                >
                  <CarouselContent className="-ml-4 mt-2 mb-2">
                    {newsItems.map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-4 md:basis-1/2 lg:basis-1/3 mt-4 md:mt-0"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          onClick={() => {
                            setSelectedNews(item);
                            setIsNewsModalOpen(true);
                          }}
                          className="bg-white rounded-xl overflow-hidden shadow-lg h-full cursor-pointer transition-all"
                        >
                          <div className="h-48  bg-white relative overflow-hidden flex items-center justify-center">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.alt}
                              className="w-full h-full object-fit"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="p-4 bg-red-600 opacity-90">
                            <p className=" font-normal text-md line-clamp-2 text-white">
                              {item.title}
                            </p>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Mobile arrows */}
                  <CarouselPrevious className="left-2 sm:hidden" />
                  <CarouselNext className="right-2 sm:hidden" />

                  {/* Desktop arrows */}
                  <CarouselPrevious className="-left-12" />
                  <CarouselNext className="-right-12" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <NewsModal
          news={selectedNews}
          isOpen={isNewsModalOpen}
          onClose={() => {
            setIsNewsModalOpen(false);
            setSelectedNews(null);
          }}
        />
      </div>

      {/* Fun Facts Section */}
      <section
        className="py-12 bg-gradient-to-b from-blue-50 via-white to-orange-50 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          minHeight: "100vh",
          opacity: 1,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-6 py-2 text-sm bg-gradient-to-r from-red-50 to-orange-50 border-red-200 hover:border-red-300 transition-colors"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Award className="w-4 h-4 mr-2 inline text-red-500" />
                </motion.span>
                WHY CHOOSE US
              </Badge>

              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500"
              >
                Why Everyone’s Feasting on Yummfeast
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Because your snack time deserves more than just crunch — it
                deserves personality. Here's why you’ll love munching with us:
              </motion.p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Fun interactive section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern.svg')] opacity-10"
            animate={{ x: [-20, 0], y: [-20, 0] }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto my-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/rollerCoaster4.png"
              alt="Roller Coaster Image"
              className="hidden md:block absolute -top-32 right-16 h-80 w-80 z-20"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <PartyPopper className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                  <h2 className="text-3xl md:text-4xl font-normal mb-4 z-30">
                    Snack Time Fun Facts
                  </h2>
                  <motion.div
                    key={currentFactIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : -20,
                    }}
                    transition={{ duration: 0.6 }}
                    className="min-h-[3rem] flex items-center justify-center"
                  >
                    <p className="text-xl z-30 max-w-3xl">
                      {funFacts[currentFactIndex]}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Stat 1: 200+ */}
                <motion.div
                  className="bg-white/10 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(234, 179, 8, 0.2))",
                        "linear-gradient(to right, rgba(234, 179, 8, 0.2), rgba(239, 68, 68, 0.2))",
                        "linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(234, 179, 8, 0.2))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <div className="text-4xl font-normal mb-2 relative z-10">
                    <Counter target={200} duration={2.5} suffix="+" />
                  </div>
                  <p className="relative z-10">Regional Snack Varieties</p>
                </motion.div>

                {/* Stat 2: 1B+ */}
                <motion.div
                  className="bg-white/10 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(234, 179, 8, 0.2), rgba(239, 68, 68, 0.2))",
                        "linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(234, 179, 8, 0.2))",
                        "linear-gradient(to right, rgba(234, 179, 8, 0.2), rgba(239, 68, 68, 0.2))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <div className="text-4xl font-normal mb-2 relative z-10">
                    <Counter target={1000000000} duration={2.5} suffix="+B" />
                  </div>
                  <p className="relative z-10">Snack Packets Monthly</p>
                </motion.div>

                {/* Stat 3: $400B */}
                <motion.div
                  className="bg-white/10 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(234, 179, 8, 0.2))",
                        "linear-gradient(to right, rgba(234, 179, 8, 0.2), rgba(239, 68, 68, 0.2))",
                        "linear-gradient(to right, rgba(239, 68, 68, 0.2), rgba(234, 179, 8, 0.2))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                  <div className="text-4xl font-normal mb-2 relative z-10">
                    $
                    <Counter target={400000000000} duration={2.5} suffix="+B" />
                  </div>
                  <p className="relative z-10">Global Snack Market</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="transition-transform duration-100 hover:scale-[1.1]">
                  <div className="bg-red-500 text-white text-lg font-normal w-56 mx-auto px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600">
                    Learn Our Story
                    <div className="absolute -bottom-1 left-0 w-56 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <img
              src="/images/packet.png"
              alt="Chips Packet"
              className="hidden md:block absolute -bottom-32 left-16 h-64 w-64 z-20"
            />
          </div>
        </div>
      </section>

      {/*Social media section*/}

      <section
        className="py-24 bg-no-repeat bg-cover relative overflow-hidden z-0"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          minHeight: "100vh",
          opacity: 1,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1 text-sm bg-orange-100"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-4 h-4 mr-1 inline text-orange-500" />
                </motion.span>
                FOLLOW US
              </Badge>
              <h2 className="text-3xl md:text-4xl pb-2 mb-4 bg-clip-text text-transparent bg-orange-500">
                @yummfeast.in
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Stay connected with us on Instagram for the latest updates,
                behind-the-scenes content, and delicious snack inspiration!
              </p>
            </motion.div>
          </div>

          {/* Instagram Feed Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-white text-center">
                        <div className="flex items-center justify-center gap-4 mb-2">
                          <div className="flex items-center gap-1">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm font-normal">
                              {post.likes}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.5 12c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5zm7-7h-1.59l-.55-.55c-.29-.29-.68-.45-1.09-.45H9.73c-.41 0-.8.16-1.09.45L8.09 5H6.5C5.12 5 4 6.12 4 7.5v9C4 17.88 5.12 19 6.5 19h11c1.38 0 2.5-1.12 2.5-2.5v-9C20 6.12 18.88 5 17.5 5z" />
                            </svg>
                            <span className="text-sm font-normal">
                              {post.comments}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs line-clamp-2 px-2">
                          {post.caption}
                        </p>
                      </div>
                    </motion.div>

                    {/* Post type indicator */}
                    {post.type === "video" && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-black/70 rounded-full p-1">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {post.type === "carousel" && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-black/70 rounded-full p-1">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11.5 0L8 13.5l2.5 3.01L14 12.5l4 5.5H8.5z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-red-500 text-white px-6 py-2 w-44 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/yummfeast.in/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-100 hover:scale-[1.1]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Follow on Instagram
                  </span>
                  <div className="absolute -bottom-1 left-0 w-44 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-red-500 text-white px-6 py-2 w-44 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600"
                  onClick={() =>
                    window.open("https://www.facebook.com/yummfeast/", "_blank")
                  }
                >
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-100 hover:scale-[1.1]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.324v21.352C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.592 1.325-1.324V1.324C24 .592 23.405 0 22.675 0z" />
                    </svg>
                    Follow on Facebook
                  </span>
                  <div className="absolute -bottom-1 left-0 w-44 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-red-500 text-white px-6 py-2 w-44 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/yummfeast/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-100 hover:scale-[1.1]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.264 2.367 4.264 5.451v6.29zM5.337 7.433c-1.144 0-2.068-.928-2.068-2.07 0-1.144.924-2.07 2.068-2.07 1.144 0 2.07.926 2.07 2.07 0 1.142-.926 2.07-2.07 2.07zM6.823 20.452H3.851V9h2.972v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                    View LinkedIn
                  </span>
                  <div className="absolute -bottom-1 left-0 w-44 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-red-500 text-white px-6 py-2 w-48 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600"
                  onClick={() =>
                    window.open("https://www.youtube.com/@yummfeast", "_blank")
                  }
                >
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-100 hover:scale-[1.1]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184C18.474 2.9 12 2.9 12 2.9s-6.474 0-7.615.284C2.23 3.45 1.5 4.187 1.5 6.241v11.518c0 2.054.73 2.791 2.885 3.057C5.526 20.9 12 20.9 12 20.9s6.474 0 7.615-.284C21.77 20.55 22.5 19.813 22.5 17.759V6.241c0-2.054-.73-2.791-2.885-3.057zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                    </svg>
                    Subscribe on YouTube
                  </span>
                  <div className="absolute -bottom-1 left-0 w-48 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with animated background */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern.svg')] opacity-10"
            animate={{ x: [-20, 0], y: [-20, 0] }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Animated floating chips */}
        <motion.div
          className="absolute w-24 top-[0%] left-[5%] md:w-32 h-32 md:left-[10%] md:top-[20%]"
          animate={{
            y: [-5, 5, -5],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <img
            src="/images/twister.png"
            alt="Floating chip"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute w-32 h-32 right-[5%] bottom-[10%] md:right-[15%] bottom-[20%]"
          animate={{
            y: [5, -5, 5],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <img
            src="/images/kurkure.png"
            alt="Floating chip"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <div className="container mx-auto px-4 mt-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal mb-8">
              Discover the Yummfeast Brochure
            </h2>
            <p className="text-xl mb-8">
              Get a complete look at our delicious range of snacks, crafted to
              satisfy every craving.
            </p>
            {/* <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90 group relative overflow-hidden"
              onClick={() => {
                triggerConfetti();
                navigateTo("product");
              }}
            >
              <span className="relative z-10 group-hover:text-red-600">
                Shop Now
              </span>
              <motion.span
                className="absolute inset-0 bg-yellow-300 transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button> */}
            <div className="transition-transform duration-100 hover:scale-[1.03]">
              <div className="bg-red-500 text-white text-lg font-normal w-56 mx-auto px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600">
                Download Brochure
                <div className="absolute -bottom-1 left-0 w-56 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
