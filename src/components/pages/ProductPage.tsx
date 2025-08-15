"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PartyPopper, Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import CustomButton from "@/components/ui/custom-button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = [
  // Chips Category
  {
    id: 1,
    name: "Classic Salted Chips",
    description:
      "The timeless and universally loved flavor, offering the pure, crispy taste of perfectly salted potatoes. It's simple, satisfying, and a go-to for traditional chip lovers.",
    price: "₹5",
    category: "chips",
    subcategory: "classic",
    image: "/images/products/classic.png",
    comingSoon: false,
  },
  {
    id: 2,
    name: "Cream & Onion Chips",
    description:
      "A popular and creamy flavor combination that blends the mild sweetness of onion with a rich, smooth creaminess, creating a perfectly balanced and savory experience.",
    price: "₹5",
    category: "chips",
    subcategory: "classic",
    image: "/images/chips2.png",
    comingSoon: false,
  },
  {
    id: 3,
    name: "Magic Masala Chips",
    description:
      "A vibrant and exciting blend of Indian spices that delivers a tangy, savory, and slightly spicy kick. This flavor is designed to ignite your taste buds with every crunchy bite.",
    price: "₹5",
    category: "chips",
    subcategory: "classic",
    image: "/images/chips3.png",
    comingSoon: false,
  },
  {
    id: 4,
    name: "Tangy Tomato Chips",
    description:
      "Bursting with the zesty and sweet-sour taste of ripe tomatoes, this flavor offers a delightful tang that's both refreshing and addictive.",
    price: "₹5",
    category: "chips",
    subcategory: "classic",
    image: "/images/chips4.png",
    comingSoon: false,
  },
  {
    id: 5,
    name: "Cream & Onion Chips (₹10)",
    description:
      "A popular and creamy flavor combination that blends the mild sweetness of onion with a rich, smooth creaminess, creating a perfectly balanced and savory experience.",
    price: "₹10",
    category: "chips",
    subcategory: "classic",
    image: "/images/chips5.png",
    comingSoon: false,
  },

  // Extruded Snacks Category
  {
    id: 6,
    name: "Rings",
    description:
      "These are fun, ring-shaped snacks with a zesty and tangy tomato flavor. They offer a delightful crunch and are designed to be an enjoyable treat for all ages. Each pack also comes with a FREE GIFT INSIDE, adding an element of surprise and excitement.",
    price: "₹5",
    category: "fryums",
    subcategory: "rings",
    image: "/images/rings.png",
    comingSoon: false,
  },

  // Snacks Category
  {
    id: 7,
    name: "Pani Puri",
    description:
      'This snack offers the exciting and spicy taste of "Bambaiya Style" Pani Puri in a crunchy, ready-to-eat format. It\'s designed to bring the vibrant street food experience to a convenient packet. As an added bonus, each pack includes a FREE JUMPING BALL INSIDE, making it a fun treat for kids.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/panipuri.png",
    comingSoon: false,
  },
  {
    id: 8,
    name: "Katori (Tangy Tomato)",
    description:
      "These are delightful, crispy, katori-shaped snacks bursting with a tangy tomato flavor. They offer a unique and fun munching experience, perfect for a quick and flavorful treat.",
    price: "₹5",
    category: "fryums",
    subcategory: "corn",
    image: "/images/katori1.png",
    comingSoon: false,
  },
  {
    id: 9,
    name: "Katori (Masala Munch)",
    description:
      'These are delightful, crispy, katori-shaped snacks with a savory "Masala Munch" flavor. They offer a unique and fun munching experience, perfect for a quick and flavorful treat. The vibrant green packaging makes it easily recognizable.',
    price: "₹5",
    category: "fryums",
    subcategory: "corn",
    image: "/images/katori2.png",
    comingSoon: false,
  },
  {
    id: 10,
    name: "Timer",
    description:
      'This is a fun snack designed to appeal to kids, featuring a playful "Timer" theme. The snack itself appears to be a crunchy, savory bite. A key highlight is the FREE Watch Inside each pack, adding an exciting surprise element for young consumers.',
    price: "₹5",
    category: "fryums",
    subcategory: "wheat",
    image: "/images/timer.png",
    comingSoon: false,
  },
  {
    id: 11,
    name: "Spring Roll",
    description:
      'This is a snack featuring a unique "Spring Roll" shape and a "Wow! Masala" flavor. It\'s designed to bring an exciting and tasty crunch to your snack time.',
    price: "₹5",
    category: "fryums",
    subcategory: "wheat",
    image: "/images/springroll.png",
    comingSoon: false,
  },
  {
    id: 12,
    name: "Palak Paneer",
    description:
      'This snack offers a unique "Crunchy Taste" with the distinct flavor of Palak Paneer. It\'s a savory snack that brings a popular Indian dish into a convenient, ready-to-eat form.',
    price: "₹5",
    category: "fryums",
    subcategory: "wheat",
    image: "/images/palakpaneer.png",
    comingSoon: false,
  },
  {
    id: 13,
    name: "Golu Molu",
    description:
      'This snack features a "tasty Masala" flavor and comes in a fun, cylindrical shape, appealing to those who enjoy a savory and crunchy bite. The packaging is a vibrant blue, making it easily noticeable.',
    price: "₹5",
    category: "fryums",
    subcategory: "corn",
    image: "/images/golumolu.png",
    comingSoon: false,
  },
  {
    id: 14,
    name: "Noodles",
    description:
      'These noodles are there to help you "Crunch your worries away!" They offer a quick and tasty meal or snack option, likely with a savory flavor profile. The packaging features a cheerful child enjoying noodles, emphasizing their appeal to a younger audience or for a joyful meal.',
    price: "₹5",
    category: "fryums",
    subcategory: "wheat",
    image: "/images/noodles.png",
    comingSoon: false,
  },
  {
    id: 15,
    name: "Chinese Pasta",
    description:
      'This snack offers "Instant Happiness" with its unique Chinese pasta shape and flavor. It\'s a crunchy, savory treat designed to bring a fun twist to snack time. Each pack also includes FREE TOMATO KETCHUP INSIDE.',
    price: "₹5",
    category: "fryums",
    subcategory: "pasta",
    image: "/images/products/chinese-pasta.png",
    comingSoon: false,
  },
  {
    id: 16,
    name: "Finger",
    description:
      'These are "extra delicious" finger-shaped snacks, offering a "Real Taste" that you won\'t want to miss. They are designed for a satisfying crunch and a flavorful experience.',
    price: "₹5",
    category: "fryums",
    subcategory: "corn",
    image: "/images/finger.png",
    comingSoon: false,
  },
  {
    id: 17,
    name: "Karare",
    description:
      'These are "the original Party Starter" snacks, featuring a "Magic Masala Twist" flavor. They offer a unique, crunchy texture, making them a fun and flavorful addition to any gathering or as a standalone treat.',
    price: "₹5",
    category: "fryums",
    subcategory: "corn",
    image: "/images/karare.png",
    comingSoon: false,
  },
  {
    id: 18,
    name: "3D Twister",
    description:
      'These are "Pizza-Flavoured Crunchy Bites!" that come in a unique 3D shape, adding a fun twist to your snacking experience. Each pack also contains a FREE GIFT INSIDE, making it an exciting treat.',
    price: "₹5",
    category: "fryums",
    subcategory: "corn",
    image: "/images/products/twister.png",
    comingSoon: false,
  },

  // Namkeen Category
  {
    id: 19,
    name: "Bhel Mudhi",
    description:
      "This namkeen offers the popular taste of Bhel Mudhi with a delicious masala flavor. It's a crunchy and savory snack, perfect for those who enjoy the classic street food experience in a convenient packet. The packaging features a vibrant design.",
    price: "₹5",
    category: "namkeen",
    subcategory: "mix",
    image: "/images/products/bhel-mudhi.png",
    comingSoon: false,
  },
  {
    id: 20,
    name: "All in One",
    description:
      'This namkeen mix is described as "Our all time favourite," offering a diverse blend of savory ingredients. It typically includes a variety of crunchy elements like fried lentils, nuts, sev, and other crispy bits.',
    price: "₹5",
    category: "namkeen",
    subcategory: "mix",
    image: "/images/products/all-in-one.png",
    comingSoon: false,
  },
  {
    id: 21,
    name: "Aloo Bhujia",
    description:
      'This is "Our all time favourite" savory snack, consisting of crispy, noodle-like strands made from potato and gram flour, seasoned with a delicious blend of spices. It\'s a classic Indian namkeen, perfect for a crunchy treat.',
    price: "₹5",
    category: "namkeen",
    subcategory: "bhujia",
    image: "/images/products/aloo-bhujia.png",
    comingSoon: false,
  },
  {
    id: 22,
    name: "Badam Pakoda",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crunchy peanuts coated in a savory, spiced batter. It\'s a popular and delicious snack, perfect for those who enjoy a flavorful and satisfying crunch.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/products/badam-pakoda.png",
    comingSoon: false,
  },
  {
    id: 23,
    name: "Chana Jor Garam",
    description:
      'This snack offers "Crackling Goodness in Every Bite" with its "Tasty Crunchy Chatpata Chataka" flavor. It\'s a savory and spicy treat made from flattened chickpeas, perfect for those who enjoy a zesty and crunchy snack.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/chanajorgaram.png",
    comingSoon: false,
  },
  {
    id: 24,
    name: "Moong Dal",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy and savory fried moong dal (split green gram). It\'s a popular and classic Indian snack, known for its light texture and delicious taste, perfect for a quick munch.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/moongdal.png",
    comingSoon: false,
  },
  {
    id: 25,
    name: "Chana Dal",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy and savory fried chana dal (split chickpeas). It\'s a popular and classic Indian snack, known for its satisfying crunch and delicious taste, perfect for a quick munch.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/products/chana-dal.png",
    comingSoon: false,
  },
  {
    id: 26,
    name: "Hara Matar",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy and savory fried green peas. It\'s a popular and classic Indian snack, known for its distinct taste and satisfying crunch, perfect for a quick munch.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/haramatar.png",
    comingSoon: false,
  },
  {
    id: 27,
    name: "Navratan Mixture",
    description:
      'This namkeen is hailed as "Our all time Favourite," offering a rich and diverse blend of nine (Navratan) different savory ingredients. It typically includes a variety of crispy elements like fried lentils, nuts, sev, and other flavorful components, providing a satisfying mix of textures and tastes in every bite.',
    price: "₹5",
    category: "namkeen",
    subcategory: "mix",
    image: "/images/navratanmixture.png",
    comingSoon: false,
  },
  {
    id: 28,
    name: "Punjabi Tadka",
    description:
      'This namkeen is described as "Our all time Favourite," offering the bold and authentic flavors of Punjabi Tadka. It features crispy, savory strands, perfect for those who enjoy a zesty and flavorful snack with a distinct Indian spice profile.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/punjabitadka.png",
    comingSoon: false,
  },
  {
    id: 29,
    name: "Chiwda Fry",
    description:
      'This namkeen is a "Crunchy Yum" mixture that will "ask you more." It\'s a savory blend of peanuts and a tangy assortment of cereals, pulses, nuts, oil, and a hint of sugar, creating a balanced and satisfying snack experience.',
    price: "₹5",
    category: "namkeen",
    subcategory: "mix",
    image: "/images/chiwdafry.png",
    comingSoon: false,
  },
  {
    id: 30,
    name: "Gathiya",
    description:
      'This namkeen is described as "Our all time Favourite," featuring crispy, savory strands of Gathiya. It\'s a popular and classic Indian snack, known for its distinct texture and delicious taste, perfect for a quick munch.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/gathiya.png",
    comingSoon: false,
  },
  {
    id: 31,
    name: "Hing Jeera Chana",
    description:
      'This namkeen is described as "Our all time Favourite," featuring roasted or fried chickpeas (chana) seasoned with the aromatic flavors of hing (asafoetida) and jeera (cumin). It\'s a savory, crunchy, and traditional Indian snack known for its distinctive taste.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/hingjeerachana.png",
    comingSoon: false,
  },
  {
    id: 32,
    name: "Salted Peanut",
    description:
      'This namkeen is described as "Our all time Favourite," featuring perfectly roasted and salted peanuts. It\'s a classic, simple, and satisfying snack, ideal for a quick protein boost or a crunchy munch anytime.',
    price: "₹5",
    category: "namkeen",
    subcategory: "traditional",
    image: "/images/saltedpeanut.png",
    comingSoon: false,
  },
  {
    id: 33,
    name: "Ratlami Sev",
    description:
      'This namkeen is described as "Our all time Favourite," offering the authentic and spicy taste of Ratlami Sev. It consists of crispy, thick strands of gram flour noodles, seasoned with a distinct blend of spices, making it a flavorful and crunchy snack.',
    price: "₹5",
    category: "namkeen",
    subcategory: "bhujia",
    image: "/images/ratlamitev.png",
    comingSoon: false,
  },
  {
    id: 34,
    name: "Dalmoth",
    description:
      'This namkeen is a rich and savory mix, offering a blend of crunchy ingredients. It\'s a classic Indian snack known for its satisfying texture and flavorful profile, perfect for a hearty munch. The packaging highlights "Quality" as a key attribute.',
    price: "₹10",
    category: "namkeen",
    subcategory: "mix",
    image: "/images/dalmoth.png",
    comingSoon: false,
  },
]

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
        <p className="text-justify text-muted-foreground">{product.description}</p>
      </div>
    </div>
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
                    <SelectItem value="chips">Chips</SelectItem>
                    <SelectItem value="namkeen">Namkeen</SelectItem>
                    <SelectItem value="fryums">Fryums</SelectItem>
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
