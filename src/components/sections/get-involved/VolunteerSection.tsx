import FadeUp from '@/components/animations/FadeUp';

const roles = [
    'Community Outreach',
    'Education Support',
    'Healthcare Awareness',
    'Event Coordination',
    'Content & Media',
    'Fundraising Support',
];

export default function VolunteerSection() {
    return (
        <section id="volunteer" className="scroll-mt-28 bg-black px-6 py-28 text-white">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                            Volunteer
                        </p>

                        <h2 className="text-5xl font-bold">
                            Become A Part Of The Mission
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {roles.map((role) => (
                            <div
                                key={role}
                                className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
                            >
                                <h3 className="text-2xl font-bold text-emerald-400">
                                    {role}
                                </h3>

                                <p className="mt-4 leading-relaxed text-white/70">
                                    Contribute your time and skills to meaningful community impact.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
