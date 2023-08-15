import styles from "../business/businessreg.module.scss"
import logo from '../../../../assets/svg/logo.svg'
import star from '../../../../assets/png/star.png'
import arrow from "../../../../assets/png/arrowright.png"
import { useNavigate } from "react-router-dom";
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { Link } from "react-router-dom"
import EmailOtpModal from "../../emailOtpModal";

const BusinessRegistration = () => {
    const options = useMemo(() => countryList().getData(), [])
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setcountry] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checkBox, setCheckBox] = useState('')
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")
    

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    // MODAL STATE

    const [showModal, setShowModal] = useState(false)

    function handleModalShow() {
        setShowModal(!showModal)
    }


    const validate = () => {
        return !businessName || !country || !email || !checkBox || password !== confirmPassword

    }

    const changeHandler = value => {
        setcountry(value)
    }


    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <h2 className={styles.headleftimg}>
                        Access to all seamless transfer. Send money to other parts of the countries.
                        <img src={star} alt="star" />
                    </h2>
                </div>
                <div className={styles.disctwo}>
                    <div className={styles.insidedisc}>
                        <div className={styles.logoimg} onClick={gotoHome}>
                            <img src={logo} alt="logo" />
                        </div>
                        <h2 className={styles.headcontent}>
                            Create a business account
                        </h2>
                        <div className={styles.arrowstyle}>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <h2 className={styles.headinner}>
                            Carefully fill in the right credentials.
                        </h2>
                        <div className={styles.decidebutton}>
                            <div className={styles.businessName}>
                                <h2 className={styles.rowname}>Business name</h2>
                                <input className={styles.calculatorinput} type="text" placeholder="Enter your business name" onChange={e => setBusinessName(e.target.value)} />
                            </div>
                            <div className={styles.formholder}>
                                <div className={styles.formholderone}>
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

                                </div>

                                <div className={styles.formholdertwo}>
                                    <h2 className={styles.rowname}>Country of business</h2>
                                    <Select
                                        options={options}
                                        value={country}
                                        onChange={changeHandler}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderColor: state.isFocused ? '#ccccc' : '#ccccc',
                                                borderRadius: "8px",
                                                height: "49px",
                                                marginTop: '14px',
                                            }),
                                        }}
                                    />

                                    <h2 className={styles.rowname}>Confirm password</h2>
                                    <div className="input-group">
                                        <input className={styles.calculatorinput}
                                            type={confirmPasswordType}
                                            placeholder="Enter password"
                                            value={confirmPassword}
                                            name="password"
                                            onChange={e => setConfirmPassword(e.target.value)}
                                        />
                                        <div className="input-group-btn">
                                            <button className={styles.visibility} onClick={toggleConfirmPassword}>
                                                {confirmPasswordType === "password" ? <MdOutlineVisibilityOff /> : < MdOutlineVisibility />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.clickhere}>
                                <input type='checkbox' onChange={e => setCheckBox(e.target.value)} />
                                Click here to agree to our <span>Terms and Conditions</span> and <span>Privacy Policy</span>
                            </div>

                        </div>
                        <div className={styles.continuebutton}>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    onClick={handleModalShow}
                                    disabled={validate()}
                                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                                >
                                    Create account
                                </button>
                            </div>
                            {showModal && <EmailOtpModal {...{ handleModalShow }} />}
                            <p className={styles.donthave}>
                                Already have an account? <span><Link to="/login">Sign in here </Link></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessRegistration;