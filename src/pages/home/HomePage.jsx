import FilterPage from "../../components/filter/FilterPage";

import HeroSection from "../../components/heroSection/HeroSection";
import LayoutPage from "../../components/layout/LayoutPage";
import ProductCard from "../../components/products/ProductCard";
import Testimonial from "../../components/testimonials/Testimonial";
import Track from "../../components/track/TrackPage";

const HomePage = () => {
  return (
    <LayoutPage>
      <HeroSection />
      <FilterPage />
      <ProductCard />
      <Track />
      <Testimonial />
    </LayoutPage>
  );
};

export default HomePage;
