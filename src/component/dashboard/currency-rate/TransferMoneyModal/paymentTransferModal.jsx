import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../../shared/Hooks/useOnClickOutside";
import cancel from "../../../../assets/png/cancel.png";
import styles from "../TransferMoneyModal/css/transfermodal.module.scss";
import SelectCurrencyPairStep1 from "./selectCurrencyPairStep1";
import SelectCurrencyPairStep2 from "./selectCurrencyPairStep2";
import SelectCurrencyPairStep3 from "./selectCurrencyPairStep3";
import SelectCurrencyPairStep4 from "./selectCurrencyPairStep4";
import SelectCurrencyPairStep5 from "./selectCurrencyPairStep5";
import SelectCurrencyPairStep6 from "./selectCurrencyPairStep6";

const PaymentTransferModal = ({ handleModalShowTransfer }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [recipientAmount, setRecipientAmount] = useState("2000");
  const [dropDownValue, setDropDownValue] = useState(null);
  const [dropDownValueTwo, setDropDownValueTwo] = useState(null);
  const [dropDownValueFour, setDropDownValueFour] = useState("Select");
  const [dropDownValueBank, setDropDownValueBank] = useState(null);
  const [currencyPair, setCurrencyPair] = useState(null);
  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [paymentDocument, setPaymentDocument] = useState(null);
  const [paymentInstruction, setPaymentInstruction] = useState("");
  const [paymentDescription, setPaymentDescription] = useState("");
  const [paymentDocumentCloud, setPaymentDocumentCloud] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BANK_TRANSFER");
  const [bankName, setBankName] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShowTransfer);

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div className={styles.closemodal} onClick={handleModalShowTransfer}>
          <img src={cancel} alt="close modal" />
        </div>
        <div className={styles.discone}>
          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 5 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 5 ? "#000" : "" }}
            >
              Select currency pair
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 5 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 2 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 2 ? "#000" : "" }}
            >
              Enter amount
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 2 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 3 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 3 ? "#000" : "" }}
            >
              Add recipient
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 3 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 4 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 4 ? "#000" : "" }}
            >
              Payment checkout
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 4 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 1 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 1 ? "#000" : "" }}
            >
              Payment details
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 1 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 6 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 6 ? "#000" : "" }}
            >
              Payment confirmation
            </h2>
          </div>
        </div>
        <div className={styles.disctwo}>
          <div style={{ display: step === 5 ? "" : "none" }}>
            <SelectCurrencyPairStep1
              setStep={setStep}
              setDropDownValue={setDropDownValue}
              dropDownValue={dropDownValue}
              dropDownValueTwo={dropDownValueTwo}
              setDropDownValueTwo={setDropDownValueTwo}
              setCurrencyPair={setCurrencyPair}
              currencyPair={currencyPair}
            />
          </div>
          <div style={{ display: step === 5 ? "" : "none" }}>
            <SelectCurrencyPairStep2
              setStep={setStep}
              dropDownValue={dropDownValue}
              dropDownValueTwo={dropDownValueTwo}
              amount={amount}
              setAmount={setAmount}
              recipientAmount={recipientAmount}
              currencyPair={currencyPair}
              setRecipientAmount={setRecipientAmount}
            />
          </div>

          <div style={{ display: step === 3 ? "" : "none" }}>
            <SelectCurrencyPairStep3
              setStep={setStep}
              country={country}
              purpose={purpose}
              paymentDocument={paymentDocument}
              paymentInstruction={paymentInstruction}
              paymentDescription={paymentDescription}
              paymentMethod={paymentMethod}
              setCountry={setCountry}
              setPurpose={setPurpose}
              setPaymentDocument={setPaymentDocument}
              setPaymentDocumentCloud={setPaymentDocumentCloud}
              setPaymentInstruction={setPaymentInstruction}
              setPaymentDescription={setPaymentDescription}
              setPaymentMethod={setPaymentInstruction}
            />
          </div>

          <div style={{ display: step === 4 ? "" : "none" }}>
            <SelectCurrencyPairStep4
              setStep={setStep}
              country={country}
              dropDownValue={dropDownValue}
              dropDownValueTwo={dropDownValueTwo}
              amount={amount}
              paymentDocumentCloud={paymentDocumentCloud}
              currencyPair={currencyPair}
              setAmount={setAmount}
              setTotalAmount={setTotalAmount}
              recipientAmount={recipientAmount}
              setPurpose={setPurpose}
              setPaymentDocument={setPaymentDocument}
              setPaymentInstruction={setPaymentInstruction}
              setPaymentDescription={setPaymentDescription}
              setPaymentMethod={setPaymentInstruction}
            />
          </div>

          <div style={{ display: step === 1 ? "" : "none" }}>
            <SelectCurrencyPairStep5
              setStep={setStep}
              setPaymentMethod={setPaymentMethod}
              setBankName={setBankName}
              dropDownValueFour={dropDownValueFour}
              dropDownValueBank={dropDownValueBank}
              dropDownValue={dropDownValue}
              dropDownValueTwo={dropDownValueTwo}
              country={country}
              purpose={purpose}
              paymentMethod={paymentMethod}
              amount={amount}
              setDropDownValueFour={setDropDownValueFour}
              setDropDownValueBank={setDropDownValueBank}
            />
          </div>

          <div style={{ display: step === 6 ? "" : "none" }}>
            <SelectCurrencyPairStep6
              setStep={setStep}
              country={country}
              totalAmount={totalAmount}
              purpose={purpose}
              dropDownValueBank={dropDownValueBank}
              dropDownValue={dropDownValue}
              dropDownValueTwo={dropDownValueTwo}
              paymentDocument={paymentDocument}
              paymentInstruction={paymentInstruction}
              paymentDescription={paymentDescription}
              paymentMethod={paymentMethod}
              confirmation={confirmation}
              setConfirmation={setConfirmation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransferModal;
