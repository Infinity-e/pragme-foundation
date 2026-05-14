import ProgramsHero from '@/components/sections/programs/ProgramHero';
import ProgramsGrid from '@/components/sections/programs/ProgramGrid';
import BeneficiariesSection from '@/components/sections/programs/BeneficiariesSection';
import ProgramActivities from '@/components/sections/programs/ProgramActivities';
import ProgramsCTA from '@/components/sections/programs/ProgramCTA';
import VisionMissionSection from '@/components/sections/corevalues';

export default function ProgramsPage() {
    return (
        <main>
            <ProgramsHero />
            <VisionMissionSection />
            <ProgramsGrid />
            <BeneficiariesSection />
            <ProgramActivities />
            <ProgramsCTA />
            
        </main>
    );
}