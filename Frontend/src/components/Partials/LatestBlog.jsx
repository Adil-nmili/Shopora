import { easeIn, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const blogs = [
  {
    id: 1,
    title: "Maecenas vulputate",
    image: "/assets/bmw-gs.jpg",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis adipisci corrupti delectus eligendi voluptatibus! Illum in optio suscipit ipsa, fugiat magnam aut sequi cupiditate corporis praesentium consectetur, eveniet expedita cum!LoremLorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis adipisci corrupti delectus eligendi voluptatibus! Illum in optio suscipit ipsa, fugiat magnam aut sequi cupiditate corporis praesentium consectetur, eveniet expedita cum!Lorem",
  },
  {
    id: 2,
    title: "Adventure Awaits",
    image: "/assets/Camping-Tent.jpg",
    content:
      "Discover the thrill of outdoor exploration with our latest camping gear collection. From high-performance tents to essential survival equipment, we've got everything you need for your next wilderness adventure. Experience the perfect blend of comfort and durability in our carefully curated selection of outdoor essentials.",
  },
];

const LatestBlog = () => {
  return (
    <div className="h-[100vh] py-4 flex flex-col">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeIn }}
          className="text-3xl text-[#F2F2F2] font-semibold text-center py-4"
        >
          LASTEST BLOGS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeIn }}
          className="w-2/3 text-center text-gray-300 mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpa
        </motion.p>
      </div>
      <div className="flex-1 flex flex-col gap-8 items-center justify-center container mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative w-full  h-[200px] bg-gray-600">
            <motion.div
              initial={{opacity:0,x:-40}}
              animate={{opacity:1,x:0}}
              transition={{duration:2 , ease:easeIn}}
            className="w-1/3 overflow-hidden h-full rounded-r-2xl">
              <img src={blog.image}  alt={blog.title} className="h-full w-full object-cover " />
            </motion.div>
            <Card className="absolute right-4  top-4 w-2/3  bottom-4 bg-white border-0 rounded-2xl">
              <CardContent className="gap-2 flex flex-col">
                <motion.h3
                  initial={{opacity:0,x:40}}
                  animate={{opacity:1,x:0}}
                  transition={{duration:0.8, ease:easeIn}}
                  className="text-2xl font-semibold"
                >
                  {blog.title}
                </motion.h3>
                <motion.p
                  initial={{opacity:0,x:40}}
                  animate={{opacity:1,x:0}}
                  transition={{duration:0.8, ease:easeIn}}
                  className="text-xs text-gray-800"
                >
                  {blog.content}
                </motion.p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
