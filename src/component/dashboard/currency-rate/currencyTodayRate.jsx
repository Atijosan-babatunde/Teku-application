import styles from "../currency-rate/css/currencytodayrate.module.scss";
import { BsFillSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequestModal from "./RequestModal/requestModal";
import international from "../../../assets/svg/international.svg";
import ReactLoading from "react-loading";
import customAxios from "../../../shared/utils/axios";
import { formatMoney } from "../../../shared/utils/moneyFormat";

const CurrencyTodayRate = ({ searchValue }) => {
  const [loading, setLoading] = useState(false);
  const [currencyPairData, setCurrencyPairData] = useState();
  const [showModal, setShowModal] = useState(false);

  function handleModalShowRequest() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    getCurrencyPair();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const getCurrencyPair = async () => {
    setLoading(true);
    try {
      const response = await customAxios.get(`/pair`, {
        params: { search: searchValue }, // Send searchValue as a query parameter
      });
      setCurrencyPairData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  if (currencyPairData) {
    return (
      <div className={styles.parent}>
        <div className={styles.content}>
          {/* <div className={styles.loader}>
                    {loading && (
                        <ReactLoading color="blue" width={20} height={20} type="spin" />
                    )}
                </div> */}
          <div className="table-responsive">
            <table className="table table-striped table-borderless">
              <thead className={styles.tablerow}>
                <tr>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}
                  >
                    Currency Pair
                  </th>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}
                  >
                    Rate
                  </th>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{ paddingBottom: "1.5000em" }}
                  >
                    Available Amount
                  </th>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{ paddingBottom: "1.5000em" }}
                  >
                    Sending Method
                  </th>
                  <th
                    className={styles.tablehead}
                    scope="col"
                    style={{ paddingBottom: "1.5000em" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currencyPairData.map((prod, index) => (
                  <tr style={{}} key={index}>
                    <td
                      className={styles.tabledata}
                      style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}
                    >
                      <img
                        src={prod.baseCurrency.icon}
                        alt=""
                        className={styles.flagstyle}
                      />
                      <span className={styles.flagnamestyle}>
                        {prod.baseCurrency.code}
                      </span>
                      <span className={styles.dash}>-</span>
                      <img
                        src={prod.pairCurrency.icon}
                        alt=""
                        className={styles.flagstyle}
                      />
                      <span className={styles.flagnamestyle}>
                        {prod.pairCurrency.code}
                      </span>
                    </td>
                    <td
                      className={styles.tabledata}
                      style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}
                    >
                      {formatMoney(prod.rate, prod.pairCurrency.code)}
                    </td>
                    <td
                      className={styles.tabledata}
                      style={{ paddingTop: "1.5000em" }}
                    >
                      {formatMoney(prod.availableAmount, prod.pairCurrency.code)}
                    </td>
                    <td
                      className={styles.tabledata}
                      style={{ paddingTop: "1.5000em" }}
                    >
                      {prod.method}
                      <div
                        className={styles.tableparagraph}
                        style={{ textTransform: "capitalize" }}
                      >
                        {prod.sendingMethod.split("_")?.join(" ").toLowerCase()}
                      </div>
                    </td>
                    <td
                      className={styles.tabledata}
                      style={{ paddingTop: "1em" }}
                    >
                      <button
                        className={styles.btn}
                        onClick={handleModalShowRequest}
                      >
                        Request <BsFillSendFill />
                      </button>
                    </td>
                    {showModal && (
                      <RequestModal {...{ handleModalShowRequest }} />
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {loading && (
              <ReactLoading color="blue" width={25} height={25} type="spin" />
            )}
            <div className={styles.inner}>
              {currencyPairData.length < 1 && (
                <div>
                  <img src={international} alt="middleimage" />
                  <div className={styles.nocurrency}>No rate today</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default CurrencyTodayRate;
