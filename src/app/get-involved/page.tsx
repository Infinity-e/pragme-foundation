import GetInvolvedHero from '@/components/sections/get-involved/GetInvolvedHero';
import DonationSection from '@/components/sections/get-involved/DonationSection';
import VolunteerSection from '@/components/sections/get-involved/VolunteerSection';
import PartnershipSection from '@/components/sections/get-involved/PartnershipSection';
import FinalCTA from '@/components/sections/get-involved/FinalCTA';
import ValuesSection from '@/components/sections/pdf/puzzle';

export default function GetInvolvedPage() {
    return (
        <main>
            <GetInvolvedHero />
            <ValuesSection />
            <DonationSection />
            <VolunteerSection />
            <PartnershipSection />
            <FinalCTA />
        </main>
    );
}