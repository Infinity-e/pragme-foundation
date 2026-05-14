import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ImpactStats from '@/components/sections/ImpactStats';
import ProgramsPreview from '@/components/sections/ProgramPreview';
import CTASection from '@/components/sections/CTASection';
import TargetCardSection from '@/components/sections/pdf/cards';
import ImpactJourneyRoadmap from '@/components/sections/pdf/path';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <TargetCardSection />
            <ImpactJourneyRoadmap />
            <AboutPreview />
            <ImpactStats />
            <ProgramsPreview />
            <CTASection />
        </main>
    );
}