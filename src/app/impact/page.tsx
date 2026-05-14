import ImpactHero from '@/components/sections/impact/ImpactHero';
import ImpactStatsGrid from '@/components/sections/impact/ImpactStatsGrid';
import GrowthTimeline from '@/components/sections/impact/GrowthTimeline';
import FutureGoals from '@/components/sections/impact/FutureGoals';
import TestimonialsSection from '@/components/sections/impact/TestimonialsSection';

export default function ImpactPage() {
    return (
        <main>
            <ImpactHero />
            <ImpactStatsGrid />
            <GrowthTimeline />
            <FutureGoals />
            <TestimonialsSection />
        </main>
    );
}