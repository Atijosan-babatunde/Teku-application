import styles from "../../currency-rate/TransferMoneyModal/css/selectCurrencyPairStep2.module.scss";
import switchimg from "../../../../assets/png/switch.png";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useAppSelector } from "../../../../shared/redux/reduxHooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GET_CURRENCY_CALCULATOR } from "../../../../shared/redux/services/landing.services";

const SelectCurrencyPairStep2 = ({
  setStep,
  dropDownValue,
  dropDownValueTwo,
  amount,
  currencyPair,
  setAmount,
  setRecipientAmount,
}) => {
  // const [payment, setPayment] = useState('')
  const [loading, setLoading] = useState(false);
  const currencyCode = useAppSelector(
    (state) => state.landing.getAllCurrencyCode
  );
  const [data] = useState(currencyCode);
  const [convertedCurrency, setConvertedCurrency] = useState("");

  const makeCurrencyConversion = async (amount) => {
    setLoading(true);
    const endpoint = `/pair/rate?baseCurrencyId=${dropDownValue?.id}&pairCurrencyId=${dropDownValueTwo?.id}&baseAmount=${amount}`;
    try {
      const response = await GET_CURRENCY_CALCULATOR(endpoint);
      setLoading(false);
      if (response.data.status === 200) {
        setConvertedCurrency(response.data.data.totalRate);
        setRecipientAmount(response.data.data.totalRate);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(`Network error, Kindly check internet connections`);
    }
  };

  const getAmountPercentage = (amount) => {
    const totalAmount = (parseFloat(amount) / 100) * 10;
    return totalAmount;
  };

  const handleRecipiantGet = (e) => {
    if (e.target.value) {
      setAmount(e.target.value);
      makeCurrencyConversion(e.target.value);
    }
  };

  const goToStepThree = () => {
    setStep(3);
  };

  const goToStepOne = () => {
    setStep(1);
  };

  if (data) {
    return (
      <div className={styles.parent}>
        <p className={styles.firsttext} onClick={goToStepOne}>
          <BsArrowLeft className={styles.arrow} />
          Go back to select currency pair
        </p>
        <div className={styles.content}>
          <h1>Enter amount</h1>

          <div className={styles.firstdiv}>
            <div className={styles.flagholder}>
              <div className={styles.flagcountry}>
                <img
                  src={dropDownValue?.icon}
                  alt=""
                  className={styles.flagimg}
                />
                <p className={styles.secondhalfp}>{dropDownValue?.code}</p>
              </div>
              <p className={styles.dash}>-</p>
              <div className={styles.flagcountry}>
                <img
                  src={dropDownValueTwo?.icon}
                  alt=""
                  className={styles.flagimg}
                />
                <p className={styles.secondhalfp}>{dropDownValueTwo?.code}</p>
              </div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Current rate:</div>
              <div className={styles.firstdivp}>
                {" "}
                {`1 ${currencyPair?.baseCurrency?.code} = ${currencyPair?.rate} ${currencyPair?.pairCurrency?.code}`}
              </div>
            </div>
            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Available amount:</div>
              <div className={styles.firstdivp}>
                {currencyPair?.availableAmount}
              </div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Sending method:</div>
              <div className={styles.firstdivp} style={{textTransform: "capitalize"}}>
                {currencyPair?.sendingMethod.split('_')?.join(' ').toLowerCase()}
              </div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Minimum order request:</div>
              <div className={styles.firstdivp}>{currencyPair?.pairCurrency?.code} {currencyPair?.minimumOrderRequest}</div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Processing time:</div>
              <div className={styles.firstdivp}>Within {currencyPair?.processingTime}</div>
            </div>
          </div>

          <div className={styles.secondflex}>
            <div className={styles.firsthalf}>
              <h2 className={styles.rowname}>You pay</h2>
              <input
                className={styles.calculatorinput}
                type="number"
                onChange={handleRecipiantGet}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-", "."].includes(e.key) &&
                  e.preventDefault()
                }
                value={amount}
              />
              <p className={styles.undertext}>
                Minimum amount: <span>10 {currencyPair?.baseCurrency?.code}</span>
              </p>

              <h2 className={styles.rowname}>Recipient get</h2>
              <input
                className={styles.calculatorinput}
                type="number"
                placeholder={convertedCurrency}
                value={convertedCurrency ? convertedCurrency : null}
                readOnly
              />
              <p className={styles.undertext}>
                Transfer fee: <span>{getAmountPercentage(amount) ?? 0} {currencyPair?.baseCurrency?.code}</span>
              </p>
            </div>

            <div className={styles.secondhalf}>
              <div
                className={styles.flagcountryf}
                style={{ marginTop: "1.7000em" }}
              >
                <img
                  src={dropDownValue?.icon}
                  alt=""
                  className={styles.flagimgg}
                />
                <p className={styles.secondhalfpara}>{dropDownValue?.code}</p>
              </div>

              <img src={switchimg} alt="" className={styles.middleimg} />
              <div
                className={styles.flagcountryf}
                style={{ marginBottom: "1em" }}
              >
                <img
                  src={dropDownValueTwo?.icon}
                  alt=""
                  className={styles.flagimgg}
                />
                <p className={styles.secondhalfpara}>
                  {dropDownValueTwo?.code}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.exchange}>
          </div>
        </div>
        <div className={styles.requestbut}>
          <button
            className={styles.btnrequest}
            // disabled={validate()}
            onClick={goToStepThree}
          // style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
          >
            {loading ? (
              <ReactLoading color="white" width={25} height={25} type="spin" />
            ) : (
              "Continue"
            )}
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default SelectCurrencyPairStep2;
