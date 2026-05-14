import FadeUp from '@/components/animations/FadeUp';

const details = [
    {
        title: 'Location',
        value: '17, 1st Floor, Sushant Lok-1, Gurugram, Haryana, India',
        href: 'https://maps.google.com/?q=17,+1st+Floor,+Sushant+Lok-1,+Gurugram,+Haryana,+India',
    },
    {
        title: 'Email',
        value: 'pragmeindiafoundation@gmail.com',
        href: 'mailto:pragmeindiafoundation@gmail.com',
    },
    {
        title: 'CIN',
        value: 'U88900HR2025NPL134471',
    },
];

export default function ContactInfo() {
    return (
        <section className="bg-black px-6 py-28 text-white">
            <FadeUp>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                            Contact Details
                        </p>

                        <h2 className="text-5xl font-bold">
                            Connect With Pragme
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {details.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
                            >
                                <h3 className="text-2xl font-bold text-emerald-400">
                                    {item.title}
                                </h3>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                        className="mt-4 block text-lg text-white/70 transition hover:text-white"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="mt-4 text-lg text-white/70">
                                        {item.value}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
