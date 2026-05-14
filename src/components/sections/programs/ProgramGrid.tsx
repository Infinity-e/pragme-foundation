import FadeUp from '@/components/animations/FadeUp';
import { ngoImages } from '@/lib/ngo-images';

const programs = [
    {
        title: 'SHE RISES',
        description:
            'Empowering women through leadership, awareness, life skills, and economic opportunities.',
        image: ngoImages.programs.grid[0],
    },
    {
        title: 'LEARN & LEAD',
        description:
            'Improving access to education, literacy, and skill-building opportunities.',
        image: ngoImages.programs.grid[1],
    },
    {
        title: 'HEALTHY HOMES',
        description:
            'Promoting healthcare awareness, hygiene, safety, and community well-being.',
        image: ngoImages.programs.grid[2],
    },
    {
        title: 'RURAL ROOTS',
        description:
            'Strengthening rural livelihoods and sustainable community development.',
        image: ngoImages.programs.grid[3],
    },
];

export default function ProgramsGrid() {
    return (
        <section className="bg-white px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Impact Pillars
                        </p>

                        <h2 className="text-5xl font-bold">
                            Programs Driving Change
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {programs.map((program) => (
                            <div
                                key={program.title}
                                className="overflow-hidden rounded-3xl bg-gray-50 shadow-xl transition hover:-translate-y-2"
                            >
                                <div
                                    className="h-52 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${program.image}')` }}
                                />

                                <div className="p-10">
                                    <h3 className="text-3xl font-bold text-green-900">
                                        {program.title}
                                    </h3>

                                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                        {program.description}
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
