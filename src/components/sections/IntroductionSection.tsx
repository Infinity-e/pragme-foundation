'use client';

import { motion } from 'framer-motion';

export default function IntroductionSection() {
    return (
        <section className="relative overflow-hidden bg-[#f5f5f2] py-32">
            {/* TOP LEFT BARS */}
            <div className="absolute left-0 top-0 z-10">
                {/* GOLD BAR */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-10 w-[500px] rounded-br-[40px] bg-[#d8ba39]"
                />

                {/* GREEN BAR */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-20 w-[380px] items-center rounded-br-[40px] bg-[#61732a] px-8"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white md:text-base">
                        Pragme India Foundation
                    </p>
                </motion.div>
            </div>

            {/* RIGHT SIDE ANGULAR DESIGN */}
            <div className="absolute right-0 top-0 hidden h-full w-[34%] overflow-hidden xl:block">
                {/* OUTER OLIVE PANEL */}
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-0 top-0 h-full w-full bg-[#61732a]"
                    style={{
                        clipPath:
                            'polygon(68% 0%, 100% 0%, 100% 100%, 82% 100%, 28% 42%)',
                    }}
                />

                {/* MAIN DARK GREEN STRIP */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[14%] top-[-5%] h-[115%] w-[36%] rotate-[30deg] rounded-[60px] bg-[#145235]"
                />

                {/* GOLD INNER PANEL */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[2%] top-[6%] h-[78%] w-[52%] rounded-[50px] bg-[#d8ba39]"
                    style={{
                        clipPath:
                            'polygon(38% 0%, 100% 0%, 100% 100%, 0% 58%)',
                    }}
                />

                {/* WHITE EDGE LINE */}
                <div
                    className="absolute right-[6%] top-[-10%] h-[120%] w-[2px] rotate-[30deg] bg-white/90"
                />

                {/* DOTS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.6,
                    }}
                    className="absolute bottom-20 right-10 flex gap-3"
                >
                    <span className="h-3 w-3 rounded-full bg-white" />
                    <span className="h-3 w-3 rounded-full bg-white" />
                    <span className="h-3 w-3 rounded-full bg-white" />
                </motion.div>
            </div>
            {/* MAIN CONTENT */}
            <div className="relative z-20 mx-auto max-w-7xl px-6">
                <div className="max-w-4xl">
                    {/* SMALL LABEL */}
                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#61732a]"
                    >
                        Introduction
                    </motion.p>

                    {/* TITLE */}
                    <motion.h2
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-4xl font-black leading-tight tracking-tight text-black md:text-6xl"
                    >
                        Rebuilding Lives Through
                        <br />
                        Compassion & Structured Action
                    </motion.h2>

                    {/* TEXT */}
                    <motion.div
                        initial={{ y: 70, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 1,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-10 space-y-7"
                    >
                        <p className="text-lg leading-[1.9] text-[#404040] md:text-xl">
                            Pragme India Foundation is built on a simple belief —
                            development becomes meaningful only when it restores dignity,
                            creates opportunities, and helps people rebuild their lives.
                        </p>

                        <p className="text-lg leading-[1.9] text-[#404040] md:text-xl">
                            As a Section 8 not-for-profit organization, the Foundation works
                            across education, healthcare, women empowerment, rural
                            development, child welfare, environmental awareness, and social
                            rehabilitation.
                        </p>

                        <p className="text-lg leading-[1.9] text-[#404040] md:text-xl">
                            Our initiatives focus on underserved communities, vulnerable
                            individuals, and families seeking support, stability,
                            empowerment, and long-term opportunities for growth.
                        </p>

                        <p className="text-lg leading-[1.9] text-[#404040] md:text-xl">
                            Through awareness, outreach, partnerships, and community-driven
                            programs, we aim to create sustainable social impact rooted in
                            compassion, inclusion, and action.
                        </p>
                    </motion.div>

                    {/* EMAIL BAR */}
                    <motion.div
                        initial={{ y: 70, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 max-w-3xl overflow-hidden rounded-tl-[40px] bg-[#61732a] shadow-2xl"
                    >
                        <div className="px-8 py-5">
                            <p className="text-center text-sm tracking-[0.08em] text-white md:text-xl">
                                pragmeindiafoundation@gmail.com
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}