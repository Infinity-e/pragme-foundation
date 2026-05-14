import AboutHero from '@/components/sections/about/AboutHero';
import FoundationStory from '@/components/sections/about/FoundationStory';
import MissionVision from '@/components/sections/about/MissionVision';
import CoreValues from '@/components/sections/about/CoreValues';
import TransformationFlow from '@/components/sections/about/TransformationFlow';
import IntroductionSection from '@/components/sections/IntroductionSection';

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <IntroductionSection />
            <FoundationStory />
            <MissionVision />
            <CoreValues />
            <TransformationFlow />
        </main>
    );
}