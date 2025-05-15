"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Import components
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/pages/HomePage"
import AboutPage from "./components/pages/AboutPage"
import ProductPage from "./components/pages/ProductPage"
import TestimonialPage from "./components/pages/TestimonialPage"
import InfraPage from "./components/pages/InfraPage"
import GalleryPage from "./components/pages/GalleryPage"
import FeedbackPage from "./components/pages/FeedbackPage"
import QueryPage from "./components/pages/QueryPage"
import BlogsPage from "./components/pages/BlogsPage"
import CareerPage from "./components/pages/CareerPage"
import ContactPage from "./components/pages/ContactPage"
import { AccessRestriction } from "./components/access-restriction"

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [accessRestricted, setAccessRestricted] = useState(true)

  // Function to handle page navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />
      case "about":
        return <AboutPage />
      case "product":
        return <ProductPage />
      case "testimonial":
        return <TestimonialPage />
      case "infra":
        return <InfraPage />
      case "gallery":
        return <GalleryPage />
      case "feedback":
        return <FeedbackPage />
      case "query":
        return <QueryPage />
      case "blogs":
        return <BlogsPage />
      case "career":
        return <CareerPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage navigateTo={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header navigateTo={navigateTo} currentPage={currentPage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Footer navigateTo={navigateTo} />

      {/* {accessRestricted && (
        <AccessRestriction 
          message="Ask the developers to increase to Grant Access"
          contactEmail="payments@yourcompany.com"
        />
      )} */}
    </div>
  )
}
