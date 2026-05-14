import Link from 'next/link';
import { ngoImages } from '@/lib/ngo-images';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{
                    backgroundImage: `url('${ngoImages.heroes.home}')`,
                }}
            />

            {/* Light overlay */}
            <div className="absolute inset-0 bg-emerald-900/40" />
            <div className="absolute inset-0 bg-white/10" />

            {/* Bottom decorative glow line */}
            <div className="absolute bottom-0 left-1/2 h-[4px] w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-200">
                    Pragme India Foundation
                </p>

                <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                    Together, We Rebuild Lives With Dignity, Hope & Opportunity
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
                    Empowering underserved communities through education,
                    healthcare, women welfare, sustainability, and rural development.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/get-involved#donate"
                        className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
                    >
                        Donate Now
                    </Link>

                    <Link
                        href="/get-involved#volunteer"
                        className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                        Become Volunteer
                    </Link>
                </div>
            </div>
        </section>
    );
}


