import styles from "../../currency-rate/TransferMoneyModal/css/selectcurrencypairstep5.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import React, { useEffect, useState } from "react";
import copy from "../../../../assets/png/copy.png";
import blank from "../../../../assets/svg/blank.svg";
import { useAppSelector } from "../../../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { GetUsersBanksListed } from "../../../../shared/redux/slices/transaction.slices";
import { SaveTransactionToCart } from "../../../../shared/redux/slices/transaction.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const SelectCurrencyPairStep5 = ({
  setStep,
  dropDownValueFour,
  dropDownValueBank,
  dropDownValue,
  dropDownValueTwo,
  amount,
  country,
  purpose,
  paymentMethod,
  setDropDownValueBank,
  setPaymentMethod,
  setDropDownValueFour,
}) => {
  const [menuFour, setMenuFour] = useState(false);
  const [menuBank, setMenuBank] = useState(false);
  const [showThis, setShowThis] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const banksListed = useAppSelector(
    (state) => state.transaction.getBanksListed
  );
  const transactionCart = useAppSelector(
    (state) => state.transaction.saveTransactionToCart
  );
  // const [data] = useState(transactionCart)
  const [data] = useState(banksListed);
  let navigate = useNavigate();

  useEffect(() => {
    getBanksListed();
  }, [data]);

  const getBanksListed = () => {
    setLoading(true);
    dispatch(GetUsersBanksListed())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  const transactionCartData = () => {
    setLoading(true);
    let body = {
      baseCurrencyId: dropDownValue?.id,
      pairCurrencyId: dropDownValueTwo?.id,
      amount: parseFloat(amount),
      country: country?.label,
      purpose: purpose,
      paymentMethod: paymentMethod,
    };

    dispatch(SaveTransactionToCart(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        navigate("/payment-cart");
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  const validate = () => {
    return paymentMethod === "Select" || dropDownValueBank === null;
  };

  const amountFour = [
    { id: 1, paymentType: "Bank transfer", backend: "BANK_TRANSFER" },
    { id: 2, paymentType: "Cash Pickup", backend: "CASH_PICKUP" },
    { id: 3, paymentType: "Online Transfer", backend: "ONLINE_TRANSFER" },
  ];

  const changeValueFour = async (e) => {
    setPaymentMethod(e.backend);
  };

  const changeValueBank = async (e) => {
    setDropDownValueBank(e);
  };

  const goToPaymentCart = () => {
    if (amount) {
      transactionCartData();
    }
  };

  const goToStepFour = () => {
    setStep(2);
  };

  const goToStepSix = () => {
    setStep(6);
  };

  // COPY TO CLIPBOARD
  const [value, setValue] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  const onChange = React.useCallback(({target: {value}}) => {
    setValue(value);
    setCopied(true);
  }, [])

  const onClick = React.useCallback(({ target: { innerText } }) => {
    console.log(`Clicked on "${innerText}"!`);
  }, [])
  const onCopy = React.useCallback(() => {
    setCopied(true);
  }, [])




  if (data) {
    return (
      <div className={styles.parent}>
        <p className={styles.firsttext} onClick={goToStepFour}>
          <BsArrowLeft className={styles.arrow} />
          Go back to Enter Amount
        </p>
        <h1 className={styles.contenth1}>Payment details</h1>
        <p className={styles.contentp}>Make a payment to the account below.</p>

        <div className={styles.content}>
          <h2 className={styles.rowname}>Select payment method</h2>
          <Dropdown
            isOpen={menuFour}
            toggle={() => setMenuFour(!menuFour)}
            style={{ cursor: "pointer" }}
          >
            <DropdownToggle tag="a" className={styles.dropdownToggle}>
              <div className={styles.dropDownValue} style={{ textTransform: "capitalize" }}>
                {paymentMethod.split('_')?.join(' ').toLowerCase()}
              </div>
              <div className={styles.dropDownrow}>
                <div style={{ color: "#011B6D" }}>
                  <MdArrowDropDown style={{ fontSize: "2em" }} />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu className={styles.dropBox}>
              {amountFour.map((type, first) => (
                <DropdownItem
                  className={styles.value}
                  key={first}
                  onClick={() => changeValueFour(type)}
                >
                  {type.paymentType}{" "}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <h2 className={styles.rowname} style={{ marginTop: "3em" }}>
            Select Bank
          </h2>

          <Dropdown
            isOpen={menuBank}
            toggle={() => setMenuBank(!menuBank)}
            style={{ cursor: "pointer", marginBottom: "3em" }}
          >
            <DropdownToggle tag="a" className={styles.dropdownToggle}>
              <div className={styles.dropDownValue}>
                {dropDownValueBank?.bankName}
              </div>
              <div className={styles.dropDownrow}>
                <div style={{ color: "#011B6D" }}>
                  <MdArrowDropDown style={{ fontSize: "2em" }} />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu className={styles.dropBox}>
              {data.map((type, second) => (
                <DropdownItem
                  className={styles.value}
                  key={second}
                  onClick={() => changeValueBank(type)}
                  value={type.bankName}
                >
                  {type.bankName}{" "}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {showThis ? (
            <>
              <div className={styles.paymentconfimation}>
                <div className={styles.confimationcontent}>
                  <h1>Total amount to pay</h1>
                  <CopyToClipboard
                    onCopy={onCopy}
                    options={{ message: 'Whoa!' }}
                    text={value}>
                    <div className={styles.confimationsplit}>
                      <div className={styles.confimationamount}>
                        {dropDownValue?.code} <span>{amount}</span>
                      </div>
                      <img src={copy} alt="" onClick={onClick} />
                    </div>
                  </CopyToClipboard>

                  <section className="section">
                    {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                  </section>

                  <h1 style={{ marginTop: "2em" }}>Account details</h1>
                  <div className={styles.colorholder}>
                    <div className={styles.confimationsplit}>
                      <div className={styles.confimationbanknamet}>
                        <h3>Bank name</h3>
                        <p>{dropDownValueBank?.bankName}</p>
                      </div>
                      <img src={blank} alt="" />
                    </div>
                    <div>
                      <h3 className={styles.banknameh3}>Bank account number</h3>
                      <div className={styles.bankflex}>
                        <p className={styles.banknamep}>
                          {dropDownValueBank?.accountNo}
                        </p>
                        <img src={copy} alt="" />
                      </div>
                    </div>

                    <div>
                      <h3 className={styles.banknameh3}>Bank account name</h3>
                      <p className={styles.banknamep}>
                        {dropDownValueBank?.accountName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  disabled={validate()}
                  onClick={goToStepSix}
                  style={{
                    backgroundColor: validate()
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
                    "Confirm payment"
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.requestbut}>
                <button
                  className={styles.btnrequest}
                  disabled={validate()}
                  onClick={() => setShowThis(true)}
                  style={{
                    backgroundColor: validate()
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
                    "Generate account details"
                  )}
                </button>
              </div>

              <div className={styles.paylater} onClick={goToPaymentCart}>
                {loading ? (
                  <ReactLoading
                    color="white"
                    width={25}
                    height={25}
                    type="spin"
                  />
                ) : (
                  "Pay later (save for later)"
                )}
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default SelectCurrencyPairStep5;
