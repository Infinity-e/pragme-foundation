import FadeUp from '@/components/animations/FadeUp';
import CountOnView from '@/components/animations/CountOnView';

const stats = [
    {
        number: 1000,
        suffix: '+',
        label: 'Lives Impacted',
    },
    {
        number: 120,
        suffix: '+',
        label: 'Awareness Drives',
    },
    {
        number: 50,
        suffix: '+',
        label: 'Volunteers',
    },
    {
        number: 25,
        suffix: '+',
        label: 'Community Programs',
    },
];

export default function ImpactStatsGrid() {
    return (
        <section className="bg-white px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Statistics
                        </p>

                        <h2 className="text-5xl font-bold">
                            Impact At A Glance
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-3xl bg-gray-50 p-10 shadow-xl"
                            >
                                <h3 className="text-5xl font-bold text-green-900">
                                    <CountOnView value={item.number} suffix={item.suffix} />
                                </h3>

                                <p className="mt-4 text-lg text-gray-600">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
