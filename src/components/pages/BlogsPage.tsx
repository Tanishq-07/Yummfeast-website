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
      image: "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/481055033_1045649254260705_9117953247510428793_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pryiB5BnUQcQ7kNvwFb5dH7&_nc_oc=AdmkXdabI2L_Ksrx5ciYWqmYBzakHB5GBqV9kUkN_aIXaiGUuQds1tpQsfd-VpA2q0TAyq1QpwWXEDATfs0IFzEY&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=iPh2e94TX5mH55XYhZciaQ&oh=00_AfHSdSOswxRGnewZD1gutRUZtpyf4rDeIzBzcri9wIrfUQ&oe=680DAD40",
      category: "Product",
    },
    {
      id: 2,
      title: "Sustainability in Snack Production: Our Commitment",
      excerpt: "Learn about our initiatives to reduce environmental impact and create sustainable snacks.",
      date: "March 22, 2023",
      author: "Sunita Sharma",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/480712951_1039552761537021_4915098758221941784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XIC2QC4NJLYQ7kNvwHNdwNy&_nc_oc=AdlGPLtux-kjKcKzXNTzuCeinrrH0aAo8Sv7EuwrdnZ4Gn_h74H-T2UEmpUa3Kv5FDYArvpsBgjJXaDl3kreYS3d&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=GFXBsppUHbQybU5VR_6zPw&oh=00_AfHfunKUKekDKaxEQMhMxoBYu7XP1JWjsh0QGk4r5x-NbA&oe=680DA083",
      category: "Company",
    },
    {
      id: 3,
      title: "Customer Success Story: How Yummfeast Transformed a Local Store",
      excerpt: "Read the inspiring story of how our products helped a small retailer grow their business.",
      date: "February 10, 2023",
      author: "Vikram Singh",
      image: "https://scontent-bom2-1.xx.fbcdn.net/v/t39.30808-6/356712378_830736701766404_8592203015337844435_n.png?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ANmzWSTYHW8Q7kNvwHC_ERv&_nc_oc=Adk6YITZWgkJM4HszF3SlqU_uWbojC2GaH_jDNEu-kkj80vUGYa9eangCJqAG47aOTSbY08LBPnzjdcrZU5WuryQ&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=cJWHen5MlUxYnlENKPOLWA&oh=00_AfEPHMod-OPavk4Dyohz9HMNwP_m-4Uwtkhj3b6OMEEHgA&oe=680D7E90",
      category: "Case Study",
    },
    {
      id: 4,
      title: "Snack Industry Trends to Watch in 2023",
      excerpt: "Our experts analyze the emerging trends that will shape the snack industry in the coming year.",
      date: "January 5, 2023",
      author: "Priya Patel",
      image: "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/476346615_1178343710339033_8404242125842909397_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KFbEuaqe2q8Q7kNvwGYf9YD&_nc_oc=Adn4q6QiLqexCb6ikH45u84OkgtajoEvOJmAPvonPDhDBrewsWCImjjrHATEi9gW4_5rPDOoWVXyJziKXEeVhrwN&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=oWI6vZFRJ0ijMlVzlSoaYg&oh=00_AfGBJx6ShAIILIf8Mo38Tx9bDA6Dg4FJKMe9CiJCF-WArg&oe=680D8368",
      category: "Industry",
    },
    {
      id: 5,
      title: "Behind the Scenes: The Making of Our New Flavor",
      excerpt: "Get an exclusive look at the development process of our newest product innovation.",
      date: "December 12, 2022",
      author: "Amit Verma",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/476153232_1178343723672365_1646294851847929293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dNiavRo919oQ7kNvwHko90r&_nc_oc=AdkMMH7_NgGqO4aYDHVX2mD-nAgM3TfFzbbRCgNT3FEB0PZ6tIy5KHpYcmesvgfGLW9l_wiUwYOBjJ1S2N44og-4&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=w4-c_ddCy-kdOztEbsftVw&oh=00_AfFJ_mYJbz5UOM5kIhPnDbFPtM-KPNy4tkfVxbiU11_jYw&oe=680D88FF",
      category: "Product",
    },
    {
      id: 6,
      title: "Meet the Team: Spotlight on Our Quality Control Department",
      excerpt: "Learn about the dedicated individuals who ensure every Yummfeast product meets our high standards.",
      date: "November 28, 2022",
      author: "Neha Gupta",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/476608050_1178327493673988_8025226139070768140_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1Cv7v1DLJr8Q7kNvwEK946Y&_nc_oc=Adn91CX0Qwe1PAZTxN8a5AJxHA0WvxUyArTMWlRMrIuCtLV-Mm3Yafx5P-SrQmESfaYjpYJ74PYR83FcgoLFS6Y2&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=2pAN856TGKsjBXvI_7fAEg&oh=00_AfEX1_SpQ-19ZFz4xj1GW3w48pIlwjd0W3i_jjW2vnKBpg&oe=680D9215",
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
