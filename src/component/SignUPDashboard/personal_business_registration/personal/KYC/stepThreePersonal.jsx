/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";
import styles from "../KYC/CSS/stepthreepersonal.module.scss";
import steptwoimg from "../../../../../assets/png/phonecall.png";
import PhoneInput from "react-phone-input-2";
import { BsArrowLeft } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import customAxios from "../../../../../shared/utils/axios";

const StepThreePersonal = ({ setStep, formData, setFormData }) => {
  const [stepOtp, setStepOtp] = useState(1);
  const [loading, setLoading] = useState(false);
  const otpLength = 6; // Define the length of the OTP
  const [otpValues, setOtpValues] = useState(Array(otpLength).fill(""));
  const [phoneNumber, setPhoneNumber] = useState(formData.phone_no);
  const [resendTimer, setResendTimer] = useState(60);

  const inputRefs = Array(otpLength)
    .fill(null)
    .map(() => useRef());

  const handlePhoneNumberChange = (phone) => {
    setPhoneNumber(phone);
    setFormData({ ...formData, phone_no: phone });
  };

  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
    if (value && index < otpLength - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const validatePhoneNumber = () => {
    return !phoneNumber;
  };

  const validateOtp = () => {
    return otpValues.includes("") || otpValues.length !== otpLength;
  };

  const handleRequestOtp = async () => {
    if (validatePhoneNumber()) {
      toast.error("Please enter a valid phone number.");
    }
    try {
      setLoading(true);

      const response = await customAxios.post(`/kyc/sms`, {
        phone_number: formData.phone_no,
      });
      console.log(response);

      if (response.success) {
        setLoading(false);
        setStep(5);
      }
      setLoading(false);
      toast.error("An error occured");
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
    // setStepOtp(2);
    // startResendTimer();
  };

  const handleContinue = () => {
    if (validateOtp()) {
      toast.error("Please enter a valid OTP.");
    } else {
      setStep(4);
    }
  };

  const startResendTimer = () => {
    setResendTimer(60);
    const interval = setInterval(() => {
      if (resendTimer > 0) {
        setResendTimer((prevResendTimer) => prevResendTimer - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  useEffect(() => {
    if (resendTimer === 0) {
      toast.success("Resend code available!");
    }
  }, [resendTimer]);

  return (
    <div className={styles.parent}>
      <h1 className={styles.stepnumber}>
        <BsArrowLeft onClick={() => setStep(2)} className={styles.arrow} />
        Step 3
      </h1>
      <div className={styles.disctwocontent}>
        <div className={styles.writeup}>
          <h2 className={styles.headtwo}>Phone number verification</h2>
          <p className={styles.paratwo}>
            Input your phone number where an OTP authentication code will be
            sent to complete this process.
          </p>
        </div>

        <img src={steptwoimg} alt="" />
      </div>

      {stepOtp === 1 && (
        <div>
          <div className={styles.holder}>
            <h2 className={styles.rowname}>Phone number</h2>
            <fieldset className="phone-number-input-wrap">
              <PhoneInput
                required
                inputProps={{
                  name: "phone_no",
                  required: true,
                  autoFocus: true,
                }}
                placeholder="Enter phone number"
                country={"ng"}
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                containerClass="input-phone-container"
                inputClass="input-class-for-phone-number"
              />
            </fieldset>
          </div>

          <div className={styles.requestbut}>
            <button
              className={styles.btnrequest}
              disabled={validatePhoneNumber()}
              onClick={handleRequestOtp}
              style={{
                backgroundColor: validatePhoneNumber()
                  ? "rgba(1, 27, 109, 0.20)"
                  : " ",
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
                "Request OTP"
              )}
            </button>
          </div>
        </div>
      )}

      {stepOtp === 2 && (
        <div>
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
              disabled={validateOtp()}
              onClick={handleContinue}
              style={{
                backgroundColor: validateOtp() ? "rgba(1, 27, 109, 0.20)" : " ",
              }}
            >
              Continue
            </button>
            <p className={styles.donthave}>
              Resend code: <span>{resendTimer} secs</span>
            </p>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default StepThreePersonal;
