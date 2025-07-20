"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronUp, PartyPopper, Search, X } from "lucide-react"
import CustomButton from "../ui/custom-button";
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categoryStructure = {
  chips: {
    label: "Chips",
    subcategories: {
      rings: "Rings",
      pasta: "Pasta Chips",
      classic: "Classic Chips",
    },
  },
  namkeen: {
    label: "Namkeen",
    subcategories: {
      mix: "Mix Varieties",
      bhujia: "Bhujia",
      traditional: "Traditional",
    },
  },
  fryums: {
    label: "Fryums",
    subcategories: {
      corn: "Corn Based",
      rice: "Rice Based",
      wheat: "Wheat Based",
    },
  },
}
 const products: Product[] = [
    {
      id: 1,
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image:
        "/images/chips1.png",
      price: "₹10",
      category: "Fryums",
      subcategory: "rings",
    },
    {
      id: 2,
      name: "Yummfeast Pasta",
      description: "Crispy pasta snacks with Italian herbs seasoning",
      image:
        "/images/chips2.png",
      price: "₹15",
      category: "Chips",
      subcategory: "pasta",
    },
    {
      id: 3,
      name: "Yummfeast All-in-One",
      description:
        "A delightful mix of various namkeen for the perfect snack time",
      image:
        "/images/chips3.png",
      price: "₹20",
      category: "Namkeen",
      subcategory: "mix",
    },
    {
      id: 4,
      name: "Yummfeast Rings",
      description: "Crunchy rings with a burst of tangy masala flavor",
      image:
        "/images/chips1.png",
      price: "₹10",
      category: "Fryums",
      subcategory: "rings",
    },
  ];

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  subcategory: string;
}

// Product Circle Component
const ProductCircle = ({
  product,
  index,
}: {
  product: Product;
  index: number;
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
      <CustomButton className="bg-orange-500" value={product.category}/>
    </div>
  );
};

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const heroRef = useRef<HTMLElement>(null)
  const [confetti, setConfetti] = useState(false)

  // Get subcategories based on selected category
  const getSubcategories = () => {
    if (selectedCategory === "all") return {}
    return categoryStructure[selectedCategory as keyof typeof categoryStructure]?.subcategories || {}
  }

  // Filter and sort products
  const filteredAndSortedProducts = () => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory

      return matchesSearch && matchesCategory && matchesSubcategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-low":
          return a.priceValue - b.priceValue
        case "price-high":
          return b.priceValue - a.priceValue
        case "rating":
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }

  // Count active filters
  const activeFiltersCount = [selectedCategory !== "all", selectedSubcategory !== "all", searchTerm !== ""].filter(
    Boolean,
  ).length

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedSubcategory("all")
    setSortBy("name")
  }

  // Confetti explosion effect
  const triggerConfetti = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 2000)
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
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-red-600 to-orange-600 text-white p-3 rounded-full shadow-lg"
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
      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[45vh] md:min-h-[67vh] flex place-items-center justify-between px-6 md:px-60 overflow-hidden bg-[url('/images/bg.png')]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="flex place-items-center justify-between w-full"
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            {/* Left image - Slide in from left */}
            <motion.img
              src="/images/b2l.png"
              className="w-1/2 ms-0 md:w-2/5 md:me-16 md:mt-10 drop-shadow-2xl"
              alt="Left Banner Image"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Right image - Drop in from top */}
            <motion.img
              src="/images/b2r.png"
              className="w-1/2 md:w-2/5 md:h-3/5 me-8 md:mx-16 md:mt-10 drop-shadow-2xl"
              alt="Right Banner Image"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            />
          </motion.div>
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

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search products, descriptions, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 border-gray-200 focus:border-red-500 rounded-lg focus:ring-red-500"
                />
              </div>

              {/* Category Select */}
              <div className="min-w-[200px]">
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => {
                    setSelectedCategory(value)
                    setSelectedSubcategory("all")
                  }}
                >
                  <SelectTrigger className="h-12 border-gray-200 focus:border-red-500 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-lg">
                    <SelectItem value="all" className="hover:bg-red-50 focus:bg-red-50">
                      All Categories
                    </SelectItem>
                    {Object.entries(categoryStructure).map(([key, category]) => (
                      <SelectItem key={key} value={key} className="hover:bg-red-50 focus:bg-red-50">
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subcategory Select */}
              <div className="min-w-[200px]">
                <Select
                  value={selectedSubcategory}
                  onValueChange={setSelectedSubcategory}
                  disabled={selectedCategory === "all"}
                >
                  <SelectTrigger
                    className={`h-12 border-gray-200 focus:border-red-500 rounded-lg bg-white transition-colors ${
                      selectedCategory === "all" ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                    }`}
                  >
                    <SelectValue placeholder="Select Subcategory" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-lg">
                    <SelectItem value="all" className="hover:bg-red-50 focus:bg-red-50">
                      All Subcategories
                    </SelectItem>
                    {Object.entries(getSubcategories()).map(([key, label]) => (
                      <SelectItem key={key} value={key} className="hover:bg-red-50 focus:bg-red-50">
                        {label as string}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Select */}
              <div className="min-w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-red-500 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 shadow-lg">
                    <SelectItem value="name" className="hover:bg-red-50 focus:bg-red-50">
                      Name (A-Z)
                    </SelectItem>
                    <SelectItem value="price-low" className="hover:bg-red-50 focus:bg-red-50">
                      Price (Low to High)
                    </SelectItem>
                    <SelectItem value="price-high" className="hover:bg-red-50 focus:bg-red-50">
                      Price (High to Low)
                    </SelectItem>
                    <SelectItem value="rating" className="hover:bg-red-50 focus:bg-red-50">
                      Highest Rated
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="h-12 px-6 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 bg-transparent"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear ({activeFiltersCount})
                </Button>
              )}
            </div>

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                {selectedCategory !== "all" && (
                  <Badge className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100">
                    {categoryStructure[selectedCategory as keyof typeof categoryStructure]?.label}
                  </Badge>
                )}
                {selectedSubcategory !== "all" && (
                  <Badge className="bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100">
                    {getSubcategories()[selectedSubcategory] as string}
                  </Badge>
                )}
                {searchTerm && (
                  <Badge className="bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100">
                    Search: "{searchTerm}"
                  </Badge>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-items-center">
            {filteredAndSortedProducts().map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCircle product={product} index={index} />
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
            <h2 className="text-3xl md:text-5xl font-normal mb-6">Can't Find What You're Looking For?</h2>
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
