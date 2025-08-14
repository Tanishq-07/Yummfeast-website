"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronUp, PartyPopper, Search, X } from "lucide-react"
import CustomButton from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import productData from "@/data/ProductData.json"

const categoryStructure = {
  namkeen: {
    label: "Namkeen",
    subcategories: {
      mix: "Mix Varieties",
      bhujia: "Bhujia",
      traditional: "Traditional",
    },
  },
  chips: {
    label: "Chips",
    subcategories: {
      rings: "Rings",
      pasta: "Pasta Chips",
      classic: "Classic Chips",
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

const products = productData.products
interface Product {
  id: number
  name: string
  description: string
  price: string
  category: string
  subcategory: string
  image: string
  comingSoon: boolean
}

const ProductCircle = ({
  product,
  index,
  onClick,
}: {
  product: { name: string; image: string; price: string }
  index: number
  onClick: () => void
}) => {
  return (
    <div className="relative flex flex-col items-center gap-4">
      <motion.img
        src="/images/patch3.png"
        alt=""
        className="absolute top-6 h-52 w-52"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
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
      <div onClick={onClick}>
        <CustomButton className="bg-orange-500 cursor-pointer" value={product.name} />
      </div>
    </div>
  )
}

const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
      whileHover={{ y: -3, scale: 1.02 }}
      onClick={onClick}
    >
      {/* Image placeholder - smaller */}
      <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center">
          <span className="text-lg font-normal text-orange-600">{product.name.charAt(0)}</span>
        </div>
        {/* Price badge */}
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.price}
        </div>
      </div>

      {/* Product info - minimal */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">{product.category}</span>
          <span className="text-sm font-normal text-red-600">{product.price}</span>
        </div>
      </div>
    </motion.div>
  )
}

const ComingSoonCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-200 relative"
      whileHover={{ y: -3, scale: 1.02 }}
    >
      {/* Coming Soon Badge */}
      <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
        Coming Soon
      </div>

      {/* Image placeholder */}
      <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-lg font-normal text-gray-600">{product.name.charAt(0)}</span>
        </div>
        {/* Price badge */}
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.price}
        </div>
      </div>

      {/* Product info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-700 group-hover:text-red-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-500 capitalize bg-gray-200 px-2 py-1 rounded">{product.category}</span>
          <span className="text-sm font-normal text-red-600">{product.price}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [confetti, setConfetti] = useState(false)

  const categoryProducts = [
    { name: "Namkeen", image: "/images/chips5.png", price: "₹5" },
    { name: "Chips", image: "/images/chips2.png", price: "₹5" },
    { name: "Fryums", image: "/images/chips3.png", price: "₹5" },
    { name: "All Products", image: "/images/chips4.png", price: "₹5" },
  ]

  const comingSoonProducts = products.filter((product) => product.comingSoon)
  const currentProducts = products.filter((product) => !product.comingSoon)

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === "All Products") {
      setSelectedCategory("all")
    } else {
      setSelectedCategory(categoryName.toLowerCase())
    }
    setSelectedSubcategory("all")
  }

  const getSubcategories = () => {
    if (selectedCategory === "all") return {}
    return categoryStructure[selectedCategory as keyof typeof categoryStructure]?.subcategories || {}
  }

  const filteredAndSortedProducts = () => {
    const filtered = currentProducts.filter((product) => {
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory

      return matchesSearch && matchesCategory && matchesSubcategory
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-low":
          return Number.parseInt(a.price.replace("₹", "")) - Number.parseInt(b.price.replace("₹", ""))
        case "price-high":
          return Number.parseInt(b.price.replace("₹", "")) - Number.parseInt(a.price.replace("₹", ""))
        default:
          return 0
      }
    })

    return filtered
  }

  const activeFiltersCount = [selectedCategory !== "all", selectedSubcategory !== "all", searchTerm !== ""].filter(
    Boolean,
  ).length

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedSubcategory("all")
    setSortBy("name")
  }

  const triggerConfetti = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 2000)
  }

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

  return (
    <div className="relative overflow-x-hidden">
      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-600 py-16">
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
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          className="absolute top-8 left-6 md:top-12 md:left-28 text-5xl md:text-6xl"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          🤤
        </motion.div>
        <motion.div
          className="absolute top-10 right-6 md:top-20 md:right-28 text-5xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          🔥
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-20 md:left-1/4 text-4xl"
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          🎉
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-20 md:right-1/3 text-5xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          😋
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-normal mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Products
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the Crunch, Backed by Cutting-Edge Craft! ✨
            </motion.p>
          </div>
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
                    <SelectValue placeholder="All Categories" />
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
                    <SelectValue placeholder="All Subcategories" />
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
                    <SelectValue placeholder="Name (A-Z)" />
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

      {/* Categories Section - unchanged except for click functionality */}
      <section className="py-16 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-items-center">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCircle product={product} index={index} onClick={() => handleCategoryClick(product.name)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with animated background */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
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
