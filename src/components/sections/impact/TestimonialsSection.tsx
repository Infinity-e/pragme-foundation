import FadeUp from '@/components/animations/FadeUp';

const testimonials = [
    {
        name: 'Community Volunteer',
        text:
            'Pragme India Foundation is genuinely creating meaningful and compassionate change.',
    },
    {
        name: 'Education Support Partner',
        text:
            'Their approach toward sustainable impact and dignity-centered support is inspiring.',
    },
    {
        name: 'Healthcare Volunteer',
        text:
            'The organization focuses on practical grassroots-level transformation.',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-gradient-to-r from-green-900 to-emerald-700 px-6 py-28 text-white">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-200">
                            Testimonials
                        </p>

                        <h2 className="text-5xl font-bold">
                            Voices Of Impact
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((item) => (
                            <div
                                key={item.name}
                                className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl"
                            >
                                <p className="text-lg leading-relaxed text-white/90">
                                    &ldquo;{item.text}&rdquo;
                                </p>

                                <h3 className="mt-6 text-xl font-semibold text-white">
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
