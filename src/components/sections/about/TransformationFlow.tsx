import FadeUp from '@/components/animations/FadeUp';
import { ngoImages } from '@/lib/ngo-images';

const steps = [
    {
        title: 'Understand',
        description:
            'We listen deeply to local needs and map priority challenges with the community.',
        image: ngoImages.about.transformation[0],
    },
    {
        title: 'Engage',
        description:
            'We involve families, local leaders, and volunteers to co-create practical solutions.',
        image: ngoImages.about.transformation[1],
    },
    {
        title: 'Empower',
        description:
            'We equip people with skills, awareness, and support systems for dignified progress.',
        image: ngoImages.about.transformation[2],
    },
    {
        title: 'Transform',
        description:
            'We scale measurable outcomes into long-term, sustainable change across communities.',
        image: ngoImages.about.transformation[3],
    },
];

export default function TransformationFlow() {
    return (
        <section className="bg-white px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Transformation Journey
                        </p>

                        <h2 className="text-5xl font-bold">
                            Real Change Is Built Together
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="overflow-hidden rounded-3xl bg-gray-50 shadow-lg"
                            >
                                <div
                                    className="h-40 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${step.image}')` }}
                                />

                                <div className="p-8">
                                    <div className="text-6xl font-bold text-green-200">
                                        0{index + 1}
                                    </div>

                                    <h3 className="mt-6 text-3xl font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-gray-600">
                                        {step.description}
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
