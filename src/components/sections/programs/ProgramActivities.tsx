import FadeUp from '@/components/animations/FadeUp';
import { ngoImages } from '@/lib/ngo-images';

const activities = [
    {
        title: 'Community awareness drives',
        image: ngoImages.programs.activities[0],
    },
    {
        title: 'Healthcare & hygiene workshops',
        image: ngoImages.programs.activities[1],
    },
    {
        title: 'Women leadership initiatives',
        image: ngoImages.programs.activities[2],
    },
    {
        title: 'Education support programs',
        image: ngoImages.programs.activities[3],
    },
    {
        title: 'Skill development sessions',
        image: ngoImages.programs.activities[4],
    },
    {
        title: 'Rural sustainability campaigns',
        image: ngoImages.programs.activities[5],
    },
];

export default function ProgramActivities() {
    return (
        <section className="bg-gray-50 px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            Activities
                        </p>

                        <h2 className="text-5xl font-bold">
                            Field-Level Initiatives
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {activities.map((activity) => (
                            <div
                                key={activity.title}
                                className="overflow-hidden rounded-2xl bg-white shadow-lg"
                            >
                                <div
                                    className="h-36 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${activity.image}')` }}
                                />

                                <div className="p-8">
                                    <h3 className="text-xl font-semibold text-black">
                                        {activity.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
