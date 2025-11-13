import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ConferenceInfo from "../components/ConferenceInfo";
import Venue from "../components/Venue";
import Sponsors from "../components/Sponsors";
import RegistrationSection from "../components/RegistrationSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CCESMHL - 2025</title>
        <link rel="canonical" href="https://amrit2025.amritconferences.in/" />
        <meta
          name="2nd INTERNATIONAL"
          content="CCESMHL - 2025"
        />
      </Helmet>
      {/* <Marquee /> */}
      <Header />
      <HeroSection />
      <ConferenceInfo />
      <AboutSection />
      <RegistrationSection />
      <Venue />
      <Sponsors />
      {/* <CMT /> */}
      <Footer />
    </>
  );
};

export default Home;
