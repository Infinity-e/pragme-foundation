import FadeUp from '@/components/animations/FadeUp';

const goals = [
    'Expand rural development programs',
    'Increase healthcare awareness campaigns',
    'Strengthen women empowerment initiatives',
    'Build sustainable education partnerships',
    'Create larger volunteer networks',
    'Develop nationwide social impact collaborations',
];

export default function FutureGoals() {
    return (
        <section className="bg-gray-50 px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Future Vision
                        </p>

                        <h2 className="text-5xl font-bold">
                            Goals For The Future
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {goals.map((goal) => (
                            <div
                                key={goal}
                                className="rounded-3xl bg-white p-8 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-black">
                                    {goal}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}