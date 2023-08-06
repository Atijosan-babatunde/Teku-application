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


const Home = () => {
  return (
    <div className={styles.body}>
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
    </div>
  );
}

export default Home;