import BannerReviewsSection from "@/components/pages/home/bannerReviews";
import BannerScrollerSection from "@/components/pages/home/bannerScroller";
import BannerStepsSection from "@/components/pages/home/bannerSteps";
import GameCardsSection from "@/components/pages/home/gameCards";
import HeroSection from "@/components/pages/home/hero";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BannerStepsSection />
      <BannerScrollerSection />
      <GameCardsSection />
      <BannerReviewsSection />
    </div>
  );
};

export default HomePage;
