import FixedNav from "@/components/FixedNav";
import HeroSection from "@/components/HeroSection";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import WhatsThisSection from "@/components/WhatsThisSection";
import ToursSection from "@/components/ToursSection";
import HostSection from "@/components/HostSection";
import AuthoritySection from "@/components/AuthoritySection";
import GuideSection from "@/components/GuideSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FaqContactSection from "@/components/FaqContactSection";
import Footer from "@/components/Footer";
import GoldDivider from "@/components/GoldDivider";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <FixedNav />
      <HeroSection />
      <GoldDivider />
      <WhatsThisSection />
      <GoldDivider />
      <HowWeDoItSection />
      <GoldDivider />
      <ToursSection />
      <GoldDivider />
      <HostSection />
      <GoldDivider />
      <AuthoritySection />
      <GoldDivider />
      <ReviewsSection />
      <GoldDivider />
      <FaqContactSection />
      <GoldDivider />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
