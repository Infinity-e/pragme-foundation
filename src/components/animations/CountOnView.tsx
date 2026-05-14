'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type CountOnViewProps = {
    value: number;
    suffix?: string;
    duration?: number;
    className?: string;
};

export default function CountOnView({
    value,
    suffix = '',
    duration = 2.4,
    className,
}: CountOnViewProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.35,
    });

    return (
        <span ref={ref} className={className}>
            {inView ? <CountUp end={value} duration={duration} suffix={suffix} /> : `0${suffix}`}
        </span>
    );
}
