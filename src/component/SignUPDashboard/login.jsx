import styles from "../SignUPDashboard/CSS/login.module.scss"
import logo from "../../assets/svg/logo.svg"


const LogIn = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <img src={logo} alt="logo" />
                    <h1 className={styles.headone}>
                        Access to all seamless transfer. Send money to other parts of the countries.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default LogIn;