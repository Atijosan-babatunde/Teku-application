import styles from "../SignUPDashboard/CSS/login.module.scss"
import logo from "../../assets/svg/logo.svg"
import loginpic from "../../assets/svg/loginpic.svg"
import arrow from "../../assets/png/arrowright.png"


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
                <div className={styles.disctwo}>
                    <div className={styles.insideDisc}>
                        <h2 className={styles.headwelcome}>
                            Welcome Back!
                        </h2>
                        <div className={styles.arrowstyle}>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <div className={styles.inputted}>
                            <h2 className={styles.rowname}>Email address</h2>
                            <input className={styles.calculatorinput} type="email" placeholder="Enter your email address" />

                            <h2 className={styles.rowname}>Password</h2>
                            <input className={styles.calculatorinput} type="password" placeholder="Enter password" />
                            <p className={styles.forget}>Forgot Password?</p>
                        </div>
                        <div className={styles.requestbut}>
                            <button
                                className={styles.btnrequest}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;