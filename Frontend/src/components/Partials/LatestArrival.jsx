import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

const products = [
    {
        title: 'ALPINESTARS BIONIC PLUS',
        content:"Elevate your riding experience with the Alpinestars Bionic Plus protection system. Featuring advanced impact protection technology, breathable mesh construction, and ergonomic design for maximum comfort and safety on every ride.",
        uri:'/shop',
        image:'/assets/latest1.png'
    },
    {
        title: 'KTM NXR2 HELMET',
        content:"Experience ultimate protection and comfort with our premium motorcycle helmet. Engineered with advanced materials and innovative design for superior performance.",
        uri:'/shop',
        image:'/assets/latest2.jpg'
    }
]

const LatestArrival = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#F2F2F2] mb-12">Latest Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-2/3 mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-lg pt-0 transition-shadow duration-300">
              <div className="relative bg-white shadow-lg shadow-black h-[250px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#F2F2F2]">{product.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  <div className={`${!expandedCards[index] ? 'line-clamp-3' : ''}`}>
                    {product.content}
                  </div>
                  <Button 
                    variant="link" 
                    className="text-[#FF6F00] hover:text-[#FF8F00] p-0 h-auto mt-2"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedCards[index] ? 'Show Less' : 'Read More'}
                  </Button>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  className="w-full bg-[#FF6F00] hover:bg-[#FF8F00] text-white"
                  onClick={() => window.location.href = product.uri}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default LatestArrival