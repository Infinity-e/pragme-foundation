'use client';

import { motion } from 'framer-motion';
import {
    ClipboardCheck,
    Handshake,
    Heart,
    Leaf,
    ShieldCheck,
    Users,
    type LucideIcon,
} from 'lucide-react';

const topValues = [
    {
        title: 'Integrity',
        description: 'Transparent, ethical, and\ncompliant in every action.',
        color: '#80BF52',
        icon: ShieldCheck,
    },
    {
        title: 'Compassion',
        description: 'Serving with empathy,\ndignity, and human\nsensitivity.',
        color: '#17C3D1',
        icon: Heart,
    },
    {
        title: 'Accountability',
        description: 'Focused on measurable\nimpact and responsible\noutcomes.',
        color: '#7B5AF0',
        icon: ClipboardCheck,
    },
];

const bottomValues = [
    {
        title: 'Respect & Inclusion',
        description:
            'Ensuring equity for every\nindividual, especially the\nunder-served.',
        color: '#EA4C86',
        icon: Users,
    },
    {
        title: 'Empowerment',
        description:
            'Building community\nownership and enabling\nself-reliance.',
        color: '#E11163',
        icon: Handshake,
    },
    {
        title: 'Sustainability',
        description:
            'Driving long-term,\nclimate-conscious\ndevelopment.',
        color: '#4B377F',
        icon: Leaf,
    },
];

const puzzle = [
    { letter: 'I', color: '#8BC45A' },
    { letter: 'C', color: '#18C1CF' },
    { letter: 'A', color: '#785FF0' },
    { letter: 'R', color: '#E75184' },
    { letter: 'E', color: '#E01062' },
    { letter: 'S', color: '#4A377E' },
];

const BG_COLOR = '#f5f5f3';

type ValueItem = {
    title: string;
    description: string;
    color: string;
    icon: LucideIcon;
};

const ValueCard = ({
    item,
    delay,
}: {
    item: ValueItem;
    delay: number;
}) => (
    <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ y: -5 }}
        viewport={{ once: true }}
        transition={{
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
        }}
        className="group flex flex-col items-center text-center md:flex-row md:items-start md:text-left"
    >
        {/*
          Using icon components avoids broken image paths and keeps this section fully self-contained.
        */}
        {/* ICON */}
        <div
            className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-110"
            style={{
                border: `5px solid ${item.color}`,
            }}
        >
            <item.icon className="h-8 w-8" style={{ color: item.color }} aria-hidden />
        </div>

        {/* CONTENT */}
        <div className="mt-4 md:ml-4 md:mt-0.5">
            <h3 className="text-[1.08rem] font-black tracking-[-0.02em] text-[#121212]">
                {item.title}
            </h3>

            <p className="mt-2 whitespace-pre-line text-[0.92rem] leading-[1.7] tracking-[0.01em] text-[#4b4b4b]">
                {item.description}
            </p>
        </div>
    </motion.div>
);

export default function ValuesSection() {
    return (
        <section className="relative overflow-hidden bg-[#f5f5f3] py-20">
            {/* TOP CENTER SHAPES */}
            <div className="absolute left-[42%] top-0 hidden h-16 w-[300px] rounded-b-[34px] bg-[#dcbc38] xl:block" />

            <div className="absolute left-[38%] top-0 hidden h-20 w-[380px] rounded-b-[34px] bg-[#dfe2df] xl:block" />

            {/* RIGHT SIDE REFERENCE DESIGN */}
            <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[30%] overflow-hidden xl:block">
                {/* LARGE OLIVE DIAGONAL PANEL */}
                <motion.div
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[-8%] top-[-10%] h-[115%] w-[76%] bg-[#61732a]"
                    style={{
                        transform: 'rotate(26deg)',
                        transformOrigin: 'top right',
                        borderRadius: '90px',
                    }}
                />

                {/* LONG DARK GREEN STRIP */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[18%] top-[-10%] h-[125%] w-[12%] bg-[#145235]"
                    style={{
                        transform: 'rotate(26deg)',
                        transformOrigin: 'center',
                        borderRadius: '999px',
                    }}
                />

                {/* GOLD TOP SHAPE */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-[1%] top-[0%] h-[28%] w-[52%] border-[4px] border-white bg-[#dcbc38]"
                    style={{
                        transform: 'rotate(26deg)',
                        transformOrigin: 'top right',
                        borderRadius: '42px',
                    }}
                />

                {/* INNER LIGHT PANEL */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        delay: 0.35,
                    }}
                    className="absolute right-[9%] top-[8%] h-[14%] w-[28%] bg-white/12"
                    style={{
                        transform: 'rotate(26deg)',
                        transformOrigin: 'top right',
                        borderRadius: '24px',
                    }}
                />

                {/* THIN WHITE LINE */}
                <div
                    className="absolute right-[24%] top-[-18%] h-[130%] w-[2px] bg-white/80"
                    style={{
                        transform: 'rotate(26deg)',
                        transformOrigin: 'top right',
                    }}
                />

                {/* DOTS */}
                <div className="absolute bottom-20 right-10 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
                {/* HEADER */}
                <div className="mb-16 flex flex-col items-center justify-center text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-4 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#1f1f1f]"
                    >
                        Pragme India Foundation
                    </motion.span>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative bg-[#145235] px-10 py-3 shadow-xl"
                        style={{
                            clipPath:
                                'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                        }}
                    >
                        <h2 className="text-[1.6rem] font-black uppercase tracking-[-0.04em] text-white md:text-[2rem]">
                            Core Values
                        </h2>
                    </motion.div>
                </div>

                {/* TOP VALUES */}
                <div className="grid gap-y-10 gap-x-10 md:grid-cols-3 xl:pr-20">
                    {topValues.map((item, i) => (
                        <ValueCard
                            key={item.title}
                            item={item}
                            delay={i * 0.1}
                        />
                    ))}
                </div>

                {/* PUZZLE */}
                <div className="my-16 flex flex-wrap items-center justify-center  gap-y-8 md:flex-nowrap">
                    {puzzle.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, rotate: -10 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                                type: 'spring',
                                stiffness: 120,
                            }}
                            className="relative"
                        >
                            <div
                                className="relative flex h-24 w-24 items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                                style={{
                                    backgroundColor: item.color,
                                }}
                            >
                                {/* LEFT CUT */}
                                {index == 0 && (
                                    <div
                                        className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full"
                                        style={{
                                            backgroundColor: BG_COLOR,
                                        }}
                                    />
                                )}



                                {/* RIGHT CONNECT */}
                                {index !== puzzle.length - 1 && (
                                    <div
                                        className="absolute -right-3 top-1/2 z-10 h-6 w-6 -translate-y-1/2 rounded-full"
                                        style={{
                                            backgroundColor: item.color,
                                        }}
                                    />
                                )}

                                {/* TOP CONNECT */}
                                {(index === 1 || index === 4) && (
                                    <div
                                        className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full"
                                        style={{
                                            backgroundColor: item.color,
                                        }}
                                    />
                                )}

                                {/* BOTTOM CONNECT */}
                                {(index === 0 ||
                                    index === 3 ||
                                    index === 5) && (
                                        <div
                                            className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full"
                                            style={{
                                                backgroundColor: item.color,
                                            }}
                                        />
                                    )}

                                <span className="relative z-20 text-[1.7rem] font-black tracking-[-0.04em] text-white">
                                    {item.letter}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* BOTTOM VALUES */}
                <div className="grid gap-y-10 gap-x-10 md:grid-cols-3 xl:pr-20">
                    {bottomValues.map((item, i) => (
                        <ValueCard
                            key={item.title}
                            item={item}
                            delay={0.4 + i * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
