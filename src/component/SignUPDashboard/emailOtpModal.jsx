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
import { useAppSelector } from "../../shared/redux/reduxHooks";
import ReactLoading from "react-loading";

const EmailOtpModal = ({ handleModalShow }) => {
  const [firstSpace, setFirstSpace] = useState("");
  const [secondSpace, setSecondSpace] = useState("");
  const [thirdSpace, setThirdSpace] = useState("");
  const [fourthSpace, setFourthSpace] = useState("");
  const [fifthSpace, setFifthSpace] = useState("");
  const [sixthSpace, setSixthSpace] = useState("");
  const navigate = useNavigate();
  const modalref = useRef();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const verifyDetails = useAppSelector((state) => state.landing.verifyAuthData);
  const [data] = useState(verifyDetails);

  const verifyUserData = () => {
    setLoading(true);
    let body = {
      token:""
    };

    dispatch( VerifyUserAuth(body))
      .unwrap()
      .then(() => {
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

  useOnClickOutside(modalref, handleModalShow);

  // const goToWelcome = () => {
  //   navigate("/welcome-personal-data");
  // };

  const validate = () => {
    return (
      !firstSpace ||
      !secondSpace ||
      !thirdSpace ||
      !fourthSpace ||
      !fifthSpace ||
      !sixthSpace
    );
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
              <input
                className={styles.inputotp}
                type="text"
                onChange={(e) => setFirstSpace(e.target.value)}
                maxlength="1"
              />
              <input
                className={styles.inputotp}
                type="text"
                onChange={(e) => setSecondSpace(e.target.value)}
                maxlength="1"
              />
              <input
                className={styles.inputotp}
                type="text"
                onChange={(e) => setThirdSpace(e.target.value)}
                maxlength="1"
              />
              <input
                className={styles.inputotp}
                type="text"
                onChange={(e) => setFourthSpace(e.target.value)}
                maxlength="1"
              />
              <input
                className={styles.inputotp}
                type="text"
                onChange={(e) => setFifthSpace(e.target.value)}
                maxlength="1"
              />
              <input
                className={styles.inputotp}
                type="text"
                onChange={(e) => setSixthSpace(e.target.value)}
                maxlength="1"
              />
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
                Continue
              </button>
              {loading && (
                <ReactLoading color="blue" width={25} height={25} type="spin" />
              )}
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
