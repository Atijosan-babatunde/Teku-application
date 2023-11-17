/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../SignUPDashboard/CSS/emailotpmodal.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside";
import cancel from "../../assets/png/cancel.png";
import flyimg from "../../assets/svg/flymodal.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifyUserAuth } from "../../shared/redux/slices/landing.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const EmailOtpModal = ({ handleModalShow }) => {
  const otpLength = 6;
  const [otpValues, setOtpValues] = useState(Array(otpLength).fill(""));

  const navigate = useNavigate();
  const modalref = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const inputRefs = Array(otpLength)
    .fill(null)
    .map(() => useRef());

  const verifyUserData = () => {
    setLoading(true);
    let body = {
      token: otpValues.join(''),
    };

    dispatch(VerifyUserAuth(body))
      .unwrap()
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/welcome-personal-data");
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
    if (value && index < otpLength - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  useOnClickOutside(modalref, handleModalShow);

  // const goToWelcome = () => {
  //   navigate("/welcome-personal-data");
  // };

  const validate = () => {
    return otpValues.includes("") || otpValues.length !== otpLength;
  };
  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div>
          <div className={styles.closemodal} onClick={handleModalShow}>
            <img src={cancel} alt="close modal" />
          </div>
          <div className={styles.contentholder}>
            <img src={flyimg} alt="" />
            <h2 className={styles.modalhead}>OTP Verification</h2>
            <p className={styles.modalpara}>
              Enter the 5 digit OTP verification code that you have received in
              your registered Email address.
            </p>
            <div className={styles.otp}>
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  className={styles.inputotp}
                  type="text"
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength="1"
                  ref={inputRefs[index]}
                />
              ))}
            </div>

            <div className={styles.requestbut}>
              <button
                className={styles.btnrequest}
                disabled={validate()}
                onClick={verifyUserData}
                style={{
                  backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
                }}
              >
                {loading ? (
                  <ReactLoading
                    color="white"
                    width={25}
                    height={25}
                    type="spin"
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </div>
        </div>
        <p className={styles.donthave}>
          Resend code: <span>60secs</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EmailOtpModal;
