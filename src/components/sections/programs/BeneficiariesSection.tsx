import FadeUp from '@/components/animations/FadeUp';
import { ngoImages } from '@/lib/ngo-images';

const groups = [
    {
        title: 'Women from vulnerable backgrounds',
        image: ngoImages.programs.beneficiaries[0],
    },
    {
        title: 'Children without educational support',
        image: ngoImages.programs.beneficiaries[1],
    },
    {
        title: 'Rural and underserved communities',
        image: ngoImages.programs.beneficiaries[2],
    },
    {
        title: 'Elderly individuals without care systems',
        image: ngoImages.programs.beneficiaries[3],
    },
    {
        title: 'Communities lacking healthcare access',
        image: ngoImages.programs.beneficiaries[4],
    },
    {
        title: 'Environmentally vulnerable regions',
        image: ngoImages.programs.beneficiaries[5],
    },
];

export default function BeneficiariesSection() {
    return (
        <section className="bg-black px-6 py-28 text-white">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                            Beneficiaries
                        </p>

                        <h2 className="text-5xl font-bold">
                            Communities We Support
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {groups.map((group) => (
                            <div
                                key={group.title}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                            >
                                <div
                                    className="h-40 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${group.image}')` }}
                                />

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-emerald-400">
                                        {group.title}
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-white/70">
                                        Supporting dignity, empowerment, access, and opportunity for
                                        underserved communities.
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
