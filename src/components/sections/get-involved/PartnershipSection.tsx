import FadeUp from '@/components/animations/FadeUp';
import Link from 'next/link';

const partners = [
    'Corporate CSR Partnerships',
    'NGO Collaborations',
    'Educational Institutions',
    'Healthcare Organizations',
    'Community Networks',
    'Sustainability Initiatives',
];

export default function PartnershipSection() {
    return (
        <section id="partnership" className="scroll-mt-28 bg-gray-50 px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Partnerships
                        </p>

                        <h2 className="text-5xl font-bold">
                            Collaborate For Greater Impact
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {partners.map((partner) => (
                            <div
                                key={partner}
                                className="rounded-3xl bg-white p-10 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-black">
                                    {partner}
                                </h3>

                                <p className="mt-4 leading-relaxed text-gray-600">
                                    Building collaborative ecosystems for long-term social impact.
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact#contact-form"
                            className="inline-flex rounded-full bg-green-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
                        >
                            Start A Partnership Conversation
                        </Link>
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
