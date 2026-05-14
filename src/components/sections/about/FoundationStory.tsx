import FadeUp from '@/components/animations/FadeUp';

export default function FoundationStory() {
    return (
        <section className="bg-white px-6 py-28">
            <FadeUp>
                <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
                            Our Story
                        </p>

                        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                            Why Pragme India Foundation Exists
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                        <p>
                            Pragme India Foundation was established in 2025 with a simple belief —
                            development becomes meaningful only when it restores dignity,
                            creates opportunity, and empowers individuals to rebuild their
                            lives.
                        </p>

                        <p>
                            Through community outreach, awareness initiatives, education,
                            healthcare support, and sustainable development programs,
                            Pragme works toward long-term human-centered transformation.
                        </p>

                        <p>
                            The organization focuses on practical impact, ethical governance,
                            and inclusive growth aligned with the vision of Viksit Bharat.
                        </p>
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}