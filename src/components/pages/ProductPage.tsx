"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PartyPopper, Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import CustomButton from "@/components/ui/custom-button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HeroSection from "../HeroSection"

const products = [
  // Chips Category
  {
    id: 1,
    name: "Classic Salted Chips",
    description:
      "The timeless and universally loved flavor, offering the pure, crispy taste of perfectly salted potatoes.",
    price: "₹5",
    category: "Chips",
    subcategory: "classic",
    image: "/images/products/classic-salted.png",
    comingSoon: false,
  },
  {
    id: 2,
    name: "Cream & Onion Chips",
    description:
      "A popular and creamy flavor combination that blends the mild sweetness of onion with a rich, smooth creaminess.",
    price: "₹5",
    category: "Chips",
    subcategory: "classic",
    image: "/images/products/cream-and-onion.png",
    comingSoon: false,
  },
  {
    id: 3,
    name: "Magic Masala Chips",
    description:
      "A vibrant and exciting blend of Indian spices that delivers a tangy, savory, and slightly spicy kick.",
    price: "₹5",
    category: "Chips",
    subcategory: "classic",
    image: "/images/products/magic-masala.png",
    comingSoon: false,
  },
  {
    id: 4,
    name: "Tangy Tomato Chips",
    description:
      "Bursting with the zesty and sweet-sour taste of ripe tomatoes, this flavor offers a delightful tang that's refreshing.",
    price: "₹5",
    category: "Chips",
    subcategory: "classic",
    image: "/images/products/tangy-tomato.png",
    comingSoon: false,
  },

  // Extruded Snacks Category
  {
    id: 6,
    name: "Rings",
    description:
      "These are fun, ring-shaped snacks with a zesty and tangy tomato flavor. They offer a delightful crunch for all ages.",
    price: "₹5",
    category: "Fryums",
    subcategory: "rings",
    image: "/images/products/rings.png",
    comingSoon: false,
  },

  // Snacks Category
  {
    id: 7,
    name: "Pani Puri",
    description:
      'This snack offers the exciting and spicy taste of "Bambaiya Style" Pani Puri in a crunchy, ready-to-eat format.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/panipuri.png",
    comingSoon: false,
  },
  {
    id: 9,
    name: "Katori (Masala Munch)",
    description:
      'These are delightful, crispy, katori-shaped snacks with a savory "Masala Munch" flavor. They offer a unique and fun munching experience.',
    price: "₹5",
    category: "Fryums",
    subcategory: "corn",
    image: "/images/products/katori.png",
    comingSoon: false,
  },
  {
    id: 10,
    name: "Timer",
    description:
      'This is a fun snack designed to appeal to kids, featuring a playful "Timer" theme. The snack itself appears to be a crunchy, savory bite.',
    price: "₹5",
    category: "Fryums",
    subcategory: "wheat",
    image: "/images/products/timer.png",
    comingSoon: false,
  },
  {
    id: 11,
    name: "Spring Roll",
    description:
      'This is a snack featuring a unique "Spring Roll" shape and a "Wow! Masala" flavor.',
    price: "₹5",
    category: "Fryums",
    subcategory: "wheat",
    image: "/images/products/spring-roll.png",
    comingSoon: false,
  },
  {
    id: 12,
    name: "Palak Paneer",
    description:
      'This snack offers a unique "Crunchy Taste" with the distinct flavor of Palak Paneer.',
    price: "₹5",
    category: "Fryums",
    subcategory: "wheat",
    image: "/images/products/palak-paneer.png",
    comingSoon: false,
  },
  {
    id: 13,
    name: "Golu Molu",
    description:
      'This snack features a "tasty Masala" flavor and comes in a fun, cylindrical shape, appealing to those who enjoy crunchy bites.',
    price: "₹5",
    category: "Fryums",
    subcategory: "corn",
    image: "/images/products/golu-molu.png",
    comingSoon: false,
  },
  {
    id: 14,
    name: "Noodles",
    description:
      'These noodles are there to help you "Crunch your worries away!" They offer a quick and tasty meal or snack option.',
    price: "₹5",
    category: "Fryums",
    subcategory: "wheat",
    image: "/images/products/noodles.png",
    comingSoon: false,
  },
  {
    id: 15,
    name: "Chinese Pasta",
    description:
      'This snack offers "Instant Happiness" with its unique Chinese pasta shape and flavor. It\'s a crunchy and savory.',
    price: "₹5",
    category: "Fryums",
    subcategory: "pasta",
    image: "/images/products/chinese-pasta.png",
    comingSoon: false,
  },
  {
    id: 16,
    name: "Fingers",
    description:
      'These are "extra delicious" finger-shaped snacks, offering a "Real Taste" that you won\'t want to miss.',
    price: "₹5",
    category: "Fryums",
    subcategory: "corn",
    image: "/images/products/fingers.png",
    comingSoon: false,
  },
  {
    id: 17,
    name: "Karare",
    description:
      'These are "the original Party Starter" snacks, featuring a "Magic Masala Twist" flavor. They offer a unique, crunchy texture, making them fun treat.',
    price: "₹5",
    category: "Fryums",
    subcategory: "corn",
    image: "/images/products/karare.png",
    comingSoon: false,
  },
  {
    id: 18,
    name: "3D Twister",
    description:
      'These are "Pizza-Flavoured Crunchy Bites!" that come in a unique 3D shape, adding a fun twist to your snacking experience. Each pack has a FREE GIFT INSIDE.',
    price: "₹5",
    category: "Fryums",
    subcategory: "corn",
    image: "/images/products/3d-twister.png",
    comingSoon: false,
  },

  // Namkeen Category
  {
    id: 19,
    name: "Bhel Mudhi",
    description:
      "This namkeen offers the popular taste of Bhel Mudhi with a delicious masala flavor. It's a crunchy and savory snack.",
    price: "₹5",
    category: "Namkeen",
    subcategory: "mix",
    image: "/images/products/bhel-mudhi.png",
    comingSoon: false,
  },
  {
    id: 20,
    name: "All In One",
    description:
      'This namkeen mix is described as "Our all time favourite," offering a diverse blend of savory ingredients.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "mix",
    image: "/images/products/all-in-one.png",
    comingSoon: false,
  },
  {
    id: 21,
    name: "Aloo Bhujia",
    description:
      'This is "Our all time favourite" savory snack, consisting of crispy, noodle-like strands made from potato and gram flour.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/aloo-bhujiya.png",
    comingSoon: false,
  },
  {
    id: 22,
    name: "Badam Pakoda",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crunchy peanuts coated in a savory, spiced batter.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/badam-pakoda.png",
    comingSoon: false,
  },
  {
    id: 23,
    name: "Chana Jor Garam",
    description:
      'This snack offers "Crackling Goodness in Every Bite" with its "Tasty Crunchy Chatpata Chataka" flavor.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/chana-jor-garam.png",
    comingSoon: false,
  },
  {
    id: 24,
    name: "Moong Dal",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy and savory fried moong dal (split green gram).',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/moong-dal.png",
    comingSoon: false,
  },
  {
    id: 25,
    name: "Chana Dal",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy and savory fried chana dal (split chickpeas).',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/chana-dal.png",
    comingSoon: false,
  },
  {
    id: 26,
    name: "Hara Matar",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy and savory fried green peas.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/hara-matar.png",
    comingSoon: false,
  },
  {
    id: 27,
    name: "Navratan Mixture",
    description:
      'This namkeen is hailed as "Our all time Favourite," offering a rich and diverse blend of nine (Navratan) different savory ingredients.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "mix",
    image: "/images/products/navratan-mixture.png",
    comingSoon: false,
  },
  {
    id: 28,
    name: "Punjabi Tadka",
    description:
      'This namkeen is described as "Our all time Favourite," offering the bold and authentic flavors of Punjabi Tadka.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/punjabi-tadka.png",
    comingSoon: false,
  },
  {
    id: 29,
    name: "Chiwda Fry",
    description:
      'This namkeen is a "Crunchy Yum" mixture that will "ask you more." It\'s a savory blend of peanuts and a tangy assortment of cereals, pulses and more.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "mix",
    image: "/images/products/chiwda-fry.png",
    comingSoon: false,
  },
  {
    id: 30,
    name: "Gathiya",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy, savory strands of Gathiya. It\'s a popular and classic Indian snack.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/gathiya.png",
    comingSoon: false,
  },
  {
    id: 31,
    name: "Hing Jeera Chana",
    description:
      'This namkeen is described as "Our all time Favourite," featuring roasted or fried chickpeas (chana) seasoned with the aromatic flavors of hing and jeera.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/hing-jeera-chana.png",
    comingSoon: false,
  },
  {
    id: 32,
    name: "Salted Peanut",
    description:
      'This namkeen is described as "Our all time Favourite," featuring perfectly roasted and salted peanuts. It\'s a classic, simple, and satisfying snack.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "traditional",
    image: "/images/products/salted-peanuts.png",
    comingSoon: false,
  },
  {
    id: 33,
    name: "Ratlami Sev",
    description:
      'This namkeen is described as "Our all time Favourite," offering the authentic and spicy taste of Ratlami Sev.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/ratlami-sev.png",
    comingSoon: false,
  },
  {
    id: 34,
    name: "All In One Medium",
    description:
      'This namkeen is described as "Our all time Favourite," offering the authentic and spicy taste of Ratlami Sev.',
    price: "₹30",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/all-in-one-30.png",
    comingSoon: false,
  },
    {
    id: 35,
    name: "All In One Large",
    description:
      'This namkeen is described as "Our all time Favourite," offering the authentic and spicy taste of Ratlami Sev.',
    price: "₹100",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/all-in-one-100.png",
    comingSoon: false,
  },
  {
    id: 36,
    name: "Cream & Onion Chips Large",
    description:
      "A popular and creamy flavor combination that blends the mild sweetness of onion with a rich, smooth creaminess.",
    price: "₹10",
    category: "Chips",
    subcategory: "classic",
    image: "/images/products/cream-and-onion-10.png",
    comingSoon: false,
  },
  {
    id: 37,
    name: "Nimbu Bhujia",
    description:
      "This namkeen is a thin, crispy sev flavored with a zesty and tangy lemon (nimbu) and bhujia seasoning.",
    price: "₹5",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/nimbu-bhujia.png",
    comingSoon: false,
  },
  {
    id: 38,
    name: "Papdi",
    description:
      'This namkeen is the "SNACK TIME KA HERO," featuring crispy and savory papdi (fried dough wafers).',
    price: "₹5",
    category: "Namkeen",
    subcategory: "papdi",
    image: "/images/products/papdi.png",
    comingSoon: false,
  },
  {
    id: 39,
    name: "Paneer Bhujia",
    description:
      "This namkeen brings the rich, savory flavor of paneer bhujia to a crunchy, ready-to-eat snack.",
    price: "₹5",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/paneer-bhujia.png",
    comingSoon: false,
  },
  {
    id: 40,
    name: "Bhujia",
    description:
      'This bhujia is described as "A Perfect Blend of Salty, Spicy and Tangy," offering a delicious and balanced flavor profile.',
    price: "₹5",
    category: "Namkeen",
    subcategory: "bhujia",
    image: "/images/products/bhujia.png",
    comingSoon: false,
  },
]

const categoryStructure = {
  Namkeen: {
    label: "Namkeen",
    subcategories: {
      mix: "Mix Varieties",
      bhujia: "Bhujia",
      traditional: "Traditional",
    },
  },
  Chips: {
    label: "Chips",
    subcategories: {
      rings: "Rings",
      pasta: "Pasta Chips",
      classic: "Classic Chips",
    },
  },
  Fryums: {
    label: "Fryums",
    subcategories: {
      corn: "Corn Based",
      rice: "Rice Based",
      wheat: "Wheat Based",
      rings: "Rings",
      pasta: "Pasta Chips",
    },
  },
}

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
  product: { name: string; image: string; price: string; description: string }
  index: number
  onClick: () => void
}) => {
  return (
    <div className="relative flex flex-col items-center gap-4 mb-4">
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

      <div>
        <p className="text-center mb-2">Price: {product.price}</p>
        <p className="text-justify text-muted-foreground px-6">{product.description}</p>
      </div>
    </div>
  )
}


export default function ProductPage({category} : any) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(category)
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [confetti, setConfetti] = useState(false)

  const currentProducts = products.filter((product) => !product.comingSoon)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    triggerConfetti()
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

  const bannerData = {
    bg: "/images/bg.png",
    image1: "/images/banners/products/left.png",
    image2: "/images/banners/products/right.png"
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>

      {/* Hero Section */}
      <HeroSection banner={bannerData} />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3 items-center">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Chips">Chips</SelectItem>
                    <SelectItem value="Namkeen">Namkeen</SelectItem>
                    <SelectItem value="Fryums">Fryums</SelectItem>
                  </SelectContent>
                </Select>

                {selectedCategory !== "all" && (
                  <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {Object.entries(getSubcategories()).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="capitalize">
                    {selectedCategory}
                  </Badge>
                )}
                {selectedSubcategory !== "all" && (
                  <Badge variant="secondary" className="capitalize">
                    {getSubcategories()[selectedSubcategory]}
                  </Badge>
                )}
                {searchTerm && <Badge variant="secondary">Search: {searchTerm}</Badge>}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-600 hover:text-red-700">
                  <X className="w-3 h-3 mr-1" />
                  Clear all
                </Button>
              </div>
            )}

            <div className="text-sm text-gray-600">
              Showing {filteredAndSortedProducts().length} of {currentProducts.length} products
            </div>
          </div>
        </div>
      </section>

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
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm bg-red-50 border-red-200">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  🔥
                </motion.span>
                TASTY TREATS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                Our Delicious Range Of Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular snacks that customers love. Quality and taste guaranteed in every bite!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {filteredAndSortedProducts().map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <ProductCircle product={product} index={index} onClick={() => handleProductClick(product)} />
              </motion.div>
            ))}
          </div>

          {/* No products found message */}
          {filteredAndSortedProducts().length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
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
