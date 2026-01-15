import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/5 clip-path-polygon hidden lg:block" style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)' }}></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-6">
                            Certified Auditor & Financial Consultant
                        </motion.span>
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Precision in Numbers, <br />
                            <span className="text-blue-900">Excellence in Service.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 max-w-lg">
                            Providing comprehensive auditing, taxation, and financial advisory services to help your business thrive with confidence and compliance.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/25"
                            >
                                Get Started <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
                                whileTap={{ scale: 0.95 }}
                                href="#services"
                                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center"
                            >
                                Our Services
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-green-500" />
                                <span>ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-green-500" />
                                <span>15+ Years Experience</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Auditing Team"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                            <p className="text-white font-medium">"Trust is earned through accuracy."</p>
                        </div>
                    </motion.div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="flex items-center gap-4"
                        >
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Tax Savings</p>
                                <p className="text-xl font-bold text-slate-900">$1.2M+</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
