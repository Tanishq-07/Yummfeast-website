"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
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
  Utensils,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Define types for our components
interface Product {
  name: string
  description: string
  image: string
  price: string
}

interface Feature {
  title: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

// Animated cursor glow effect
const CursorGlow = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [cursorX, cursorY])

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
  )
}

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
  }))

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
  )
}

// Enhanced hovering chip component with 3D effect and interactive elements
const HoveringChip = ({
  src,
  alt,
  className,
  delay = 0,
  rotateAmount = 10,
}: {
  src: string
  alt: string
  className: string
  delay?: number
  rotateAmount?: number
}) => {
  const [isHovered, setIsHovered] = useState(false)

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
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-contain drop-shadow-lg" />

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
  )
}

// Animated text reveal component with proper typing
const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  type = "fade",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  type?: "fade" | "slide" | "scale"
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
  }

  return (
    <motion.div
      initial={variants[type].initial}
      animate={variants[type].animate}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll indicator component with enhanced animation
const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <span className="text-sm mb-2 font-medium tracking-wider">Scroll to explore</span>
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
  )
}

// Product card with enhanced hover effects and proper typing
const ProductCard = ({
  product,
  index,
  navigateTo,
}: {
  product: Product
  index: number
  navigateTo: (page: string) => void
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Random rotation for the wobble effect
  const randomRotation = Math.random() * 10 - 5

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
          isHovered ? "border-red-400 shadow-xl shadow-red-100" : "border-transparent",
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
                <motion.div whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.3 }}>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    onClick={() => alert("Added to cart!")}
                  >
                    <ShoppingBag className="w-4 h-4 text-red-600" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.3 }}>
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
          <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
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
  )
}

// Feature card with enhanced hover effects and proper typing
const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature
  index: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const icons = [Shield, Award, Zap]
  const IconComponent = icons[index % icons.length]

  // Random rotation for the wobble effect
  const randomRotation = Math.random() * 10 - 5

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
        isHovered ? "border-red-200 shadow-xl shadow-red-50" : "border-transparent",
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
      <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
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
  )
}

// Animated counter component
const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: number
  duration?: number
}) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * value)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span ref={countRef}>{count}</span>
}

// Confetti explosion component
const ConfettiExplosion = ({
  isExploding = false,
}: {
  isExploding: boolean
}) => {
  return (
    <AnimatePresence>
      {isExploding && (
        <>
          {Array.from({ length: 50 }).map((_, i) => {
            const randomX = (Math.random() - 0.5) * 500
            const randomY = (Math.random() - 0.5) * 500
            const randomRotation = Math.random() * 360
            const randomScale = Math.random() * 0.6 + 0.4
            const randomColor = ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500", "bg-purple-500"][
              Math.floor(Math.random() * 5)
            ]

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
            )
          })}
        </>
      )}
    </AnimatePresence>
  )
}

// Scroll Navigator component
const ScrollNavigator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

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
  )
}

interface HomePageProps {
  navigateTo: (page: string) => void
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const [scrollY, setScrollY] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroTextY = useTransform(scrollYProgress, [0, 0.8], [0, 100])

  // Parallax effect for background elements
  const bgParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const bgParallax2 = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const triggerConfetti = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 2000)
  }

  const products: Product[] = [
    {
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image:
        "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/468422498_18049262201502000_6926184055011270435_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L5E4D1K_OaIQ7kNvwGcMo4D&_nc_oc=AdltoQKX9sAPK9zYGTq_oCQ2ZIqu9eIjWebgxOigIVdF4pyNrZOxMOoKZSrGv2bn6Twa1A38jaILXnZBurJF7Kr5&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=QEqWSGsdxIczri-hwjueRQ&oh=00_AfF8JE5x2Iqb6VnPCKc9mmOTytoErRzCvQu7zJWkjvRCHw&oe=680D12DB",
      price: "₹10",
    },
    {
      name: "Yummfeast Pasta",
      description: "Crispy pasta snacks with Italian herbs seasoning",
      image:
        "https://scontent-bom2-4.xx.fbcdn.net/v/t51.75761-15/490510046_18065287943502000_4855848620494398094_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iYeL2r3fHwMQ7kNvwEqQ1Gb&_nc_oc=AdlsuKtJP7t3DYXLqjo8-y8POr-UI9yrkOMf2cbhtzjbDD22FxYtmw3mY3r9PQt4IKxebmx5612w56_pT-gWlPzZ&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=5PsMj8sgbIbnD5jWjHfPYg&oh=00_AfHr8zX1eCj7xQZrK4lwi7Yv_lWzxYYh-B1tXb9cPjuQZA&oe=680D1579",
      price: "₹15",
    },
    {
      name: "Yummfeast All-in-One",
      description: "A delightful mix of various namkeen for the perfect snack time",
      image:
        "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/491468617_18065125247502000_1149868952402854465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kgaL_GKWRoMQ7kNvwFg_GOo&_nc_oc=Adm_Vgu1FK_aJE65mzEE0Jr3iwENkfijb2wCdwYoFzWVANO8FTEjIClX5q2-ZDto3w4p0wUifZz2anY75Hio24iR&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=riWHqGIbEyfis2eXlW8CAQ&oh=00_AfG5QVx3140ImkLLhDajGX8KKnQG0x9GwdnlAttlx9G4QA&oe=680D2DAB",
      price: "₹20",
    },
  ]

  const features: Feature[] = [
    {
      title: "Premium Quality",
      description: "All our snacks are made with the finest ingredients for authentic taste and crunch.",
    },
    {
      title: "Hygienic Processing",
      description: "Our state-of-the-art facilities ensure the highest standards of hygiene and quality control.",
    },
    {
      title: "Value for Money",
      description: "We offer generous portions at affordable prices so you get more joy in every pack.",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      role: "Verified Customer",
      quote:
        "Yummfeast Rings are my kids' favorite snack. The quality is outstanding and the taste is unmatched. We've been loyal customers for years!",
      avatar: "/images/avatar1.png",
    },
    {
      name: "Priya Patel",
      role: "Verified Customer",
      quote:
        "I love the Pasta snacks from Yummfeast. They're perfectly seasoned and always fresh. My go-to evening snack with chai!",
      avatar: "/images/avatar2.png",
    },
    {
      name: "Amit Verma",
      role: "Verified Customer",
      quote:
        "The All-in-One mix is perfect for parties. Everyone loves the variety and the authentic flavors. Will definitely keep ordering!",
      avatar: "/images/avatar3.png",
    },
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Scroll Navigator */}
      <ScrollNavigator />

      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <FloatingParticles />

        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-700" />

          {/* Desktop image */}
          <img
            src="/images/hero.png"
            alt=""
            className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-60"
          />

          {/* Mobile image */}
          <img
            src="/images/hero-mobile-1.svg"
            alt=""
            className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-60"
          />
        </motion.div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 blur-[100px]"
          style={{ y: bgParallax1 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 blur-[80px]"
          style={{ y: bgParallax2 }}
        />

        {/* Animated chips */}
        <HoveringChip
          src="/images/chip3 (1).png"
          alt="Pasta Packet"
          className="w-32 md:w-48 left-[5%] top-[10%] md:w-56 left-[5%] top-[15%]"
          rotateAmount={15}
        />
        <HoveringChip
          src="/images/chip4 (1).png"
          alt="Rings Packet"
          className="hidden md:block w-32 md:w-48 md:w-56 right-[5%] top-[20%]"
          delay={1.5}
          rotateAmount={-15}
        />
        <HoveringChip
          src="/images/chip3 (1).png"
          alt="Pasta Packet"
          className="hidden md:block w-24 md:w-32 lg:w-40 left-[20%] bottom-[15%]"
          delay={0.8}
          rotateAmount={10}
        />
        <HoveringChip
          src="/images/chip4 (1).png"
          alt="Rings Packet"
          className="w-32 right-[5%] bottom-[7%] md:w-40 md:right-[15%] md:bottom-[20%]"
          delay={2.2}
          rotateAmount={-10}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-xl mx-auto text-center text-white" style={{ y: heroTextY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <Sparkles className="inline-block w-8 h-8 text-yellow-300 mb-2" />
            </motion.div>

            <AnimatedText delay={0.4} type="scale">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                #ab tummy bole <span className="text-yellow-300">yummy</span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.6} type="slide">
              <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                Snack with a Smile: Bringing Joy through Delicious Chips, Fryums, and Flavorful Namkeens!
              </p>
            </AnimatedText>

            <AnimatedText delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-white/90 font-bold shadow-lg border-2 border-white group relative overflow-hidden"
                  onClick={() => navigateTo("product")}
                >
                  <span className="relative z-10">Explore Products</span>
                  <motion.span
                    className="absolute inset-0 bg-yellow-300"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white hover:bg-white/10 font-bold shadow-lg border-2 border-white relative overflow-hidden group"
                  onClick={() => navigateTo("about")}
                >
                  <span className="relative z-10">Learn More</span>
                  <motion.span
                    className="absolute inset-0 bg-red-700"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
              </div>
            </AnimatedText>
          </motion.div>
        </div>

        <ScrollIndicator />

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[80px]">
            <motion.path
              d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 relative">
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
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm bg-red-50 border-red-200">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Flame className="w-4 h-4 mr-1 inline text-red-500" />
                </motion.span>
                TASTY TREATS
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                Our Delicious Snacks
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular snacks that customers love. Quality and taste guaranteed in every bite!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-16">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} navigateTo={navigateTo} />
            ))}
          </div>

          <motion.div
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
          </motion.div>
        </div>
      </section>

      {/* Features Section with parallax effect */}
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
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm bg-red-50 border-red-200">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Award className="w-4 h-4 mr-1 inline text-red-500" />
                </motion.span>
                WHY CHOOSE US
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                Why Choose Yummfeast
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We pride ourselves on delivering exceptional quality and taste in every pack of our snacks.
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
      <section className="py-24 bg-red-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"
          animate={{ x: [0, 100], y: [0, -100] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Snack Time Fun Fact</h2>
                  <p className="text-xl">Did you know? Indians consume over 1 billion packets of snacks every month!</p>
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
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
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
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
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
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
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

      {/* Testimonials with enhanced animations */}
      <section className="py-24 relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-40 left-0 w-64 h-64 rounded-full bg-red-100 opacity-50 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-yellow-100 opacity-50 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
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
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm bg-red-50 border-red-200">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Utensils className="w-4 h-4 mr-1 inline text-red-500" />
                </motion.span>
                TESTIMONIALS
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </motion.div>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="p-6 md:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100 relative"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <motion.div
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-white rounded-full p-2 border-2 border-red-200"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </motion.div>

                      <div className="flex justify-center mt-8 mb-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star, i) => (
                            <motion.div
                              key={star}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.blockquote
                        className="text-xl italic mb-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        "{testimonial.quote}"
                      </motion.blockquote>

                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
            <CarouselNext className="right-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
          </Carousel>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateTo("testimonial")}
              className="border-red-200 hover:bg-red-50 relative overflow-hidden group"
            >
              <span className="relative z-10">Read More Testimonials</span>
              <motion.span
                className="absolute inset-0 bg-red-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with animated background */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"
          animate={{ x: [0, -100], y: [0, 100] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience the Yummfeast Difference?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have made Yummfeast their favorite snack brand.
            </p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90 group relative overflow-hidden"
              onClick={() => {
                triggerConfetti()
                navigateTo("product")
              }}
            >
              <span className="relative z-10 group-hover:text-red-600">Shop Now</span>
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
  )
}
