import Link from 'next/link';
import { ngoImages } from '@/lib/ngo-images';

export default function FinalCTA() {
    return (
        <section className="relative overflow-hidden px-6 py-28 text-white">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${ngoImages.home.ctaBackground}')` }}
            />
            <div className="absolute inset-0 bg-green-950/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-green-950/35 to-emerald-900/60" />

            <div className="relative mx-auto max-w-5xl text-center">
                <h2 className="text-5xl font-bold leading-tight">
                    Every Contribution Creates Hope
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
                    Whether through donations, volunteering, or partnerships, your support
                    helps transform lives and strengthen communities.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/get-involved#donate"
                        className="rounded-full bg-white px-8 py-4 font-semibold text-black"
                    >
                        Support Now
                    </Link>

                    <Link
                        href="/contact#contact-form"
                        className="rounded-full border border-white px-8 py-4 font-semibold"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
