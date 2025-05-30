import Accommodations from "./accommodations/accommodations";
import Banner from "./banner/banner";
import Feature from "./feature/feature";
import Footer from "./footer/footer";
import HeaderOne from "./header/HeaderOne";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import Services from "./services/services";
import Testimonial from "./testimonial/testimonial";
import Videoarea from "./videoarea/videoarea";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home" />
        <HeaderOne />
        <Banner />
        <Accommodations />
        <Videoarea />
        <Services />
        <Feature />
        <Testimonial />
        <Footer />
        <ScrollToTopButton />
    </>
  );
}
