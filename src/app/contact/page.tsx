import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import FAQSection from '@/components/sections/contact/FAQSection';

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactForm />
            <ContactInfo />
            <FAQSection />
        </main>
    );
}