'use client';

import { useState } from 'react';

const CONTACT_EMAIL = 'pragmeindiafoundation@gmail.com';

type ContactFormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [formState, setFormState] = useState<ContactFormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (field: keyof ContactFormState) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState((previous) => ({ ...previous, [field]: event.target.value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        name: formState.name,
                        email: formState.email,
                        subject: formState.subject,
                        message: formState.message,
                    }),
                }
            );

            if (!response.ok) {
                const data = await response.json().catch(() => null);
                throw new Error(data?.message || 'Unable to send message. Please try again later.');
            }

            setStatus('sent');
            setFormState({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Unable to send message. Please try again later.'
            );
        }
    };

    return (
        <section id="contact-form" className="scroll-mt-28 bg-white px-6 py-28">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
                <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-700">
                        Send Message
                    </p>

                    <h2 className="text-5xl font-bold">
                        We&apos;d Love To Hear From You
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        Connect with Pragme India Foundation regarding programs,
                        collaborations, volunteering, or community support.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-gray-50 p-10 shadow-xl">
                    <input
                        name="name"
                        value={formState.name}
                        onChange={handleChange('name')}
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition focus:border-green-700"
                    />

                    <input
                        name="email"
                        value={formState.email}
                        onChange={handleChange('email')}
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition focus:border-green-700"
                    />

                    <input
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange('subject')}
                        type="text"
                        placeholder="Subject"
                        required
                        className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition focus:border-green-700"
                    />

                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange('message')}
                        rows={6}
                        placeholder="Your Message"
                        required
                        className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition focus:border-green-700"
                    />

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full rounded-full bg-green-900 px-6 py-4 font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'sent' && (
                        <p className="rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-green-900">
                            Your message was sent successfully. We will get back to you soon.
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-red-900">
                            {errorMessage}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
