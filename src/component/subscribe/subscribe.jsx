import { PrimaryButton } from "../../shared/utils/button";
import styles from "../subscribe/subscribe.module.scss"
import { Link } from "react-router-dom";
import arrowimage from "../../assets/png/arrowright.png"

const Subscribe = () => {
    return ( 
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.firstrow}>
                   Subscribe to our newsletter and recent rate update.
                </div>
                <div className={styles.secondrow}>
                    <input className={styles.calculatorinput} type="email" placeholder="Enter email address"/>
                    <Link to="/" >
                        <PrimaryButton buttonText="Subscribe"></PrimaryButton>
                    </Link>
                </div>
            </div>
            <img src={arrowimage} alt="arrow" className={styles.arrowimage} />
        </div>
     );
}
 
export default Subscribe;