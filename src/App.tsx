"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProductPage from "./components/pages/ProductPage";
import TestimonialPage from "./components/pages/TestimonialPage";
import InfraPage from "./components/pages/InfraPage";
import GalleryPage from "./components/pages/GalleryPage";
import FeedbackPage from "./components/pages/FeedbackPage";
import QueryPage from "./components/pages/QueryPage";
import BlogsPage from "./components/pages/BlogsPage";
import CareerPage from "./components/pages/CareerPage";
import ContactPage from "./components/pages/ContactPage";
import { AccessRestriction } from "./components/access-restriction";
import { useScroll, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accessRestricted, setAccessRestricted] = useState(true);

  // Function to handle page navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "about":
        return <AboutPage />;
      case "product":
        return <ProductPage />;
      case "testimonial":
        return <TestimonialPage />;
      case "infra":
        return <InfraPage />;
      case "gallery":
        return <GalleryPage />;
      case "feedback":
        return <FeedbackPage />;
      case "query":
        return <QueryPage />;
      case "blogs":
        return <BlogsPage />;
      case "career":
        return <CareerPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #facc15, #ec4899, #ef4444)",
          backgroundSize: "200% 100%",
          backgroundPosition: "0% 50%",
          zIndex: 9999,
          transformOrigin: "left",
          scaleX: scrollYProgress,
          animation: "scrollGlow 2s linear infinite",
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        navigateTo={navigateTo}
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <ScrollProgressBar />

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
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
          transition: { duration: 0.3 },
        }}
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          background: "linear-gradient(145deg, #ffffff, #f1f1f1)",
          color: "#e11d48", // Tailwind red-600
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 4px rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
          zIndex: 100,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <ChevronDown style={{ width: "22px", height: "22px" }} />
      </motion.button>

      {/* {accessRestricted && (
        <AccessRestriction 
          message="Ask the developers to increase to Grant Access"
          contactEmail="payments@yourcompany.com"
        />
      )} */}
    </div>
  );
}
