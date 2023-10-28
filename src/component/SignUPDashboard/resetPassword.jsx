import styles from '../SignUPDashboard/CSS/resetpassword.module.scss'
import logo from '../../assets/svg/logo.svg'
import arrowright from '../../assets/png/arrowright.png'
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useState } from 'react';



const ResetPassword = () => {
    const [showErrorBox, setShowErrorBox] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [special, setSpecial] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text");
            return;
        }
        setConfirmPasswordType("password");
    };

    const handleChange2 = (event) => {
        const value = event.target.value;

        // Check for special characters
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        // Handle the conditions as needed
        if (hasSpecialCharacter) {
            setSpecial(true);
        }
        setPassword(value);
    };

    const validatePassword = () => {
        setShowErrorBox(!showErrorBox);

        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Handle the conditions as needed
        if (hasSpecialCharacter) {
            setSpecial(true);
        }
    };

    const validate = () => {
        return (
            password !== confirmPassword
        );
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <img src={logo} alt="" className={styles.resetimg} />
                <div className={styles.reseth1}>Reset password</div>
                <img src={arrowright} alt="" className={styles.arrowimg} />

                <div className={styles.inputholder}>
                    <h2 className={styles.rowname}>Password</h2>
                    <div className={styles.group}>
                        <input
                            className={styles.calculatorinputgroup}
                            type={passwordType}
                            placeholder="Enter password"
                            onChange={handleChange2}
                            onFocus={validatePassword}
                            value={password}
                            name="password"
                        />
                        <div className="input-group-btn">
                            <button
                                className={styles.visibility}
                                onClick={togglePassword}
                            >
                                {passwordType === "password" ? (
                                    <MdOutlineVisibilityOff />
                                ) : (
                                    <MdOutlineVisibility />
                                )}
                            </button>
                        </div>
                    </div>
                    <div style={{ display: showErrorBox  || password.length < 8 ? "" : "none" || special ? "none" : "", backgroundColor: showErrorBox || password.length < 8 ? "var(--White-Blue, #F0F3FF)" : "none" || special ? "none" : "" }} className={styles.color}>
                        <div
                            style={{ display: password.length < 8 ? " " : "none" }}
                        >
                            8 characters minimum
                        </div>
                        <div style={{ display: special ? "none" : "" }}>
                            At least one number or symbol (like !@#$%^&*)
                        </div>
                    </div>


                    <h2 className={styles.rowname}>Confirm password</h2>
                    <div className={styles.group}>
                        <input
                            className={styles.calculatorinputgroup}
                            type={confirmPasswordType}
                            placeholder="Enter password"
                            value={confirmPassword}
                            name="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="input-group-btn">
                            <button
                                className={styles.visibility}
                                onClick={toggleConfirmPassword}
                            >
                                {confirmPasswordType === "password" ? (
                                    <MdOutlineVisibilityOff />
                                ) : (
                                    <MdOutlineVisibility />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={styles.red}>Password does not match with the one above</div>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // onClick={registerUserData}
                            disabled={validate()}
                            style={{
                                backgroundColor: validate()
                                    ? "rgba(1, 27, 109, 0.20)"
                                    : " ",
                            }}
                        >
                            Reset password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;