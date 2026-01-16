import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/Primary.png';

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

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const mobileItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <img src={logo} alt="Kadasari Auditing & Finance Groups" className="h-12 w-auto object-contain" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-slate-600 font-medium transition-colors group"
                        >
                            <span className="group-hover:text-blue-900 transition-colors">{link.name}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="px-5 py-2.5 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
                    >
                        Book Consultation
                    </motion.a>
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
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    variants={mobileItemVariants}
                                    className="text-slate-600 font-medium hover:text-blue-900"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                variants={mobileItemVariants}
                                href="#contact"
                                className="w-full text-center px-5 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Consultation
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
