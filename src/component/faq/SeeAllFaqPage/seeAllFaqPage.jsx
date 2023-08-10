import Subscribe from '../../subscribe/subscribe';
import styles from '../SeeAllFaqPage/seeallfaqpage.module.scss'
import FaqAccordion from './FaqAccordion/faqAccordion';
import { PrimaryButton } from "../../../shared/utils/button";
import { useNavigate } from "react-router-dom";
import Header from '../../header/header';
import Footer from '../../footer/footer';


const SeeAllFaqPage = () => {
   const navigate = useNavigate()


   const goToContactPage = () => {
    navigate("/contactus")
   }

    return (
        <div className={styles.parent}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <div className={styles.herosection}>
                        <h1 className={styles.herotitle}>
                            Frequently Asked Questions
                        </h1>
                        <p className={styles.heroparagraph}>
                            Everything you need to know about making a transfer with Teku.
                        </p>
                    </div>
                </div>
                <FaqAccordion />
                <div className={styles.questionsection}>
                    <div className={styles.innerquestion}>
                        <h1 className={styles.innerh1}>
                            Still have questions?
                        </h1>
                        <p className={styles.innerp}>
                            You can send us a message if you can’t find what you are looking for?
                        </p>
                        <div className={styles.contactus} onClick={goToContactPage}>
                            <PrimaryButton buttonText="Contact us"></PrimaryButton>
                        </div>
                    </div>
                </div>
                <Subscribe />
            </div>
            <Footer/>
        </div>
    );
}

export default SeeAllFaqPage;