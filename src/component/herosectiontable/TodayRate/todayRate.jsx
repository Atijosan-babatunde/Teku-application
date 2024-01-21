import styles from "../TodayRate/todayrate.module.scss";
import { BsFillSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetCurrencyPair } from "../../../shared/redux/slices/landing.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import international from "../../../assets/svg/international.svg";
import ReactLoading from "react-loading";
import { formatMoney } from "../../../shared/utils/moneyFormat";

const TodayRate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currencyData = useAppSelector(
    (state) => state.landing.getAllCurrencyData
  );
  const [data] = useState(currencyData);

  useEffect(() => {
    getCurrencyPair();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getCurrencyPair = () => {
    setLoading(true);
    dispatch(GetCurrencyPair())
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

  const seeAllTodayRate = () => {
    navigate("/see-all");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  if (data) {
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
                {data.map((prod, index) => (
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
                      {formatMoney(
                        prod.availableAmount,
                        prod.baseCurrency.code
                      )}
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
                      <button className={styles.btn} onClick={goToLogin}>
                        Request <BsFillSendFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {loading && (
              <ReactLoading color="blue" width={25} height={25} type="spin" />
            )}
            <div className={styles.dimbutton} onClick={seeAllTodayRate}>
              <button className={styles.seeallbut}>
                See all
                <MdKeyboardArrowRight />
              </button>
            </div>

            <div className={styles.inner}>
              {data.length < 1 && (
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

export default TodayRate;
