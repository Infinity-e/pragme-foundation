import { ngoImages } from '@/lib/ngo-images';

const programs = [
    {
        title: 'SHE RISES',
        description: 'Women empowerment and leadership initiatives.',
        image: ngoImages.home.programPreview[0],
    },
    {
        title: 'LEARN & LEAD',
        description: 'Education and literacy development programs.',
        image: ngoImages.home.programPreview[1],
    },
    {
        title: 'HEALTHY HOMES',
        description: 'Healthcare, hygiene, and safety awareness.',
        image: ngoImages.home.programPreview[2],
    },
    {
        title: 'RURAL ROOTS',
        description: 'Rural livelihoods and sustainable development.',
        image: ngoImages.home.programPreview[3],
    },
];

export default function ProgramsPreview() {
    return (
        <section className="bg-gray-50 px-6 py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
                        Our Programs
                    </p>

                    <h2 className="text-4xl font-bold md:text-6xl">
                        Creating meaningful social impact.
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {programs.map((program) => (
                            <div
                                key={program.title}
                                className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2"
                            >
                                <div
                                    className="h-44 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${program.image}')`,
                                    }}
                                />

                                <div className="p-8">
                                <h3 className="text-2xl font-bold text-green-900">
                                    {program.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-gray-600">
                                    {program.description}
                                </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    );
}
