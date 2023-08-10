import FaqSection from "../faq/faq";
import HeroSection from "../herosection/herosection";
import Herosectiontable from "../herosectiontable/herosectiontable";
import styles from "../home/home.module.scss"
import RateCalculator from "../ratecalculator/ratecalculator";
import Subscribe from "../subscribe/subscribe";
import WhyChooseUs from "../whyChooseUs/whyChooseUs";
import Journey from "../Journey/journey";
import SignUp from "../SignUp/SignUp";
import { BsArrowUp } from "react-icons/bs";
import Header from "../header/header";
import Footer from "../footer/footer";


const Home = () => {
  return (
    <div className={styles.body}>
      <Header />
      <HeroSection />
      <div className={styles.parentinside}></div>
      <div id="todayrate">
        <Herosectiontable />
      </div>

      <RateCalculator />
      <WhyChooseUs />
      <div id="howitworks">
        <Journey />
      </div>
      <SignUp />
      <div id="faqs">
        <FaqSection />
      </div>
      <Subscribe />
      <a href="#top" className={styles.topBTn}>
        <BsArrowUp className={styles.arrowup} />
      </a>
      <Footer/>
    </div>
  );
}

export default Home;