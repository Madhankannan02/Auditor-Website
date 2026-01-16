import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
                        <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Sarah Johnson", role: "CEO, TechStart", quote: "Their strategic advice was crucial during our startup phase. Highly recommended!" },
                        { name: "Michael Chen", role: "Director, Chen Enterprises", quote: "Professional, timely, and incredibly knowledgeable. They make tax season stress-free." },
                        { name: "Priya Sharma", role: "Founder, DesignStudio", quote: "Kadasari Auditing & Finance Groups goes beyond just numbers. They truly understand business growth." }
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 italic">"{t.quote}"</p>
                            <div>
                                <h4 className="font-bold text-slate-900">{t.name}</h4>
                                <span className="text-sm text-slate-500">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
