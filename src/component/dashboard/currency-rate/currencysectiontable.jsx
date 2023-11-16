import styles from "../currency-rate/css/currencysectiontable.module.scss";
import hot from "../../../assets/svg/hot.svg";
import ringing from "../../../assets/svg/ringing.svg";
import request from "../../../assets/svg/request.png";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import CurrencyTodayRate from "./currencyTodayRate";
import CurrencyAlert from "./currencyAlert";
import CurrencyCustomRequest from "./currencyCustomRequest";

const Currencysectiontable = () => {
  const [showTodayRate, setShowTodayRate] = useState(true);
  const [showCurrencyAlert, setShowCurrencyAlert] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showCustomRequest, setShowCustomRequest] = useState(false);

  const gotoTodayRate = () => {
    setShowTodayRate(true);
    setShowCurrencyAlert(false);
    setShowCustomRequest(false);
  };
  const gotoCurrency = () => {
    setShowCurrencyAlert(true);
    setShowTodayRate(false);
    setShowCustomRequest(false);
  };
  const gotoRequest = () => {
    setShowCustomRequest(true);
    setShowCurrencyAlert(false);
    setShowTodayRate(false);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.buttonrow}>
          <div
            className={styles.buttonhead}
            onClick={gotoTodayRate}
            style={{
              backgroundColor: showTodayRate ? "#fff" : "",
              color: showTodayRate ? "#000" : "",
            }}
          >
            <img src={hot} alt="hot" />
            Today's Rate
          </div>
          <div
            className={styles.buttonhead}
            onClick={gotoCurrency}
            style={{
              backgroundColor: showCurrencyAlert ? "#fff" : "",
              color: showCurrencyAlert ? "#000" : "",
            }}
          >
            <img src={ringing} alt="ringing" />
            Currency Alert
          </div>
          <div
            className={styles.buttonhead}
            onClick={gotoRequest}
            style={{
              backgroundColor: showCustomRequest ? "#fff" : "",
              color: showCustomRequest ? "#000" : "",
              paddingRight: "3em",
            }}
          >
            <img src={request} alt="request" />
            Make a custom request
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span>
              <FiSearch />
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: showTodayRate ? "" : "none" }}>
        <CurrencyTodayRate searchValue={searchValue} />
      </div>
      <div style={{ display: showCurrencyAlert ? "" : "none" }}>
        <CurrencyAlert searchValue={searchValue} />
      </div>
      <div style={{ display: showCustomRequest ? "" : "none" }}>
        <CurrencyCustomRequest />
      </div>
    </div>
  );
};

export default Currencysectiontable;
