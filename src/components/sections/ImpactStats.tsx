import CountOnView from '@/components/animations/CountOnView';

const stats = [
    {
        number: 1000,
        suffix: '+',
        label: 'Lives Impacted',
    },
    {
        number: 50,
        suffix: '+',
        label: 'Volunteers',
    },
    {
        number: 20,
        suffix: '+',
        label: 'Programs',
    },
    {
        number: 10,
        suffix: '+',
        label: 'Communities',
    },
];

export default function ImpactStats() {
    return (
        <section className="bg-black px-6 py-24 text-white">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
                    >
                        <h3 className="text-5xl font-bold text-emerald-400">
                            <CountOnView value={item.number} suffix={item.suffix} />
                        </h3>

                        <p className="mt-4 text-lg text-white/70">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
