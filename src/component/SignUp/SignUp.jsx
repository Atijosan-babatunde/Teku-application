/**
 *
 * SignUp
 *
 */
import styles from '../SignUp/signup.module.scss'
// import { Link } from "react-router-dom";
// import woman from './assets/lady_laptop.png';


const SignUp = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.leftsection}>
        {/* <img src={woman} alt="" /> */}
      </div>
      <div className={styles.rightsection}>
        <h1>
          Sign up now!
          <br /> Join millions of users
        </h1>
        <p>We will be there for you 24/7 to help you with your transactions</p>
          <button>Create an account</button>
      </div>
    </div>
  );
}

export default SignUp;