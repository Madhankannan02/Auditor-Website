import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/5 clip-path-polygon hidden lg:block" style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)' }}></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-6">
                            Certified Auditor & Financial Consultant
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Precision in Numbers, <br />
                            <span className="text-blue-900">Excellence in Service.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg">
                            Providing comprehensive auditing, taxation, and financial advisory services to help your business thrive with confidence and compliance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="px-8 py-4 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/25">
                                Get Started <ArrowRight size={20} />
                            </a>
                            <a href="#services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
                                Our Services
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-green-500" />
                                <span>ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-green-500" />
                                <span>15+ Years Experience</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Auditing Team"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                            <p className="text-white font-medium">"Trust is earned through accuracy."</p>
                        </div>
                    </motion.div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Tax Savings</p>
                                <p className="text-xl font-bold text-slate-900">$1.2M+</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
