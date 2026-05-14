import FadeUp from '@/components/animations/FadeUp';

const timeline = [
    {
        year: '2025',
        title: 'Foundation Initiated',
    },
    {
        year: '2026',
        title: 'Community Outreach Expansion',
    },
    {
        year: '2027',
        title: 'Women & Education Programs',
    },
    {
        year: '2028',
        title: 'Nationwide Impact Vision',
    },
];

export default function GrowthTimeline() {
    return (
        <section className="bg-black px-6 py-28 text-white">
            <FadeUp>
                <div className="mx-auto max-w-6xl">
                    <div className="mb-20 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                            Journey
                        </p>

                        <h2 className="text-5xl font-bold">
                            Our Growth Timeline
                        </h2>
                    </div>

                    <div className="space-y-10">
                        {timeline.map((item) => (
                            <div
                                key={item.year}
                                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 md:flex-row md:items-center md:justify-between"
                            >
                                <h3 className="text-4xl font-bold text-emerald-400">
                                    {item.year}
                                </h3>

                                <p className="text-xl text-white/80">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}