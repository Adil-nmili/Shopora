import { ArrowRight, Mail, MapPlusIcon, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                delayChildren: 0.3, 
                staggerChildren: 0.2 
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

  return (
    <div className="bg-[url(/assets/footer-bg.jpg)] h-[80vh] bg-cover bg-no-repeat bg-center bg-fixed relative">
        <motion.div 
            className="absolute w-full h-full top-0 left-0 bg-black/60 flex flex-col justify-center gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4 py-16 text-white grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* CONTACT INFO */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-bold mb-6">CONTACT INFO</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="mr-3 text-yellow-500"><MapPlusIcon /></span>
                            <span className="text-sm">123 Sky Tower address name, Los Angeles</span>
                        </li>   
                        <li className="flex items-center">
                            <span className="mr-3 text-yellow-500"><Phone /></span>
                            <span className="text-sm">PHONE: (012) 345 6789</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-yellow-500"><Mail /></span>
                            <span className="text-sm">EMAIL: info@motor.com</span>
                        </li>
                    </ul>
                </motion.div>

                {/* ABOUT US */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-bold mb-6">ABOUT US</h3>
                    <p className="text-gray-300 text-xs">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </motion.div>

                {/* FAQs */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-bold mb-6">FAQs</h3>
                    <ul className="space-y-3">
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Contact Us</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Returns</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Site Map</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Brands</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Gift Vouchers</Link></li>
                    </ul>
                </motion.div>

                {/* ORDER TRACKING */}
                <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-bold mb-6">ORDER TRACKING</h3>
                    <ul className="space-y-3">
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> About Us</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Returns</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" />Contact Us</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" />Term & Conditions</Link></li>
                        <li><Link to="#" className="text-gray-300 hover:text-yellow-500 flex items-center text-sm"><ArrowRight className=" text-xs mr-2" /> Privacy Policy</Link></li>
                    </ul>
                </motion.div>
            </div>

            <div className="border-t border-gray-700 py-6 text-white text-center w-1/2 mx-auto">
                <div className="container mx-auto  flex flex-col md:flex-row justify-center items-end">
                    {/* Removed image tag for payment.png as it does not exist */}
                    <p className="text-gray-300 text-center text-xs">Copyright © Motor Vehikle by <Link to="#" className="text-white"><span className="text-orange-600 font-semibold italic underline">Adil</span>Theme</Link>. All rights reserved.</p>
                </div>
            </div>

            <motion.div 
                className="absolute bottom-4 right-4 bg-white text-gray-800 p-3 rounded-full shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <i className="fas fa-chevron-up"></i>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Footer