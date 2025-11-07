import NavComponent from "@/components/pages/layout/nav";
import FooterComponent from "@/components/pages/layout/footer";
import BannerReviewsSection from "@/components/pages/home/bannerReviews";
import BannerScrollerSection from "@/components/pages/home/bannerScroller";
import BannerStepsSection from "@/components/pages/home/bannerSteps";
import BannerTargetSection from "@/components/pages/home/bannerTarget";
import GameCardsSection from "@/components/pages/home/GameCards";
import HeroSection from "@/components/pages/home/hero";

const HomePage = () => {
  return (
    <div className="text-white">
      <NavComponent />

      <HeroSection />
      <BannerStepsSection />
      <BannerScrollerSection />
      <BannerTargetSection />
      <GameCardsSection />
      <BannerReviewsSection />

      <FooterComponent />
    </div>
  );
};

export default HomePage;
