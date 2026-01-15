import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Let's Discuss Your Finances</h2>
                        <p className="text-slate-600 mb-8 max-w-md">
                            Ready to optimize your financial strategy? Reach out to us for a consultation or any inquiries.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-900">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Call Us</h4>
                                    <p className="text-slate-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-900">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Email Us</h4>
                                    <p className="text-slate-600">contact@jeeva-auditor.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-900">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Visit Us</h4>
                                    <p className="text-slate-600">123 Financial District, Suite 400,<br />Business City, BC 90210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
