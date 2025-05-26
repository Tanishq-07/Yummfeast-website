// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"

// export default function ProductPage() {
//   const [category, setCategory] = useState("all")

//   const products = [
//     {
//       id: 1,
//       name: "Yummfeast Rings",
//       price: "₹10",
//       category: "chips",
//       image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/468422498_18049262201502000_6926184055011270435_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L5E4D1K_OaIQ7kNvwGcMo4D&_nc_oc=AdltoQKX9sAPK9zYGTq_oCQ2ZIqu9eIjWebgxOigIVdF4pyNrZOxMOoKZSrGv2bn6Twa1A38jaILXnZBurJF7Kr5&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=QEqWSGsdxIczri-hwjueRQ&oh=00_AfF8JE5x2Iqb6VnPCKc9mmOTytoErRzCvQu7zJWkjvRCHw&oe=680D12DB",
//       description: "Crunchy rings with a burst of tangy masala flavor",
//     },
//     {
//       id: 2,
//       name: "Yummfeast Pasta",
//       price: "₹15",
//       category: "chips",
//       image: "https://scontent-bom2-1.xx.fbcdn.net/v/t51.75761-15/484296481_18062049956502000_5202190244912784351_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bBPYsHq5YREQ7kNvwHRbjoH&_nc_oc=AdlsagV4v-Cc-DdNxxjOn2YiAjfUodjcKB1KdI7nPxLE_SxsB92UF6sqStnyYQkPjlwJ3_Mmd5Bo_zLlXUmWU3Uf&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=QcrWpFDNRQrp2m54k-L_9g&oh=00_AfG1JKYPQLOVvEUCNGxfZN6wEEgfa-0bITE0AWmvia0soA&oe=680D10D8",
//       description: "Crispy pasta snacks with Italian herbs seasoning",
//     },
//     {
//       id: 3,
//       name: "Yummfeast All-in-One",
//       price: "₹20",
//       category: "namkeen",
//       image: "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/491468617_18065125247502000_1149868952402854465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kgaL_GKWRoMQ7kNvwFg_GOo&_nc_oc=Adm_Vgu1FK_aJE65mzEE0Jr3iwENkfijb2wCdwYoFzWVANO8FTEjIClX5q2-ZDto3w4p0wUifZz2anY75Hio24iR&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=riWHqGIbEyfis2eXlW8CAQ&oh=00_AfG5QVx3140ImkLLhDajGX8KKnQG0x9GwdnlAttlx9G4QA&oe=680D2DAB",
//       description: "A delightful mix of various namkeen for the perfect snack time",
//     },
//     {
//       id: 4,
//       name: "Yummfeast Chatpata Mix",
//       price: "₹25",
//       category: "namkeen",
//       image: "https://scontent-bom2-4.xx.fbcdn.net/v/t51.75761-15/490510046_18065287943502000_4855848620494398094_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iYeL2r3fHwMQ7kNvwEqQ1Gb&_nc_oc=AdlsuKtJP7t3DYXLqjo8-y8POr-UI9yrkOMf2cbhtzjbDD22FxYtmw3mY3r9PQt4IKxebmx5612w56_pT-gWlPzZ&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=5PsMj8sgbIbnD5jWjHfPYg&oh=00_AfHr8zX1eCj7xQZrK4lwi7Yv_lWzxYYh-B1tXb9cPjuQZA&oe=680D1579",
//       description: "Spicy and tangy mix that will tantalize your taste buds",
//     },
//     {
//       id: 5,
//       name: "Yummfeast Aloo Bhujia",
//       price: "₹15",
//       category: "namkeen",
//       image: "https://scontent-bom2-3.xx.fbcdn.net/v/t51.75761-15/486656603_18063371231502000_3260484252073249947_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XBfzNMHPwbwQ7kNvwGWpv7L&_nc_oc=Adk514ECWmw91qZ-1uN6T93bcgCfecIKxirjcm4Ye8Wu83m8UDq3P1YstzLVTpIvKATU61inQYbrEctt8YfkNVMM&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=fE6e6yFDZh0xfn9HQpQuNg&oh=00_AfHTo_Iy5NfIVSk7DLrtfbTuVPVpjgPdQaEIR4U135mgYQ&oe=680D35A6",
//       description: "Classic potato noodles with a perfect blend of spices",
//     },
//     {
//       id: 6,
//       name: "Yummfeast Corn Puffs",
//       price: "₹10",
//       category: "fryums",
//       image: "https://scontent-bom2-3.xx.fbcdn.net/v/t51.75761-15/486016793_18062776019502000_2146009678516366812_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oziAvh_UA0QQ7kNvwFYE_Dq&_nc_oc=AdlAW-sJwvjN6fy2YoILMEmEJSOh3yU-WzgRzHNcnob89w-5kO7YhbItq3ro3NJuYCeC7WDjCCqRHeJ_df3QuFey&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=o4vaCFPUdG4Xop8tHptM7g&oh=00_AfGwI3FM55ksiV863pPCL-DTjYEe69mVRxdeLnEriiAZwA&oe=680D1ED5",
//       description: "Light and airy corn puffs with a cheesy flavor",
//     },
//   ]

//   const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-blue-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl font-bold mb-6">Our Products</h1>
//             <p className="text-xl text-muted-foreground">
//               Explore our range of delicious snacks designed to satisfy your cravings.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Product Filters */}
//       <section className="py-8 border-b">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="all" onValueChange={setCategory}>
//             <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
//               <TabsTrigger value="all">All</TabsTrigger>
//               <TabsTrigger value="chips">Chips</TabsTrigger>
//               <TabsTrigger value="namkeen">Namkeen</TabsTrigger>
//               <TabsTrigger value="fryums">Fryums</TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12 mt-4">
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 1, y: 0 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="overflow-hidden group">
//                   <div className="aspect-square bg-blue-50 relative overflow-hidden">
//                     <img
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.name}
//                       className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
//                     <p className="text-muted-foreground mb-4">{product.description}</p>
//                     <div className="flex justify-between items-center">
//                       <span className="font-bold text-lg">{product.price}</span>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => window.alert(`${product.name} details coming soon!`)}
//                       >
//                         View Details
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {/* <section className="py-16 bg-red-600">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
//             <p className="text-xl mb-8">Contact our team for bulk orders or to inquire about our full product range.</p>
//             <Button
//               size="lg"
//               className="bg-white text-red-600 hover:bg-white/90"
//               onClick={() => (window.location.href = "mailto:info@yummfeast.in")}
//             >
//               Contact Us
//             </Button>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   )
// }
"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, ShoppingBag, Sparkles, ChevronDown, ChevronUp, Flame, PartyPopper } from "lucide-react"

export default function ProductPage() {
  const [category, setCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [confetti, setConfetti] = useState(false)
  const heroRef = useRef(null)

  // Cursor glow effect
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [cursorX, cursorY])

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroTextY = useTransform(scrollYProgress, [0, 0.8], [0, 100])
  const bgParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const bgParallax2 = useTransform(scrollYProgress, [0, 1], [0, -50])

  const products = [
    {
      id: 1,
      name: "Yummfeast Rings",
      price: "₹10",
      category: "chips",
      image:
        "/images/product1.jpg",
      description: "Crunchy rings with a burst of tangy masala flavor",
    },
    {
      id: 2,
      name: "Yummfeast Pasta",
      price: "₹15",
      category: "chips",
      image:
        "/images/product2.jpg",
      description: "Crispy pasta snacks with Italian herbs seasoning",
    },
    {
      id: 3,
      name: "Yummfeast All-in-One",
      price: "₹20",
      category: "namkeen",
      image:
        "/images/product3.jpg",
      description: "A delightful mix of various namkeen for the perfect snack time",
    },
    {
      id: 4,
      name: "Yummfeast Chatpata Mix",
      price: "₹25",
      category: "namkeen",
      image:
        "/images/product4.jpg",
      description: "Spicy and tangy mix that will tantalize your taste buds",
    },
    {
      id: 5,
      name: "Yummfeast Aloo Bhujia",
      price: "₹15",
      category: "namkeen",
      image:
        "/images/product5.jpg",
      description: "Classic potato noodles with a perfect blend of spices",
    },
    {
      id: 6,
      name: "Yummfeast Corn Puffs",
      price: "₹10",
      category: "fryums",
      image:
        "/images/product6.jpg",
      description: "Light and airy corn puffs with a cheesy flavor",
    },
  ]

  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  // Confetti explosion effect
  const triggerConfetti = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 2000)
  }

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      color: i % 3 === 0 ? "yellow" : i % 3 === 1 ? "red" : "white",
    }))

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor:
                particle.color === "yellow"
                  ? "rgba(253, 224, 71, 0.2)"
                  : particle.color === "red"
                    ? "rgba(239, 68, 68, 0.2)"
                    : "rgba(255, 255, 255, 0.2)",
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

  // Confetti explosion component
  const ConfettiExplosion = ({ isExploding = false }) => {
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

  // Scroll indicator component
  const ScrollIndicator = () => {
    return (
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
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

  // Scroll to top button
  const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }

      window.addEventListener("scroll", toggleVisibility)
      return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    return (
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    )
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Cursor glow effect */}
      <motion.div
        className="fixed w-[200px] h-[200px] rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 pointer-events-none blur-[80px] z-0"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Hero Section with Parallax */}
      <section className="relative bg-blue-50 py-16 overflow-hidden">
        <motion.div
          className="absolute w-32 h-32 left-[5%] top-[3%] md:left-[10%] top-[20%]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
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
            src={"/images/chip3 (1).png"}
            alt="Floating product"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
        <motion.div
          className="absolute w-24 h-24 right-[5%] bottom-[5%] md:right-[15%] bottom-[20%]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            y: [20, -20, 20],
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
            src={"/images/chip4 (1).png"}
            alt="Floating product"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>
        {/* Brush stroke background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <filter id="brushTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
              <feDisplacementMap in="SourceGraphic" scale="5" />
            </filter>
            <rect width="100%" height="100%" filter="url(#brushTexture)" fill="#4299E1" />
          </svg>
        </div>

        {/* Ink blob decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F29C1F"
              d="M39.9,-65.7C54.1,-60.5,69.5,-54.1,76.7,-42.5C83.9,-30.9,82.9,-15.5,79.1,-2.2C75.3,11.1,68.6,22.1,61.8,33C54.9,43.9,47.8,54.6,37.7,62.3C27.6,70,13.8,74.7,-0.2,75C-14.2,75.3,-28.3,71.3,-39.9,64C-51.5,56.7,-60.5,46.1,-67.1,33.8C-73.7,21.5,-77.9,7.5,-77.2,-6.4C-76.6,-20.3,-71.1,-34.2,-61.8,-43.9C-52.5,-53.6,-39.4,-59.1,-27.1,-65.5C-14.8,-71.9,-3.7,-79.2,7.1,-79.9C17.9,-80.6,25.7,-70.9,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF6B6B"
              d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              {/* Organic blob behind the text */}
              <svg
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width="120%"
                height="140"
                viewBox="0 0 400 140"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10,30 Q30,0 70,10 T140,20 Q180,0 220,15 T300,25 Q350,10 390,30 Q410,50 390,80 T340,110 Q300,130 250,110 T180,100 Q140,120 100,105 T40,90 Q10,110 10,70 Z"
                  fill="#4299E1"
                />
                {/* Grunge brush effect on the blob */}
                <filter id="grunge" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="10"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
                <path
                  d="M10,30 Q30,0 70,10 T140,20 Q180,0 220,15 T300,25 Q350,10 390,30 Q410,50 390,80 T340,110 Q300,130 250,110 T180,100 Q140,120 100,105 T40,90 Q10,110 10,70 Z"
                  fill="#4299E1"
                  filter="url(#grunge)"
                  opacity="0.4"
                />
              </svg>

              <h1 className="text-4xl font-bold px-8 py-4">Our Products</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Explore our range of delicious snacks designed to satisfy your cravings.
            </p>
          </div>
        </div>

        {/* Paint brush stroke at bottom of hero */}
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
              className="fill-white"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Product Filters with animated tabs */}
     <section className="py-8 border-b relative">
        <div className="container mx-auto px-4">
          {/* Handwritten frame around tabs */}
          <div className="relative max-w-md mx-auto">
            
            <Tabs defaultValue="all" onValueChange={setCategory}>
              <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
                <TabsTrigger value="all" className="relative">
                  All
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: category === "all" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
                <TabsTrigger value="chips" className="relative">
                  Chips
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: category === "chips" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
                <TabsTrigger value="namkeen" className="relative">
                  Namkeen
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: category === "namkeen" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
                <TabsTrigger value="fryums" className="relative">
                  Fryums
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: category === "fryums" ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Products Grid with enhanced animations */}
      <section className="py-16 relative">
        {/* Paint splatter background */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5 z-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M39.9,-65.7C54.1,-60.5,69.5,-54.1,76.7,-42.5C83.9,-30.9,82.9,-15.5,79.1,-2.2C75.3,11.1,68.6,22.1,61.8,33C54.9,43.9,47.8,54.6,37.7,62.3C27.6,70,13.8,74.7,-0.2,75C-14.2,75.3,-28.3,71.3,-39.9,64C-51.5,56.7,-60.5,46.1,-67.1,33.8C-73.7,21.5,-77.9,7.5,-77.2,-6.4C-76.6,-20.3,-71.1,-34.2,-61.8,-43.9C-52.5,-53.6,-39.4,-59.1,-27.1,-65.5C-14.8,-71.9,-3.7,-79.2,7.1,-79.9C17.9,-80.6,25.7,-70.9,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 opacity-5 z-0 rotate-45">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12 mt-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 1, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden group relative border-0 shadow-md">
                  {/* SVG Mask/Clip Path for card */}
                  <div
                    className="absolute inset-0 bg-white shadow-md"
                    style={{
                      clipPath: "polygon(3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%, 0% 3%)",
                    }}
                  ></div>

                  {/* Grunge brush texture overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <filter id="grunge-texture">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
                        <feDisplacementMap in="SourceGraphic" scale="10" />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#grunge-texture)" fill="#000000" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="aspect-square bg-blue-50 relative overflow-hidden">
                      {/* Ink blob frame for product image */}
                      <svg
                        className="absolute top-0 left-0 w-full h-full -z-10"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#EBF8FF"
                          d="M47.3,-73.2C60.9,-66.2,71.3,-52.3,77.4,-37.1C83.4,-21.9,85.1,-5.3,81.5,9.4C77.9,24.1,69,36.9,58.1,47.4C47.2,57.9,34.3,66.1,20.1,70.7C5.9,75.3,-9.6,76.3,-23.9,72.5C-38.2,68.7,-51.3,60.1,-62.5,48.5C-73.7,36.9,-83,22.3,-85.2,6.5C-87.4,-9.3,-82.5,-26.3,-72.6,-39.1C-62.7,-51.9,-47.8,-60.5,-33.4,-67C-19,-73.5,-5,-77.9,9.7,-78.1C24.4,-78.3,33.7,-80.2,47.3,-73.2Z"
                          transform="translate(100 100)"
                        />
                      </svg>

                      {/* Price tag with paint splatter */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="relative">
                          <svg
                            className="absolute top-0 left-0 w-full h-full -z-10"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#F29C1F"
                              d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29C74.8,-14.8,77.2,0.5,74.1,14.8C71,29.1,62.5,42.4,50.8,51.2C39.1,60,24.2,64.3,9.2,67.1C-5.8,69.9,-21,71.2,-34.9,66.5C-48.8,61.8,-61.5,51.1,-68.1,37.4C-74.7,23.7,-75.2,7,-71.9,-8.1C-68.6,-23.2,-61.4,-36.7,-50.5,-46.5C-39.6,-56.3,-24.9,-62.4,-9.4,-65.1C6.1,-67.8,30.7,-74.1,42.8,-65.2Z"
                              transform="translate(50 50)"
                            />
                          </svg>
                          <span className="relative z-10 font-bold text-white px-4 py-2 block">{product.price}</span>
                        </div>
                      </div>

                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 relative z-10"
                      />
                    </div>
                    <CardContent className="p-6 relative z-10">
                      <h3 className="font-normal text-xl mb-2 relative inline-block">
                        {product.name}
                        {/* Handwritten underline effect */}
                        <svg
                          className="absolute -bottom-1 left-0 w-full"
                          height="6"
                          viewBox="0 0 100 6"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,3 C20,1 40,5 60,3 S80,1 100,3"
                            stroke="#F29C1F"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{product.price}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.alert(`${product.name} details coming soon!`)}
                          className="relative overflow-hidden group"
                        >
                          <span className="relative z-10">View Details</span>
                          <motion.span
                            className="absolute inset-0 bg-blue-100"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with animated background */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* <motion.div
          className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-10"
          animate={{ x: [0, -100], y: [0, 100] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        /> */}

        {/* Animated floating products */}
        <motion.div
          className="absolute w-32 h-32 left-[5%] top-[3%] md:left-[10%] top-[20%]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
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
            src={"/images/chip3 (1).png"}
            alt="Floating product"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute w-24 h-24 right-[5%] bottom-[5%] md:right-[15%] bottom-[20%]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            y: [20, -20, 20],
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
            src={"/images/chip4 (1).png"}
            alt="Floating product"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <PartyPopper className="w-12 h-12 mx-auto mb-4 text-yellow-300 mt-6" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8">Contact our team for bulk orders or to inquire about our full product range.</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 group relative overflow-hidden"
              onClick={() => {
                triggerConfetti()
                window.location.href = "mailto:info@yummfeast.in"
              }}
            >
              <span className="relative z-10 group-hover:text-blue-600">Contact Us</span>
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
