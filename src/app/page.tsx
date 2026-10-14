
import SiteNavbar from "@/components/layout/SiteNavbar";
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedComponentsSection from "@/components/sections/home/FeaturedComponentsSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";

export default function HomePage() {
  return (
    <>
      <SiteNavbar />

      <main>
        <HeroSection />
        <FeaturedComponentsSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
