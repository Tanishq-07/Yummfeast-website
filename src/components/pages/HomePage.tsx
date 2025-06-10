"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValue,
  useSpring,
  delay,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  ShoppingBag,
  Heart,
  Award,
  Shield,
  Zap,
  Flame,
  PartyPopper,
  Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Adjust this import to your button component
import { text } from "stream/consumers";
import Autoplay from "embla-carousel-autoplay";
import CustomButton from "../ui/custom-button";

// Define types for our components
interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

// Animated cursor glow effect
const CursorGlow = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-[300px] h-[300px] rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 pointer-events-none blur-[80px] z-0"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

// Floating particles component with more variety
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2,
    color: i % 3 === 0 ? "yellow" : i % 3 === 1 ? "red" : "white",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full backdrop-blur-sm`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor:
              particle.color === "yellow"
                ? "rgba(253, 224, 71, 0.3)"
                : particle.color === "red"
                ? "rgba(239, 68, 68, 0.3)"
                : "rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, particle.opacity, 0],
            scale: [1, Math.random() * 0.5 + 1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced hovering chip component with 3D effect and interactive elements
const HoveringChip = ({
  src,
  alt,
  className,
  delay = 0,
  rotateAmount = 10,
}: {
  src: string;
  alt: string;
  className: string;
  delay?: number;
  rotateAmount?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute z-10 ${className} cursor-pointer`}
      initial={{ y: 0, rotateY: 0, rotateX: 0 }}
      animate={{
        y: [-5, 5, -5],
        rotateY: [0, rotateAmount, 0, -rotateAmount, 0],
        rotateX: [0, rotateAmount / 2, 0, -rotateAmount / 2, 0],
      }}
      whileHover={{
        scale: 1.2,
        filter: "brightness(1.2)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        y: {
          duration: 4,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay,
        },
        rotateY: {
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: delay + 0.5,
        },
        rotateX: {
          duration: 8,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: delay + 1,
        },
      }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-lg"
      />

      {/* Sparkle effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Sparkles className="text-yellow-300 w-6 h-6" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Animated text reveal component with proper typing
const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  type = "fade",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  type?: "fade" | "slide" | "scale";
}) => {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    slide: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial={variants[type].initial}
      animate={variants[type].animate}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProductCircle = ({
  product,
  index,
  navigateTo,
}: {
  product: Product;
  index: number;
  navigateTo: (page: string) => void;
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
          duration: 3,
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
      <CustomButton className="bg-orange-500" value={product.category}/>
    </div>
  );
};


// Feature card with enhanced hover effects and proper typing
const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const icons = [Shield, Award, Zap];
  const IconComponent = icons[index % icons.length];

  // Random rotation for the wobble effect
  const randomRotation = Math.random() * 10 - 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "bg-white p-8 rounded-lg shadow-sm border-2 transition-all duration-300",
        isHovered
          ? "border-red-200 shadow-xl shadow-red-50"
          : "border-transparent"
      )}
    >
      <motion.div
        className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 relative overflow-hidden"
        animate={{
          rotate: isHovered ? [0, randomRotation, -randomRotation, 0] : 0,
          backgroundColor: isHovered ? "#fed7d7" : "#fee2e2",
        }}
        transition={{ duration: 0.6 }}
      >
        <IconComponent className="text-red-600 w-8 h-8 relative z-10" />

        {/* Animated background */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-200 to-yellow-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <h3 className="font-normal text-xl mb-3">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>

      {/* Animated sparkles on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  opacity: 0,
                  scale: 0,
                  top: `${50 + Math.random() * 30}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <Sparkles className="text-red-400 w-4 h-4" />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
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

// Confetti explosion component
const ConfettiExplosion = ({
  isExploding = false,
}: {
  isExploding: boolean;
}) => {
  return (
    <AnimatePresence>
      {isExploding && (
        <>
          {Array.from({ length: 50 }).map((_, i) => {
            const randomX = (Math.random() - 0.5) * 500;
            const randomY = (Math.random() - 0.5) * 500;
            const randomRotation = Math.random() * 360;
            const randomScale = Math.random() * 0.6 + 0.4;
            const randomColor = [
              "bg-red-500",
              "bg-yellow-500",
              "bg-blue-500",
              "bg-green-500",
              "bg-purple-500",
            ][Math.floor(Math.random() * 5)];

            return (
              <motion.div
                key={i}
                className={`absolute w-2 h-6 rounded-full ${randomColor}`}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  x: randomX,
                  y: randomY,
                  scale: randomScale,
                  rotate: randomRotation,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
              />
            );
          })}
        </>
      )}
    </AnimatePresence>
  );
};

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [currentChipIndex, setCurrentChipIndex] = useState(0);
  const [selectedChip, setSelectedChip] = useState("images/chips1.png");

  const chipVariants = [
    "images/chips1.png",
    "images/chips2.png",
    "images/chips3.png",
    "images/chips4.png",
  ];

  // Compute reordered chips based on currentChipIndex
  const reorderedChips = [
    ...chipVariants.slice(currentChipIndex),
    ...chipVariants.slice(0, currentChipIndex)
  ];


  const chipColorMap = {
  "images/chips1.png": { bg: "bg-red-600", ring: "border-red-400", text: "text-red-600", shadow: "red" },
  "images/chips2.png": { bg: "bg-blue-600", ring: "border-blue-400", text: "text-blue-600", shadow: "blue" },
  "images/chips3.png": { bg: "bg-green-600", ring: "border-green-400", text: "text-green-600", shadow: "green" },
  "images/chips4.png": { bg: "bg-purple-600", ring: "border-purple-400", text: "text-purple-600", shadow: "purple" },
};

const { bg, ring, text, shadow } = chipColorMap[selectedChip] || chipColorMap["images/chips1.png"];

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

  const newsItems = [
    {
      title: "Catering to Indian Taste Preferences",
      image:
        "https://www.yellowdiamond.in/wp-content/uploads/2024/09/Business-Standard_07.12.16_pg18.jpg",
      alt: "Indian Consumers",
      date: "2 days ago",
      slug: "indian-taste-preferences",
    },
    {
      title: "New Flavors Launch This Month",
      image:
        "https://www.yellowdiamond.in/wp-content/uploads/2024/09/ET-Brand-Equity_1st-March2c-Pg-12c4-1.jpg",
      alt: "New Flavors",
      date: "2 weeks ago",
      slug: "new-flavors-launch",
    },
    {
      title: "We Crack the Taste Test",
      image:
        "https://www.yellowdiamond.in/wp-content/uploads/2024/08/Business-India-Coverage-July-3-1.jpg",
      alt: "Taste Test",
      date: "5 days ago",
      slug: "taste-test-results",
    },
    {
      title: "New Flavors Launch This Month",
      image: "https://www.yellowdiamond.in/wp-content/uploads/2024/08/1.png",
      alt: "New Flavors",
      date: "2 weeks ago",
      slug: "new-flavors-launch",
    },
    {
      title: "Small Start, Big Success",
      image:
        "https://www.yellowdiamond.in/wp-content/uploads/2024/09/Screenshot_4-1.jpg",
      alt: "Success Story",
      date: "1 week ago",
      slug: "small-start-big-success",
    },
    {
      title: "New Flavors Launch This Month",
      image: "https://www.yellowdiamond.in/wp-content/uploads/2024/08/1.png",
      alt: "New Flavors",
      date: "2 weeks ago",
      slug: "new-flavors-launch",
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


  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2000);
  };

  const products: Product[] = [
    {
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image:
        "/images/chips1.png",
      price: "₹10",
      category: "Fryums"
    },
    {
      name: "Yummfeast Pasta",
      description: "Crispy pasta snacks with Italian herbs seasoning",
      image:
        "/images/chips2.png",
      price: "₹15",
      category: "Chips"
    },
    {
      name: "Yummfeast All-in-One",
      description:
        "A delightful mix of various namkeen for the perfect snack time",
      image:
        "/images/chips3.png",
      price: "₹20",
      category: "Namkeen"
    },
    {
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image:
        "/images/chips1.png",
      price: "₹10",
      category: "Fryums"
    },
    {
      name: "Yummfeast Pasta",
      description: "Crispy pasta snacks with Italian herbs seasoning",
      image:
        "/images/chips2.png",
      price: "₹15",
      category: "Chips"
    },
    {
      name: "Yummfeast All-in-One",
      description:
        "A delightful mix of various namkeen for the perfect snack time",
      image:
        "/images/chips3.png",
      price: "₹20",
      category: "Namkeen"
    },
  ];

  const features = [
  {
    icon: Sparkles,
    title: "Endless Flavors",
    description:
      "From classic to exotic, we offer an incredible variety of flavors to satisfy every craving and preference.",
    image: "/images/flavor-variety.png",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
  },
  {
    icon: Heart,
    title: "Shared Moments",
    description: "Our snacks bring people together, creating precious moments of joy and connection with loved ones.",
    image: "/images/sharing-moments.png",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-purple-50",
  },
  {
    icon: Factory,
    title: "Quality Production",
    description:
      "State-of-the-art facilities and rigorous quality control ensure every pack meets our highest standards.",
    image: "/images/quality-production.png",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
  },
]

const banners = [
  {
    id: 1,
    image1: "/images/b1l.png",
    image2: "/images/b1r.png",
  },
  {
    id: 2,
    image1: "/images/b2l.png",
    image2: "/images/b2r.png",
  },
];

const [currentBanner, setCurrentBanner] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }, 4500)

  return () => clearInterval(interval)
}, [])

const nextBanner = () => {
  setCurrentBanner((prev) => (prev + 1) % banners.length)
}

const prevBanner = () => {
  setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
}

  return (
    <div className="overflow-x-hidden">

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex place-items-center justify-space-between px-60 overflow-hidden bg-red-600"
      >
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

        {/* Navigation Buttons */}
        <button
          onClick={prevBanner}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextBanner}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <AnimatePresence mode="wait">
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
              className="h-96 w-96 mx-16 mt-10 drop-shadow-2xl"
              alt="Left Banner Image"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Right image - Drop in from top */}
            <motion.img
              src={banners[currentBanner].image2}
              className="h-96 w-96 mx-20 mt-10 drop-shadow-2xl"
              alt="Right Banner Image"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity=".8"
              className="fill-red-700 hidden md:block"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-red-600 hidden md:block"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white hidden md:block"
            />
          </svg>
        </div>
      </section>


      {/* Featured Products */}
      <section className="py-16 relative" style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}>
        {/* Animated background elements */}
        {/* <motion.div
          className="absolute top-40 right-0 w-64 h-64 rounded-full bg-red-100 opacity-50 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        /> */}

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
                Our Delicious Snacks
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular snacks that customers love. Quality
                and taste guaranteed in every bite!
              </p>
            </motion.div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-16">
            {products.map((product, index) => (
              <ProductCircle
                key={index}
                product={product}
                index={index}
                navigateTo={navigateTo}
              />
            ))}
          </div> */}
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 2500 })]}
          >
            <CarouselContent className="mt-2 mb-2 px-4 md:px-16">
              {products.map((product, index) => (
                <CarouselItem key= {index} className="md:basis-1/3 lg:basis-1/4">
                  <ProductCircle
                    product={product}
                    index={index}
                    navigateTo={navigateTo}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows: Only one set, responsive */}
            <CarouselPrevious className="ms-16" />
            <CarouselNext className="me-16" />
          </Carousel>


          {/* Product Display */}
          {/* <div className="flex justify-center items-center min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCatIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex justify-center"
              >
                {products.map((product, index) => (
                  <ProductCircle
                    key={index}
                    product={product}
                    index={index}
                    navigateTo={navigateTo}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div> */}

          {/* Navigation Arrows */}
          {/* <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-black shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button> */}

          {/* <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-black shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button> */}
        </div>


          {/* <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              onClick={() => navigateTo("product")}
              className="bg-red-600 hover:bg-red-700 group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View All Products
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </Button>
          </motion.div> */}

        
      </section>

      {/*Recent new and updates*/}

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
                <p className="text-2xl lg:text-3xl text-white/90 font-medium">
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
                        className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
                      >
                        <div className="h-48  bg-white relative overflow-hidden flex items-center justify-center">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.alt}
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-4 bg-red-600 opacity-90">
                          <p className=" font-normal text-md line-clamp-2 text-white">
                            {item.title}
                          </p>
                          {/* <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {item.date}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700 p-0"
                              onClick={() => navigateTo(`news/${item.slug}`)}
                            >
                              Read More
                            </Button>
                          </div> */}
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


      
      {/* Fun Facts Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 w-64 h-64 bg-red-200 rounded-full opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -left-20 -bottom-20 w-80 h-80 bg-yellow-200 rounded-full opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

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
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Award className="w-4 h-4 mr-1 inline text-red-500" />
                </motion.span>
                WHY CHOOSE US
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-4 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                Why Choose Yummfeast
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We pride ourselves on delivering exceptional quality and taste
                in every pack of our snacks.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="container mx-auto mt-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
          <img src="/images/rollerCoaster4.png" alt="Roller Coaster Image" className="hidden md:block absolute -top-32 right-16 h-80 w-80 z-20"/>
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
                    Snack Time Fun Fact
                  </h2>
                  <p className="text-xl z-30">
                    Did you know? Indians consume over 1 billion packets of
                    snacks every month!
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
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
                    <AnimatedCounter value={100} />+
                  </div>
                  <p className="relative z-10">Flavor Combinations</p>
                </motion.div>

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
                    <AnimatedCounter value={50} />
                    K+
                  </div>
                  <p className="relative z-10">Happy Customers</p>
                </motion.div>

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
                    <AnimatedCounter value={10} />+
                  </div>
                  <p className="relative z-10">Years of Excellence</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                {/* <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-white/90 relative overflow-hidden group"
                  onClick={() => navigateTo("about")}
                >
                  <span className="relative z-10">Learn Our Story</span>
                  <motion.span
                    className="absolute inset-0 bg-yellow-300"
                    initial={{ scale: 0, borderRadius: "100%" }}
                    whileHover={{ scale: 1.5, borderRadius: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Button> */}
                <div className="bg-red-500 text-white text-lg font-medium w-56 mx-auto px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600">
                  Learn Our Story
                  <div className="absolute -bottom-1 left-0 w-56 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*Social media section*/}

      <section
        className="py-24 bg-no-repeat bg-cover relative overflow-hidden pointer-events-none z-0"
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
                            <span className="text-sm font-medium">
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
                            <span className="text-sm font-medium">
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
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50 relative overflow-hidden group"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/yummfeast.in/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    View more & Follow on Instagram
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
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
            src="/images/chip3 (1).png"
            alt="Floating chip"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute w-24 h-24 right-[5%] bottom-[10%] md:right-[15%] bottom-[20%]"
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
            src="/images/chip4 (1).png"
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
              Ready to Experience the Yummfeast Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have made Yummfeast
              their favorite snack brand.
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
            <div className="bg-red-500 text-white text-lg font-medium w-40 mx-auto px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600">
              Shop Now
              <div className="absolute -bottom-1 left-0 w-40 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
