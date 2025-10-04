"use client";
import React, { useState } from 'react'


export const Footer = () => {
    const [email, setEmail] = useState('');
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-blue-500/20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl text-white">
                                L
                            </div>
                            <span className="text-2xl font-bold text-white">Lingo</span>
                        </div>
                        <p className="text-gray-500 mb-4">
                            Empowering Africans to thrive in the Web3 economy through education and opportunities.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: '𝕏', label: 'Twitter' },
                                { icon: '💬', label: 'Telegram' },
                                { icon: '💭', label: 'Discord' },
                                { icon: '💼', label: 'LinkedIn' }
                            ].map((social, i) => (
                                <button type='button'
                                    key={i}
                                    className="w-10 h-10 bg-gray-900 border border-blue-500/20 rounded-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all flex items-center justify-center"
                                    aria-label={social.label}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2">
                            {['Courses', 'Microtasks', 'Community', 'Analytics', 'For Founders'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Blog', 'Careers', 'Contact', 'Press Kit', 'FAQ', 'Docs'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Stay Updated</h4>
                        <p className="text-gray-500 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-2 bg-gray-900 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-600"
                            />
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                {
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2025 Lingo. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};