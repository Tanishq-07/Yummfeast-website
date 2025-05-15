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
        "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/468422498_18049262201502000_6926184055011270435_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L5E4D1K_OaIQ7kNvwGcMo4D&_nc_oc=AdltoQKX9sAPK9zYGTq_oCQ2ZIqu9eIjWebgxOigIVdF4pyNrZOxMOoKZSrGv2bn6Twa1A38jaILXnZBurJF7Kr5&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=QEqWSGsdxIczri-hwjueRQ&oh=00_AfF8JE5x2Iqb6VnPCKc9mmOTytoErRzCvQu7zJWkjvRCHw&oe=680D12DB",
      description: "Crunchy rings with a burst of tangy masala flavor",
    },
    {
      id: 2,
      name: "Yummfeast Pasta",
      price: "₹15",
      category: "chips",
      image:
        "https://scontent-bom2-1.xx.fbcdn.net/v/t51.75761-15/484296481_18062049956502000_5202190244912784351_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bBPYsHq5YREQ7kNvwHRbjoH&_nc_oc=AdlsagV4v-Cc-DdNxxjOn2YiAjfUodjcKB1KdI7nPxLE_SxsB92UF6sqStnyYQkPjlwJ3_Mmd5Bo_zLlXUmWU3Uf&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=QcrWpFDNRQrp2m54k-L_9g&oh=00_AfG1JKYPQLOVvEUCNGxfZN6wEEgfa-0bITE0AWmvia0soA&oe=680D10D8",
      description: "Crispy pasta snacks with Italian herbs seasoning",
    },
    {
      id: 3,
      name: "Yummfeast All-in-One",
      price: "₹20",
      category: "namkeen",
      image:
        "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/491468617_18065125247502000_1149868952402854465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kgaL_GKWRoMQ7kNvwFg_GOo&_nc_oc=Adm_Vgu1FK_aJE65mzEE0Jr3iwENkfijb2wCdwYoFzWVANO8FTEjIClX5q2-ZDto3w4p0wUifZz2anY75Hio24iR&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=riWHqGIbEyfis2eXlW8CAQ&oh=00_AfG5QVx3140ImkLLhDajGX8KKnQG0x9GwdnlAttlx9G4QA&oe=680D2DAB",
      description: "A delightful mix of various namkeen for the perfect snack time",
    },
    {
      id: 4,
      name: "Yummfeast Chatpata Mix",
      price: "₹25",
      category: "namkeen",
      image:
        "https://scontent-bom2-4.xx.fbcdn.net/v/t51.75761-15/490510046_18065287943502000_4855848620494398094_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iYeL2r3fHwMQ7kNvwEqQ1Gb&_nc_oc=AdlsuKtJP7t3DYXLqjo8-y8POr-UI9yrkOMf2cbhtzjbDD22FxYtmw3mY3r9PQt4IKxebmx5612w56_pT-gWlPzZ&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=5PsMj8sgbIbnD5jWjHfPYg&oh=00_AfHr8zX1eCj7xQZrK4lwi7Yv_lWzxYYh-B1tXb9cPjuQZA&oe=680D1579",
      description: "Spicy and tangy mix that will tantalize your taste buds",
    },
    {
      id: 5,
      name: "Yummfeast Aloo Bhujia",
      price: "₹15",
      category: "namkeen",
      image:
        "https://scontent-bom2-3.xx.fbcdn.net/v/t51.75761-15/486656603_18063371231502000_3260484252073249947_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XBfzNMHPwbwQ7kNvwGWpv7L&_nc_oc=Adk514ECWmw91qZ-1uN6T93bcgCfecIKxirjcm4Ye8Wu83m8UDq3P1YstzLVTpIvKATU61inQYbrEctt8YfkNVMM&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=fE6e6yFDZh0xfn9HQpQuNg&oh=00_AfHTo_Iy5NfIVSk7DLrtfbTuVPVpjgPdQaEIR4U135mgYQ&oe=680D35A6",
      description: "Classic potato noodles with a perfect blend of spices",
    },
    {
      id: 6,
      name: "Yummfeast Corn Puffs",
      price: "₹10",
      category: "fryums",
      image:
        "https://scontent-bom2-3.xx.fbcdn.net/v/t51.75761-15/486016793_18062776019502000_2146009678516366812_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oziAvh_UA0QQ7kNvwFYE_Dq&_nc_oc=AdlAW-sJwvjN6fy2YoILMEmEJSOh3yU-WzgRzHNcnob89w-5kO7YhbItq3ro3NJuYCeC7WDjCCqRHeJ_df3QuFey&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=o4vaCFPUdG4Xop8tHptM7g&oh=00_AfGwI3FM55ksiV863pPCL-DTjYEe69mVRxdeLnEriiAZwA&oe=680D1ED5",
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
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <FloatingParticles />

        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-600" />

          {/* Background pattern */}
          {/* <motion.div
            className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-20"
            animate={{
              x: [0, 50],
              y: [0, -30],
            }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          /> */}
        </motion.div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-500/10 to-red-500/10 blur-[100px]"
          style={{ y: bgParallax1 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 blur-[80px]"
          style={{ y: bgParallax2 }}
        />

        {/* Animated product images */}
        <motion.div
          className="absolute w-32 left-[10%] top-[7%] md:w-40 left-[10%] top-[20%]"
          initial={{ opacity: 1, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <img
            src={"/images/chip4 (1).png"}
            alt={products[0].name}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          className="absolute w-32 md:w-40 right-[10%] bottom-[20%]"
          initial={{ opacity: 1, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.8,
          }}
        >
          <img
            src={"/images/chip3 (1).png"}
            alt={products[2].name}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center text-white" style={{ y: heroTextY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <Sparkles className="inline-block w-8 h-8 text-yellow-300 mb-2" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our <span className="text-yellow-300">Delicious</span> Products
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 drop-shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore our range of delicious snacks designed to satisfy your cravings.
            </motion.p>
          </motion.div>
        </div>

        <ScrollIndicator />

        {/* Wave separator */}
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

      {/* Product Filters with animated tabs */}
      <section className="py-8 border-b relative">
        <motion.div
          className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-red-50 to-blue-50 opacity-50"
          animate={{
            background: [
              "linear-gradient(to right, rgba(254, 242, 242, 0.5), rgba(239, 246, 255, 0.5))",
              "linear-gradient(to right, rgba(239, 246, 255, 0.5), rgba(254, 242, 242, 0.5))",
              "linear-gradient(to right, rgba(254, 242, 242, 0.5), rgba(239, 246, 255, 0.5))",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Tabs defaultValue="all" onValueChange={setCategory}>
              <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-red-100/50 -z-10"
                  animate={{
                    x: [0, 300, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <TabsTrigger value="all" className="relative overflow-hidden group">
                    <span className="relative z-10">All</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-red-200/50"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <TabsTrigger value="chips" className="relative overflow-hidden group">
                    <span className="relative z-10">Chips</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-red-200/50"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <TabsTrigger value="namkeen" className="relative overflow-hidden group">
                    <span className="relative z-10">Namkeen</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-red-200/50"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <TabsTrigger value="fryums" className="relative overflow-hidden group">
                    <span className="relative z-10">Fryums</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-red-200/50"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </TabsTrigger>
                </motion.div>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Products Grid with enhanced animations */}
      <section className="py-16 relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-40 right-0 w-64 h-64 rounded-full bg-red-100 opacity-30 blur-3xl -z-10"
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
          className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-blue-100 opacity-30 blur-3xl -z-10"
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

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12 mt-4">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    layout: { duration: 0.3 },
                  }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <Card className="overflow-hidden group h-full border-2 border-transparent hover:border-blue-300 transition-all duration-300">
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-red-50 relative overflow-hidden">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, 5, -5, 0],
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
                        className="absolute top-4 right-4 bg-blue-600 text-white font-bold rounded-full w-14 h-14 flex items-center justify-center z-10"
                        initial={{ rotate: 0, scale: 1 }}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {product.price}
                      </motion.div>

                      {/* Quick action buttons with enhanced animations */}
                      <AnimatePresence>
                        <motion.div
                          className="absolute bottom-4 left-0 right-0 flex justify-center gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.3 }}>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                              onClick={() => {
                                triggerConfetti()
                                alert("Added to cart!")
                              }}
                            >
                              <ShoppingBag className="w-4 h-4 text-blue-600" />
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.3 }}>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                              onClick={() => alert("Added to wishlist!")}
                            >
                              <Heart className="w-4 h-4 text-blue-600" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Animated sparkles on hover */}
                      <AnimatePresence>
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
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
                              transition={{
                                duration: 0.8,
                                delay: i * 0.2,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 2,
                              }}
                            >
                              <Sparkles className="text-yellow-400 w-5 h-5" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-2 bg-blue-50">
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Flame className="w-3 h-3 mr-1 inline text-blue-500" />
                        </motion.span>
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
                          onClick={() => window.alert(`${product.name} details coming soon!`)}
                          className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group"
                        >
                          <span className="relative z-10">View Details</span>
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
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
