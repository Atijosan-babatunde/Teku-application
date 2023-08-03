import styles from "../herosection/herosection.module.scss"
// import backgroundimageone from "../../assets/svg/backgroundimageone.svg"
// import backgroundimagetwo from "../../assets/svg/backgroundimagetwo.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundimageone from "../../assets/svg/varone.gif";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { ConvertButton, PrimaryButton } from "../../shared/utils/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >

        <div className={styles.herocontent}>
          <div className={styles.title}>
            <span>Your Access</span> to Seamless Currency Exchange
          </div>
          <div className={styles.paragraph}>
            A secure way of buying foreign currency and exchange it
            into your local currency offering a very competitive exchange rate.
          </div>
          <div className={styles.btnholder}>
            <Link to="/" className={styles.herobtn}>
              <PrimaryButton buttonText="Create an account"></PrimaryButton>
            </Link>
            <Link to="/" className={styles.herobtn}>
              <ConvertButton buttonText="Convert Now"></ConvertButton>
            </Link>
          </div>
        </div>
        
        <SwiperSlide>
          <img src={backgroundimageone} alt="hero"/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={backgroundimagetwo} alt="hero" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
