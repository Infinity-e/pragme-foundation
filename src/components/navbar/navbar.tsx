'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="flex items-center gap-3 text-2xl font-bold tracking-wide text-white"
                >
                    <Image
                        src="/logo.svg"
                        alt="Pragme India Foundation"
                        width={36}
                        height={36}
                        className="rounded-full bg-white/10"
                    />
                    <span>PRAGME</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/80 transition hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Button */}
                <Link
                    href="/get-involved#donate"
                    className="hidden rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:scale-105 lg:block"
                >
                    Donate
                </Link>

                {/* Mobile Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                    className="text-white lg:hidden"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        id="mobile-navigation"
                        className="border-t border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden"
                    >
                        <div className="flex flex-col gap-6 px-6 py-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium text-white/80 transition hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                href="/get-involved#donate"
                                onClick={() => setOpen(false)}
                                className="mt-4 rounded-full bg-white px-6 py-4 font-semibold text-black text-center"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
