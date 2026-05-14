import Link from 'next/link';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Impact', href: '/impact' },
    { label: 'Contact', href: '/contact#contact-form' },
];

const programLinks = [
    { label: 'Women Empowerment', href: '/programs' },
    { label: 'Education', href: '/programs' },
    { label: 'Healthcare', href: '/programs' },
    { label: 'Rural Development', href: '/programs' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black px-6 py-20 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
                <div>
                    <h2 className="mb-4 text-2xl font-bold">PRAGME</h2>

                    <p className="text-sm leading-relaxed text-white/70">
                        Building dignity, hope, and opportunity for underserved communities.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

                    <ul className="space-y-2 text-white/70">
                        {quickLinks.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="transition hover:text-white">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">Programs</h3>

                    <ul className="space-y-2 text-white/70">
                        {programLinks.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="transition hover:text-white">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-semibold">Contact</h3>

                    <ul className="space-y-2 text-white/70">
                        <li>17, 1st Floor, Sushant Lok-1</li>
                        <li>Gurugram, Haryana</li>
                        <li>CIN: U88900HR2025NPL134471</li>
                        <li>
                            <a
                                href="mailto:pragmeindiafoundation@gmail.com"
                                className="transition hover:text-white"
                            >
                                pragmeindiafoundation@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
                (c) {year} Pragme India Foundation. All rights reserved.
            </div>
        </footer>
    );
}
