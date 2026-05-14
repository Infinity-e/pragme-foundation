import FadeUp from '@/components/animations/FadeUp';

export default function MissionVision() {
    return (
        <section className="bg-gray-50 px-6 py-28">
            <FadeUp>
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    <div className="rounded-3xl bg-green-950 p-10 text-white">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                            Vision
                        </p>

                        <h3 className="text-4xl font-bold">
                            Building resilient and self-reliant communities.
                        </h3>

                        <p className="mt-6 text-lg leading-relaxed text-white/80">
                            To create inclusive communities where every individual lives
                            with dignity, opportunity, access, and hope.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-10 shadow-2xl">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Mission
                        </p>

                        <h3 className="text-4xl font-bold text-black">
                            Empowering communities through sustainable action.
                        </h3>

                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                            Pragme India Foundation empowers underserved communities through
                            programs focused on education, healthcare, women welfare,
                            sustainability, rural development, and compassionate social
                            support.
                        </p>
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}