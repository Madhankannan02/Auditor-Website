import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
                    <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Sarah Johnson", role: "CEO, TechStart", quote: "Their strategic advice was crucial during our startup phase. Highly recommended!" },
                        { name: "Michael Chen", role: "Director, Chen Enterprises", quote: "Professional, timely, and incredibly knowledgeable. They make tax season stress-free." },
                        { name: "Priya Sharma", role: "Founder, DesignStudio", quote: "Jeeva Auditor goes beyond just numbers. They truly understand business growth." }
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
