"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "The Art of Snack Making: Behind the Scenes at Yummfeast",
      excerpt: "Discover the journey of innovation and craftsmanship that goes into creating your favorite snacks.",
      date: "April 15, 2023",
      author: "Rajesh Kumar",
      image: "/blog-image1.png",
      category: "Product",
    },
    {
      id: 2,
      title: "Sustainability in Snack Production: Our Commitment",
      excerpt: "Learn about our initiatives to reduce environmental impact and create sustainable snacks.",
      date: "March 22, 2023",
      author: "Sunita Sharma",
      image: "/blog-image2.png",
      category: "Company",
    },
    {
      id: 3,
      title: "Customer Success Story: How Yummfeast Transformed a Local Store",
      excerpt: "Read the inspiring story of how our products helped a small retailer grow their business.",
      date: "February 10, 2023",
      author: "Vikram Singh",
      image: "/blog-image3.png",
      category: "Case Study",
    },
    {
      id: 4,
      title: "Snack Industry Trends to Watch in 2023",
      excerpt: "Our experts analyze the emerging trends that will shape the snack industry in the coming year.",
      date: "January 5, 2023",
      author: "Priya Patel",
      image: "/blog-image4.png",
      category: "Industry",
    },
    {
      id: 5,
      title: "Behind the Scenes: The Making of Our New Flavor",
      excerpt: "Get an exclusive look at the development process of our newest product innovation.",
      date: "December 12, 2022",
      author: "Amit Verma",
      image: "/blog-image5.png",
      category: "Product",
    },
    {
      id: 6,
      title: "Meet the Team: Spotlight on Our Quality Control Department",
      excerpt: "Learn about the dedicated individuals who ensure every Yummfeast product meets our high standards.",
      date: "November 28, 2022",
      author: "Neha Gupta",
      image: "/blog-image6.png",
      category: "Company",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">Insights, updates, and stories from our team and community.</p>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-red-600 font-semibold mb-2">FEATURED POST</div>
              <h2 className="text-3xl font-bold mb-4">{blogs[0].title}</h2>
              <p className="text-muted-foreground mb-4">{blogs[0].excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>{blogs[0].date}</span>
                <span className="mx-2">•</span>
                <span>By {blogs[0].author}</span>
                <span className="mx-2">•</span>
                <span>{blogs[0].category}</span>
              </div>
              <Button>Read Full Article</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img
                src={blogs[0].image || "/placeholder.svg"}
                alt={blogs[0].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with our latest news, insights, and stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="text-xs text-red-600 font-semibold mb-2">{blog.category.toUpperCase()}</div>
                    <h3 className="font-semibold text-xl mb-2">{blog.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{blog.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {blog.author}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with our latest articles, product announcements, and exclusive offers.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault()
                window.alert("Thank you for subscribing to our newsletter!")
              }}
            >
              <Input placeholder="Enter your email" className="flex-grow" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
