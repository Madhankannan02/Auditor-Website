import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Office Meeting"
                        className="rounded-2xl shadow-2xl opacity-90"
                        loading="lazy" />
                </div>
                <div className="md:w-1/2">
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">About Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Committed to Your Financial Success</h2>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        With over a decade of experience, 'Jeeva Auditor' has been a beacon of trust and reliability in the financial sector. We believe in building long-term relationships with our clients based on integrity, transparency, and results.
                    </p>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        Our team of certified professionals is dedicated to navigating the complexities of modern finance so you can focus on what matters most—growing your business.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Certified Accountants', 'Confidentiality Assured', 'Timely Delivery', 'Strategic Insight'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="bg-blue-800 p-1 rounded-full">
                                    <Check size={16} className="text-white" />
                                </div>
                                <span className="text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
