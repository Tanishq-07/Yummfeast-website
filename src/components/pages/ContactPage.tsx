"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Support",
                description: "For product inquiries, order status, or general questions.",
                contact: "support@yummfeast.in",
                phone: "+91 98765 43210",
              },
              {
                title: "Sales Department",
                description: "For bulk orders, pricing information, or product availability.",
                contact: "sales@yummfeast.in",
                phone: "+91 98765 43211",
              },
              {
                title: "Business Development",
                description: "For partnership opportunities or business proposals.",
                contact: "business@yummfeast.in",
                phone: "+91 98765 43212",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-3">{info.title}</h3>
                <p className="text-muted-foreground mb-4">{info.description}</p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <a href={`mailto:${info.contact}`} className="text-red-600 hover:underline">
                      {info.contact}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Phone:</span>
                    <a href={`tel:${info.phone}`} className="text-red-600 hover:underline">
                      {info.phone}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.alert("Thank you for your message! We'll get back to you soon.")
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our headquarters or send mail to the address below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img src="/office-map.png" alt="Office Location Map" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl mb-4">Headquarters</h3>
              <address className="not-italic text-muted-foreground space-y-2 mb-6">
                <p>123 Snack Street</p>
                <p>Suite 456</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p>India</p>
              </address>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@yummfeast.in</p>
                </div>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
