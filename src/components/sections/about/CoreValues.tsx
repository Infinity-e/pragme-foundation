import FadeUp from '@/components/animations/FadeUp';
import { ngoImages } from '@/lib/ngo-images';

const values = [
    {
        title: 'Integrity',
        description: 'We stay transparent, ethical, and accountable in every initiative.',
        image: ngoImages.about.coreValues[0],
    },
    {
        title: 'Compassion',
        description: 'We work with empathy and dignity for every community we serve.',
        image: ngoImages.about.coreValues[1],
    },
    {
        title: 'Accountability',
        description: 'We measure outcomes and remain responsible for real social impact.',
        image: ngoImages.about.coreValues[2],
    },
    {
        title: 'Respect & Inclusion',
        description: 'We prioritize equity and inclusion across all underserved groups.',
        image: ngoImages.about.coreValues[3],
    },
    {
        title: 'Empowerment',
        description: 'We build community ownership and long-term self-reliance.',
        image: ngoImages.about.coreValues[4],
    },
    {
        title: 'Sustainability',
        description: 'We design climate-conscious and future-focused programs.',
        image: ngoImages.about.coreValues[5],
    },
];

export default function CoreValues() {
    return (
        <section className="bg-black px-6 py-28 text-white">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                            Core Values
                        </p>

                        <h2 className="text-5xl font-bold">
                            I CARES
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                            >
                                <div
                                    className="h-44 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${value.image}')` }}
                                />

                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-emerald-400">
                                        {value.title}
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-white/70">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
