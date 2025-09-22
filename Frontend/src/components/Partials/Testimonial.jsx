import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "GDRAGON",
    title: "CEO BMW",
    email: "gdragon@motor.com",
    image: "/assets/bmw-gs.jpg", // Assuming you have this image
    quote: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
  },
  {
    id: 2,
    name: "LIONEL MESSI",
    title: "CEO BMW",
    subTitle: "Gold medalist, Olympic 2015",
    email: "leo@motor.com",
    image: "/assets/asset1.jpg", // Assuming you have this image
    quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam."
  },
  {
    id: 3,
    name: "BRAD PITT",
    title: "CEO BMW",
    subTitle: "Gold medalist, Olympic 2015",
    email: "bradpitt@motor.com",
    image: "/assets/hiking-boot.jpg", // Assuming you have this image
    quote: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum."
  },
  {
    id: 4,
    name: "JENNIE KIM",
    title: "CEO BMW",
    subTitle: "Gold medalist, Olympic 2015",
    email: "jennie@motor.com",
    image: "/assets/latest2.jpg", // Assuming you have this image
    quote: "Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
  }
];

const Testimonial = () => {
  return (
    <div id='testimonial' className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold text-gray-800 relative pb-4"
        >
          TESTIMONIAL
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-yellow-500"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpa
        </motion.p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Testimonial Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <Quote size={48} className="text-yellow-500 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed">
                {testimonials[0].quote}
              </p>
            </div>
            <div className="flex items-center mt-8">
              <img src={testimonials[0].image} alt={testimonials[0].name} className="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{testimonials[0].name}</h3>
                <p className="text-gray-500">{testimonials[0].title}</p>
                <p className="text-gray-500">{testimonials[0].subTitle}</p>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="p-3 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition-colors">
                <ArrowLeft size={24} className="text-gray-700" />
              </button>
              <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <ArrowRight size={24} className="text-gray-700" />
              </button>
            </div>
          </motion.div>

          {/* Smaller Testimonial Cards (Right Column) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                className="bg-[url(/slider/slide3.jpg)] bg-cover p-6 rounded-lg shadow-md   flex flex-col justify-between relative overflow-hidden"
              >
                <div className='w-full h-full absolute top-0 left-0 bg-black/60 z-10-'>
                <div className="flex items-center h-full  gap-4 flex-col-reverse mb-4 justify-center"> 
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{testimonial.name}</h3>
                    <p className="text-gray-300 text-sm">{testimonial.title}</p>
                    {testimonial.subTitle && <p className="text-gray-200 text-sm">{testimonial.subTitle}</p>}
                    <p className="text-gray-300 text-sm">{testimonial.email}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-full bg-yellow-700/80 z-20 transform skew-x-12 transition-all ease-in duration-300 hover:skew-x-0 origin-top-left"></div>
                <div className="absolute bottom-4 right-4 ">
                  <Quote size={32} className="text-yellow-200 opacity-60" />
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;