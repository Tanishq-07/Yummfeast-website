"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function QueryPage() {
  const [queryType, setQueryType] = useState("dealership")

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Business Opportunities</h1>
            <p className="text-xl text-muted-foreground">
              Explore partnership opportunities with Yummfeast and become part of our growing network.
            </p>
          </div>
        </div>
      </section>

      {/* Query Type Selector */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="dealership" onValueChange={setQueryType}>
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="dealership">Dealership</TabsTrigger>
              <TabsTrigger value="distributorship">Distributorship</TabsTrigger>
              <TabsTrigger value="super">Super Stockist</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Query Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {queryType === "dealership" && "Dealership Inquiry"}
                    {queryType === "distributorship" && "Distributorship Inquiry"}
                    {queryType === "super" && "Super Stockist Inquiry"}
                  </h2>
                  <p className="text-muted-foreground">
                    {queryType === "dealership" &&
                      "Fill out the form below to inquire about becoming an authorized dealer for Yummfeast products in your region."}
                    {queryType === "distributorship" &&
                      "Interested in distributing Yummfeast products? Complete this form to start the conversation."}
                    {queryType === "super" &&
                      "Apply to become a super stockist and enjoy exclusive benefits and higher margins."}
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.alert("Thank you for your inquiry! Our team will contact you shortly.")
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
                    <Input id="phone" placeholder="+91 98765 43210" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Business Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location/Region</Label>
                    <Input id="location" placeholder="City, State, Country" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Business Experience (Years)</Label>
                    <select
                      id="experience"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">More than 10 years</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your business and why you're interested in partnering with Yummfeast..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {queryType === "dealership" && "Dealership Benefits"}
              {queryType === "distributorship" && "Distributorship Benefits"}
              {queryType === "super" && "Super Stockist Benefits"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our network and enjoy these exclusive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title:
                  queryType === "dealership"
                    ? "Exclusive Territory"
                    : queryType === "distributorship"
                      ? "Wide Product Range"
                      : "Higher Margins",
                description:
                  queryType === "dealership"
                    ? "Operate with exclusive rights in your designated territory without competition from other dealers."
                    : queryType === "distributorship"
                      ? "Access to our complete product catalog with the ability to serve diverse customer needs."
                      : "Enjoy higher profit margins compared to standard dealers and distributors.",
              },
              {
                title: "Marketing Support",
                description:
                  "Receive comprehensive marketing materials, promotional support, and co-branding opportunities.",
              },
              {
                title:
                  queryType === "dealership"
                    ? "Training Programs"
                    : queryType === "distributorship"
                      ? "Logistics Support"
                      : "Priority Stock",
                description:
                  queryType === "dealership"
                    ? "Comprehensive product and sales training to help you maximize your business potential."
                    : queryType === "distributorship"
                      ? "Efficient logistics and delivery systems to ensure timely fulfillment of orders."
                      : "Get priority access to new products and never run out of stock even during high demand.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
