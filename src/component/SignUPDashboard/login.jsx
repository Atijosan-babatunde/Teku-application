import styles from "../SignUPDashboard/CSS/login.module.scss"
import logo from "../../assets/svg/logo.svg"
import loginpic from "../../assets/svg/loginpic.svg"


const LogIn = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <div className={styles.logoimg}>
                        <img src={logo} alt="logo" />
                    </div>
                    <h1 className={styles.headone}>
                        Access to all seamless transfer. Send money to other parts of the countries.
                    </h1>
                    <div className={styles.middlepic}>
                        <img src={loginpic} alt="middlepic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;