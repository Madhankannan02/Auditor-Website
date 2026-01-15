import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PieChart, TrendingUp, Shield, Users, Briefcase } from 'lucide-react';

const services = [
    {
        icon: <FileText size={32} />,
        title: "Auditing & Assurance",
        description: "Comprehensive statutory, internal, and tax audits ensuring compliance and transparency."
    },
    {
        icon: <PieChart size={32} />,
        title: "Taxation Services",
        description: "Expert guidance on direct and indirect taxes, GST filing, and tax planning strategies."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Financial Advisory",
        description: "Strategic financial planning, investment advice, and wealth management solutions."
    },
    {
        icon: <Shield size={32} />,
        title: "Risk Management",
        description: "Identifying and mitigating financial risks to secure your business operations."
    },
    {
        icon: <Users size={32} />,
        title: "Payroll Management",
        description: "End-to-end payroll processing, compliance, and reporting for your workforce."
    },
    {
        icon: <Briefcase size={32} />,
        title: "Company Setup",
        description: "Assistance with company registration, compliance, and regulatory filings."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">What We Do</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Expert Financial Services</h2>
                    <p className="text-slate-600">Tailored solutions to meet the unique financial needs of individuals and businesses.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
