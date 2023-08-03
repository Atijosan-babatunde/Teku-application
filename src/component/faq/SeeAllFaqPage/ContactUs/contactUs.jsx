import { PrimaryButton } from "../../../../shared/utils/button";
import Subscribe from "../../../subscribe/subscribe";
import styles from "../ContactUs/contactus.module.scss"
import { BsArrowUp } from "react-icons/bs";

const ContactUs = () => {
    return ( 
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <div className={styles.herosection}>
                        <h1 className={styles.herotitle}>
                            Contact us
                        </h1>
                        <p className={styles.heroparagraph}>
                           Send us a message if you can’t find what you are looking for?
                        </p>
                    </div>
                </div>
                <div className={styles.questionsection}>
                    <div className={styles.innerquestion}>
                        <h1 className={styles.innerh1}>
                            Still have questions?
                        </h1>
                        <p className={styles.innerp}>
                            You can send us a message if you can’t find what you are looking for?
                        </p>
                        <h2 className={styles.rowname}>Name</h2>
                        <input className={styles.calculatorinput} type="text" placeholder="Enter your full name" />

                        <h2 className={styles.rowname}>Email Address</h2>
                        <input className={styles.calculatorinput} type="email" placeholder="Enter your email address" />

                        <h2 className={styles.rowname}>Phone Number</h2>
                        <input className={styles.calculatorinput} type="tel" id="phone" placeholder="Enter your phone number" />

                        <h2 className={styles.rowname}>Describe your question</h2>
                        <textarea className={styles.calculatorinputtextarea} type="number" placeholder="Write here..." cols="20" />
                        <div className={styles.contactus}>
                            <PrimaryButton buttonText="Subscribe"></PrimaryButton>
                        </div>
                    </div>
                </div>
                <Subscribe />
            </div>
            <a href="#top" className={styles.topBTn}>
                <BsArrowUp className={styles.arrowup} />
            </a>
        </div>
     );
}
 
export default ContactUs;