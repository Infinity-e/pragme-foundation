import { ngoImages } from '@/lib/ngo-images';

export default function GetInvolvedHero() {
    return (
        <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pt-32 text-white">
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{
                    backgroundImage: `url('${ngoImages.heroes.getInvolved}')`,
                }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-emerald-900/35" />
            <div className="absolute bottom-0 left-1/2 h-[4px] w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-emerald-300">
                    Get Involved
                </p>

                <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                    Together, We Can Create Lasting Social Impact
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
                    Support Pragme India Foundation through donations, volunteering,
                    partnerships, and collaborative initiatives that empower communities.
                </p>
            </div>
        </section>
    );
}
