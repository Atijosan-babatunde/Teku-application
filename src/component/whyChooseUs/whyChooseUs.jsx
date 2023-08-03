import styles from "../whyChooseUs/whychooseus.module.scss"
import image1 from './assets/seamless_transaction.png';
import image2 from './assets/safe_and_secure.png';
import image3 from './assets/competitive_rates.png';
import whyarrow from '../../assets/png/whyarrow.png';



const WhyChooseUs = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <img src={whyarrow} alt="whyarrow" className={styles.arrow} />
                <div className={styles.whychooseushead}>
                    Why Choose Us
                </div>
                <p className={styles.ptag}>
                    We help individuals and businesses manage foreign exchange and pay
                    across borders. We allow instant access to the most accurate foreign currency, thanks to
                    convenient cashless payment methods and the use of our secure system,
                    we are trusted in many industries.
                </p>
                <div className={styles.desc}>
                    <div className={styles.flexinner}>
                        <img src={image1} alt="firstimage" />
                        <h1 className={styles.head1}>
                            Seamless transaction
                        </h1>
                        <p className={styles.pone}>
                            We are here to make every step of your transaction easy, convenient.
                        </p>
                    </div>
                    <div className={styles.flexinner}>
                        <img src={image2} alt="secondimage" />
                        <h1 className={styles.head1}>
                            Safe and secure
                        </h1>
                        <p className={styles.pone}>
                            Our processes are safe and secure, we allow you to exchange your money with peace of mind.
                        </p>
                    </div>
                    <div className={styles.flexinner}>
                        <img src={image3} alt="secondimage" />
                        <h1 className={styles.head1}>
                            Competitive rates
                        </h1>
                        <p className={styles.pone}>
                            We offer competitive rates while making transactions and we strive to help you achieve the best possible rate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;