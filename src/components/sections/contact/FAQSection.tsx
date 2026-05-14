import FadeUp from '@/components/animations/FadeUp';

const faqs = [
    {
        question: 'How can I volunteer?',
        answer:
            'You can contact us through the website or participate in ongoing initiatives.',
    },
    {
        question: 'Can organizations partner with Pragme?',
        answer:
            'Yes, we welcome CSR, NGO, educational, and healthcare partnerships.',
    },
    {
        question: 'How are donations utilized?',
        answer:
            'Donations support community initiatives, education, healthcare, and development programs.',
    },
];

export default function FAQSection() {
    return (
        <section className="bg-gray-50 px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-5xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                            FAQs
                        </p>

                        <h2 className="text-5xl font-bold">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="rounded-3xl bg-white p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold">
                                    {faq.question}
                                </h3>

                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}