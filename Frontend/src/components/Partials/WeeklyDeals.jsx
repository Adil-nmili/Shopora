import { easeIn, motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { StarIcon } from 'lucide-react'


const cards = [
  {
    stars:3,
    image:"/assets/latest2.jpg",
    price: "129.89",
    name:"KTM Helmet"
  },
  {
    stars: 4,
    image: "/assets/bmw-gs.jpg",
    price: "28189.99",
    name: "Mountain Bike"
  },
  {
    stars: 5,
    image: "/assets/Camping-Tent.jpg",
    price: "699.99",
    name: "Camping Tent"
  },
  {
    stars: 4,
    image: "/assets/hiking-boot.jpg",
    price: "149.99",
    name: "Hiking Boots"
  }
]


const WeeklyDeals = () => {
  return (
    <div className="h-[80vh] bg-[url(/assets/mountain-bg.jpg)]  bg-no-repeat bg-cover bg-center bg-fixed relative">
      <div className="absolute top-0 left-0 h-full w-full bg-black/50 p-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-4 font-semibold text-3xl text-[#F2F2F2]"
          >
            DEALS LAST WEEK
          </motion.h1>
          <motion.p
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8, ease:easeIn}}
            className="text-center w-2/3 mx-auto text-gray-300"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpa
          </motion.p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {cards.map((card, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none shadow-md shadow-black">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      size={18} 
                      className={i < card.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48  rounded-lg overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover transition-all duration-300 ease-in  hover:scale-105"
                />
                </div>
                <p className="text-xl font-bold text-white mt-2">${card.price}</p>
                <h3 className="text-lg font-semibold text-white">{card.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyDeals;
