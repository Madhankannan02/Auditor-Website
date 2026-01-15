import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                    <div className="bg-blue-900 p-2 rounded-lg text-white">
                        <Calculator size={24} />
                    </div>
                    <span>Jeeva<span className="text-blue-900">.Auditor</span></span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-blue-900 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2.5 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
                    >
                        Book Consultation
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 font-medium hover:text-blue-900"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="w-full text-center px-5 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
