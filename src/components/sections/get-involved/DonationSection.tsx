'use client';

import { useState } from 'react';

import FadeUp from '@/components/animations/FadeUp';

const UPI_ID = 'pragmefoundation@upi';

export default function DonationSection() {
    const [copied, setCopied] = useState(false);

    const copyUpi = async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(UPI_ID);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 2500);
                return;
            }

            throw new Error('Clipboard API unavailable');
        } catch (error) {
            console.error('Clipboard copy failed', error);
        }
    };

    return (
        <section id="donate" className="scroll-mt-28 bg-white px-6 py-28">
            <FadeUp>
                <div className="mx-auto max-w-7xl rounded-3xl bg-gray-50 p-12 shadow-xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                                Donate
                            </p>

                            <h2 className="text-5xl font-bold">
                                Support Meaningful Change
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                Your contribution helps us expand education, healthcare,
                                sustainability, and community development initiatives.
                            </p>
                        </div>

                        <div className="space-y-4 rounded-3xl bg-black p-10 text-white">
                            <div>
                                <p className="text-sm text-white/60">UPI ID</p>

                                <h3 className="mt-2 text-2xl font-bold">
                                    {UPI_ID}
                                </h3>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">Bank Name</p>

                                <h3 className="mt-2 text-xl font-semibold">
                                    Example Bank
                                </h3>
                            </div>

                            <div>
                                <p className="text-sm text-white/60">Account Name</p>

                                <h3 className="mt-2 text-xl font-semibold">
                                    Pragme India Foundation
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={copyUpi}
                                className="mt-6 w-full rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-gray-100"
                            >
                                {copied ? 'UPI ID copied!' : 'Copy UPI ID'}
                            </button>

                            <p className="text-sm text-white/70">
                                Tap &quot;Copy UPI ID&quot; and paste it into your payments app, or use the details above to donate.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeUp>
        </section>
    );
}
