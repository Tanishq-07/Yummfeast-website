"use client";

import type React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ChevronDown,
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

// Scroll indicator component with enhanced animation
const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <span className="text-sm mb-2 font-medium tracking-wider">
        Scroll to explore
      </span>
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

// Product card with enhanced hover effects and proper typing
const ProductCard = ({
  product,
  index,
  navigateTo,
}: {
  product: Product;
  index: number;
  navigateTo: (page: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Random rotation for the wobble effect
  const randomRotation = Math.random() * 10 - 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="relative"
    >
      <Card
        className={cn(
          "overflow-hidden group h-full border-2 transition-all duration-300",
          isHovered
            ? "border-red-400 shadow-xl shadow-red-100"
            : "border-transparent"
        )}
      >
        <div className="aspect-square bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">
          <motion.div
            animate={{
              rotateZ: isHovered ? [0, randomRotation, -randomRotation, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center p-4"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-contain w-full h-full drop-shadow-xl"
            />
          </motion.div>

          {/* Animated price tag */}
          <motion.div
            className="absolute top-4 right-4 bg-red-600 text-white font-bold rounded-full w-14 h-14 flex items-center justify-center z-10"
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: isHovered ? [0, -10, 10, 0] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {product.price}
          </motion.div>

          {/* Quick action buttons with enhanced animations */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-4 left-0 right-0 flex justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    onClick={() => alert("Added to cart!")}
                  >
                    <ShoppingBag className="w-4 h-4 text-red-600" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    onClick={() => alert("Added to wishlist!")}
                  >
                    <Heart className="w-4 h-4 text-red-600" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
        <CardContent className="p-6">
          <Badge variant="outline" className="mb-2 bg-red-50">
            Bestseller
          </Badge>
          <h3 className="font-normal text-xl mb-2">{product.name}</h3>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-3 h-3 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <span className="text-xs ml-1 text-muted-foreground">(24)</span>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={() => navigateTo("product")}
              className="bg-red-600 hover:bg-red-700 relative overflow-hidden group"
            >
              <span className="relative z-10">View Details</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>
        </CardContent>
      </Card>
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
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -15}}
            animate={{ opacity: 1, scale: 1, rotate: -15}}
            transition={{ duration: 0.6 }}
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-contain -rotate-12 mb-12"
          />

      {/* Label/Button */}
      <div className="bg-orange-500 text-white text-lg font-medium px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-red-600">
        {product.category}
        <div className="absolute -bottom-1 left-0 w-full h-full rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
      </div>
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

// Scroll Navigator component
const ScrollNavigator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Button
        size="icon"
        variant="secondary"
        onClick={scrollToTop}
        className="rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
      >
        <ChevronDown className="w-5 h-5 transform rotate-180" />
      </Button>

      <div className="h-40 w-1 bg-gray-200 rounded-full relative">
        <motion.div
          className="absolute w-3 h-3 bg-red-500 rounded-full left-1/2 transform -translate-x-1/2"
          style={{ top: `${scrollProgress * 100}%` }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0.4)",
              "0 0 0 8px rgba(239, 68, 68, 0)",
              "0 0 0 0 rgba(239, 68, 68, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </div>

      <Button
        size="icon"
        variant="secondary"
        onClick={scrollToBottom}
        className="rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
      >
        <ChevronDown className="w-5 h-5" />
      </Button>
    </motion.div>
  );
};

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const [currentChipIndex, setCurrentChipIndex] = useState(0);
  const [selectedChip, setSelectedChip] = useState(
    "images/chips1.png"
  );

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

// const FeatureCard = ({ feature, index }: { feature: (typeof features)[0]; index: number }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       viewport={{ once: true, margin: "-50px" }}
//       whileHover={{ y: -10 }}
//       className={`relative overflow-hidden rounded-2xl ${feature.bgColor} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
//         <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full h-full object-cover" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Icon */}
//         <motion.div
//           whileHover={{ scale: 1.1, rotate: 5 }}
//           className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg`}
//         >
//           <feature.icon className="w-8 h-8" />
//         </motion.div>

//         {/* Title */}
//         <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
//           {feature.title}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
//           {feature.description}
//         </p>

//         {/* Feature Image */}
//         <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-xl shadow-md">
//           <img
//             src={feature.image || "/placeholder.svg"}
//             alt={feature.title}
//             className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//         </motion.div>

//         {/* Decorative Elements */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//           className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} opacity-20`}
//         />
//       </div>
//     </motion.div>
//   )
// }

  return (
    <div className="overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />
      {/* Scroll Navigator */}
      {/* <ScrollNavigator /> */}
      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-[90vh] ${bg} flex place-items-center justify-center overflow-hidden transition-colors duration-500`}
      >
        {/* Background circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute md:w-[1600px] md:h-[1600px] w-[800px] h-[800px] rounded-full md:border-[88px] border-[44px] opacity-40 z-0 transition-all duration-300 ease-in-out" />
          <div className="absolute md:w-[1100px] md:h-[1100px] w-[550px] h-[550px] rounded-full md:border-[80px] border-[40px] opacity-40 z-0 transition-all duration-300 ease-in-out" />
          <div className="absolute md:w-[560px] md:h-[560px] w-[300px] h-[300px] rounded-full md:border-[56px] border-[28px] opacity-40 z-0 transition-all duration-300 ease-in-out" />
        </div>

        {/* Hero content container */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side - Text content */}
          <div className="hidden md:block md:w-1/3 mb-10 md:mb-0 order-2 md:order-1 text-white">
          <AnimatePresence key={selectedChip}>
            <AnimatedText delay={0.1} type="slide" className="mb-4">
              <h1 className="text-4xl font-bold leading-tight titan-shadow" style={{
                fontFamily: "'Titan One', cursive",
                color: "white",
                textShadow: `2px 2px 0 ${shadow}, 3px 3px 2px ${shadow}`,
              }}>
                EAT OUR GRILLED
                <br />
                POTATO CHIPS
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.3} type="fade" className="mb-8">
              <p className="text-md text-white/90 max-w-md" style={{textShadow: `1px 1px 0px ${shadow}`}}>
                Share a bite of #Pizzaheart with your friends to strengthen your
                friendship bond.
              </p>
            </AnimatedText>
            <AnimatedText
              delay={0.5}
              type="fade"
              className="flex items-center gap-12"
            >
              <Button
                className={`bg-white rounded-full hover:bg-white/90 px-12 ${text}`}
                onClick={() => navigateTo("product")}
              >
                View Product
              </Button>
            </AnimatedText>
          </AnimatePresence>
          </div>

          {/* Center - Selected chip packet */}
          <div className="hidden md:w-1/3 md:flex justify-center items-center relative order-1 md:order-2">
            <motion.img
                key={currentChipIndex}
                initial={{ opacity: 0, y: 30, scale: 0}}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={chipVariants[currentChipIndex]}
                alt={`Pizza Heart Chips ${currentChipIndex + 1}`}
                className="w-[280px] md:w-[350px] relative z-20"
                />
            </div>

          {/* Mobile Carousel (Shows only selected chip with arrows) */}
          <div className="w-full max-w-xs mx-auto md:hidden relative flex items-center justify-center ">
            <button
              onClick={() => {
                const newIndex =
                  currentChipIndex === 0
                    ? chipVariants.length - 1
                    : currentChipIndex - 1;
                setCurrentChipIndex(newIndex);
                setSelectedChip(chipVariants[newIndex]);
              }}
              className="absolute left-0 z-10 bg-white/80 rounded-full p-2 shadow"
            >
              ←
            </button>

            <motion.img
              key={currentChipIndex}
              initial={{ opacity: 0, scale: 0}}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src={chipVariants[currentChipIndex]}
              alt={`Pizza Heart Chips ${currentChipIndex + 1}`}
              className="w-[280px] mx-auto drop-shadow-xl"
            />

            <button
              onClick={() => {
                const newIndex =
                  currentChipIndex === chipVariants.length - 1
                    ? 0
                    : currentChipIndex + 1;
                setCurrentChipIndex(newIndex);
                setSelectedChip(chipVariants[newIndex]);
              }}
              className="absolute right-0 z-10 bg-white/80 rounded-full p-2 shadow"
            >
              →
            </button>
          </div>

          {/* Mobile Text content (hidden on desktop) */}
          <div className="block md:hidden text-white text-center mt-6 px-4 order-3">
            <AnimatePresence key={selectedChip}>
            <AnimatedText delay={0.1} type="slide" className="mb-4">
            <h1 className="text-3xl font-bold leading-tight mb-2">
              EAT OUR GRILLED
              <br />
              POTATO CHIPS
            </h1>
            </AnimatedText>
            <AnimatedText delay={0.3} type="fade">
            <p className="text-md text-white/90 max-w-md mx-auto mb-6">
              Share a bite of #Pizzaheart with your friends to strengthen your friendship bond.
            </p>
            </AnimatedText>
            <AnimatedText
              delay={0.5}
              type="fade"
              className="flex flex-col items-center gap-4"
            >
              <Button
                className="bg-white rounded-full text-red-600 hover:bg-white/90 px-12"
                onClick={() => navigateTo("product")}
              >
                View Product
              </Button>
            </AnimatedText>
            </AnimatePresence>
          </div>

          {/* Right side - Chips slider */}
          <div className="hidden md:flex absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-30">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="chips-slider flex flex-col gap-6"
            >
              {reorderedChips.map((chip, index) => (
                <motion.div
                  layout
                  key={chip}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 md:w-20 md:h-20 m-2 overflow-hidden cursor-pointer`}
                  onClick={() => {
                    // Convert reordered index back to actual index in chipVariants
                    const originalIndex = chipVariants.indexOf(chip);
                    setSelectedChip(chip);
                    setCurrentChipIndex(originalIndex);
                  }}
                >
                  <img
                    src={chip}
                    alt={`Chip variant ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
          
          

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-40"
      >
        <span className="text-sm font-medium tracking-widest mb-1">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
      {/* Featured Products */}
      <section className="py-16 relative">
        {/* Animated background elements */}
        <motion.div
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
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Flame className="w-4 h-4 mr-1 inline text-red-500" />
                </motion.span>
                TASTY TREATS
              </Badge>
              <h2 className="text-3xl md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
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
            plugins={[Autoplay({ delay: 2000 })]}
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
      {/* Why Choose Us */}
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
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
                  <h2 className="text-3xl md:text-4xl mb-4">
                    Snack Time Fun Fact
                  </h2>
                  <p className="text-xl">
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
                  <div className="text-4xl font-bold mb-2 relative z-10">
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
                  <div className="text-4xl font-bold mb-2 relative z-10">
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
                  <div className="text-4xl font-bold mb-2 relative z-10">
                    <AnimatedCounter value={10} />+
                  </div>
                  <p className="relative z-10">Years of Excellence</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <Button
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
                </Button>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl mb-8">
              Ready to Experience the Yummfeast Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have made Yummfeast
              their favorite snack brand.
            </p>
            <Button
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
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
