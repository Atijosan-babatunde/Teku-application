import styles from "../SignUPDashboard/CSS/login.module.scss"
import logo from "../../assets/svg/logo.svg"
import loginpic from "../../assets/svg/loginpic.svg"
import arrow from "../../assets/png/arrowright.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import React, { useState } from 'react'
import ForgetPasswordModal from "./forgetPasswordModal"


const LogIn = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordType, setPasswordType] = useState("password")

    const validate = () => {
        return !email || !password
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    // MODAL STATE

    const [showModal, setShowModal] = useState(false)

    function handleModalShow() {
        setShowModal(!showModal)
    }

    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <div className={styles.logoimg} onClick={gotoHome}>
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
                            <input className={styles.calculatorinput} type="email" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} />

                            <h2 className={styles.rowname}>Password</h2>
                            <div className="input-group">
                                <input className={styles.calculatorinput}
                                    type={passwordType}
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    name="password"
                                />
                                <div className="input-group-btn">
                                    <button className={styles.visibility} onClick={togglePassword}>
                                        {passwordType === "password" ? <MdOutlineVisibilityOff /> : < MdOutlineVisibility />}
                                    </button>
                                </div>
                            </div>

                            <p className={styles.forget} onClick={handleModalShow}>Forgot Password?</p>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    disabled={validate()}
                                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        {showModal && <ForgetPasswordModal {...{handleModalShow}}/>}
                        <p className={styles.donthave}>
                            Don’t have an account? <span><Link to="/signup">Register here</Link></span>
                        </p>
                    </div>
                    <p className={styles.donthave} style={{ marginTop: "1em" }}>
                        By clicking sign in, you agree to our <span>Terms & Conditions </span>and <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LogIn;