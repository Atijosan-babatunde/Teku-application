import styles from "../SignUPDashboard/CSS/forgetpaswordmodal.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside";
import cancel from "../../assets/png/cancel.png";
import modalimg from "../../assets/png/modalimg.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FORGOT_PASSWORD } from "../../shared/redux/services/landing.services";
import ReactLoading from "react-loading";


const ForgetPasswordModal = ({ handleModalShow }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShow);

  const forgotPasswordFunc = async (email) => {
    setLoading(true);
    const endpoint = `/password/forgot.password`;
    try {
      const response = await FORGOT_PASSWORD(endpoint, { email });
      setLoading(false);
      if (response.data.status === 200) {
        // setConvertedCurrency(response.data.data.totalRate);
        setEmailSent(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(`Network error, Kindly check internet connections`);
    }
  };

  const validate = () => {
    return !email;
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div>
          <div className={styles.closemodal} onClick={handleModalShow}>
            <img src={cancel} alt="close modal" />
          </div>
          {emailSent ? (
            <div className={styles.contentholder}>
              <img src={modalimg} alt="" />
              <h2 className={styles.modalhead}>Reset password</h2>
              <p className={styles.modalpara}>
                Recover your password by providing correctly the details below.
              </p>
            </div>
          ) : (
            <div className={styles.contentholder}>
              <img src={modalimg} alt="" />
              <h2 className={styles.modalhead}>Forgot password?</h2>
              <p className={styles.modalpara}>
                A password recovery link has been sent to your email address.
                Kindly check your email.
              </p>
              <h2 className={styles.rowname}>Email address</h2>
              <input
                className={styles.calculatorinput}
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  disabled={validate()}
                  style={{
                    backgroundColor: validate()
                      ? "rgba(1, 27, 109, 0.20)"
                      : " ",
                  }}
                  onClick={() => forgotPasswordFunc(email)}
                >
                   {loading ? (
                  <ReactLoading color="white" width={25} height={25} type="spin" />
                ) : (
                  "Continue"
                )}
                </button>
              </div>
            </div>
          )}
        </div>
        {!emailSent ? (
          ""
        ) : (
          <p className={styles.donthave}>
            Already have an account?{" "}
            <span>
              <Link to="/login">Signin here</Link>
            </span>
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPasswordModal;
