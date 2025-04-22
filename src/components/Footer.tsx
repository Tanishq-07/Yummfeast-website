"use client"

import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import Link from "./Link"

interface FooterProps {
  navigateTo: (page: string) => void
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="Yummfeast Logo" className="h-16 mr-2" />
            </div>
            <p className="text-blue-200 mb-4">
              Snack with a Smile: Bringing Joy through Delicious Chips, Fryums, and Flavorful Namkeens!
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-blue-800" asChild>
                <Link href="https://www.instagram.com/yummfeast.in/" external>
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-blue-800" asChild>
                <Link href="https://www.facebook.com/yummfeast" external>
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-blue-800" asChild>
                <Link href="https://twitter.com/yummfeast" external>
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("home")
                  }}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("about")
                  }}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("product")
                  }}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    navigateTo("contact")
                  }}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-blue-200">
              <p className="mb-2">Ambey Food Products ,Plot no 55 Industrial Area Donar</p>
              <p className="mb-2">Darbhanga, Bihar, India</p>
              <p className="mb-2">Email: customercare@yummfeast.in</p>
              <p>Phone: 93344 69490</p>
            </address>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Yummfeast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
