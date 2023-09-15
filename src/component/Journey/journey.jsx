/**
 *
 * Journey
 *
 */
import { PrimaryButton } from "../../shared/utils/button";
import styles from "../Journey/journey.module.scss";
import step1 from './assets/adduser.png';
import step2 from './assets/file.png';
import step3 from './assets/paper.png';
import woman from './assets/woman.png';
import Union from '../../assets/png/Union.png'
import { Link } from "react-router-dom";

const Journey = () => {
   return (
      <div className={styles.parent}>
         <div className={styles.content}>
            <div className={styles.contentholder}>
               <div className={styles.desc}>
                  <div className={styles.cardtop}>
                     <div className={styles.topcontent}>
                        <div>
                           <h1>Your journey <br /> begins here</h1>
                           <p>Ways to transfer money in 3 different steps</p>
                        </div>
                        <img src={Union} alt="arrow" />
                     </div>
                     <div className={styles.cardone}>
                        <div className={styles.holder}>
                           <div className={styles.rounded}>
                              <img src={step1} alt="firstcardobey" />
                           </div>
                           <div className={styles.contentinside}>
                              <h1>Step 1</h1>
                              <h2>Create an account</h2>
                              <p>Register now to gain access to world-class foreign exchange
                                 solutions. You only need your email address
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className={styles.cardonetwo}>
                        <div className={styles.holder}>
                           <div className={styles.round}>
                              <img src={step2} alt="firstcard" />
                           </div>
                           <div className={styles.contentinside}>
                              <h1>Step 2</h1>
                              <h2>Enter recipient details</h2>
                              <p>Add the receiver bank account number and payment information details
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className={styles.cardonethree}>
                        <div className={styles.holder}>
                           <div className={styles.round}>
                              <img src={step3} alt="firstcard" />
                           </div>
                           <div className={styles.contentinside}>
                              <h1>Step 3</h1>
                              <h2>Confirm transaction and send</h2>
                              <p>Check the selected currencies and rates are correct, send your money.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.desc2}>
                  <img src={woman} alt="woman" />
               </div>
            </div>
            <div className={styles.journeybtn}>
               <Link to="/signup" className={styles.herobtn}>
                  <PrimaryButton buttonText="Create an account"></PrimaryButton>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Journey;
