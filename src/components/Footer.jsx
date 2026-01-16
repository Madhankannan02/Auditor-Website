import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/Primary.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-4 gap-12 mb-16"
                >
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="inline-block mb-6">
                            <img src={logo} alt="Kadasari Auditing & Finance Groups" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
                        </a>
                        <p className="text-slate-400 mb-6">
                            Empowering businesses with precise financial auditing and strategic advisory services.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, color: '#fff' }}
                                    className="text-slate-400 transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Auditing</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Taxation</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Advisory</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Payroll</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-slate-400 mb-4">Subscribe for the latest financial updates.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="px-4 py-2 bg-slate-800 text-white rounded-l-lg outline-none w-full border border-slate-700 focus:border-blue-500" />
                            <motion.button
                                whileHover={{ backgroundColor: '#2563eb' }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 px-4 py-2 rounded-r-lg transition-colors"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm"
                >
                    <p>&copy; {new Date().getFullYear()} Kadasari Auditing & Finance Groups. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
export default Footer;
