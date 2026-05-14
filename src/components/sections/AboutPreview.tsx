import FadeUp from '@/components/animations/FadeUp';
import Link from 'next/link';
import { ngoImages } from '@/lib/ngo-images';

export default function AboutPreview() {
    return (
        <section className="bg-white px-6 py-28">
            <FadeUp>
                <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
                            About Us
                        </p>

                        <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl">
                            Building resilient communities through compassion and action.
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div
                            className="h-72 w-full rounded-3xl bg-cover bg-center shadow-2xl"
                            style={{
                                backgroundImage: `url('${ngoImages.home.aboutPreview}')`,
                            }}
                        />

                        <p className="text-lg leading-relaxed text-gray-600">
                            Pragme India Foundation is committed to empowering underserved
                            communities through meaningful programs focused on education,
                            healthcare, women empowerment, sustainability, and social welfare.
                        </p>

                        <Link
                            href="/about"
                            className="mt-8 inline-flex rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
