import styles from "../notification/css/inbox.module.scss";
import { useState, useEffect } from "react";
import receivemail from "../../../assets/svg/receivemail.svg";
import eye from "../../../assets/svg/lucideeye.svg";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { GetInboxData } from "../../../shared/redux/slices/notification.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import customAxios from "../../../shared/utils/axios";

const InboxMessage = ({ searchValue }) => {
  const [loading, setLoading] = useState(false);
  const [inboxData, setInboxData] = useState(false);

  useEffect(() => {
    getInboxMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);


  console.log(inboxData)
  const getInboxMessages = async () => {
    setLoading(true);

    try {
      const response = await customAxios.get(`/message/me`, {
        params: { search: searchValue }, // Send searchValue as a query parameter
      });
      console.log(response);
      setInboxData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  if (inboxData) {
    return (
      <div className={styles.parent}>
        <div className={styles.content}>
          <>
            {inboxData.map((prod, index) => (
              <div className={styles.contentinside} key={index}>
                <h1>{`${prod.sender.firstName} ${prod.sender.lastName}`}</h1>
                <div className={styles.backcolor}>
                  <p>{prod.message}</p>
                  <span>
                    view <img src={eye} alt="" />
                  </span>
                </div>
                <h2>{prod.createdAt}</h2>
              </div>
            ))}
          </>
          {loading && (
            <ReactLoading color="blue" width={25} height={25} type="spin" />
          )}
          <div className={styles.inner}>
            {inboxData.length < 1 && (
              <div>
                <img src={receivemail} alt="middleimage" />
                <div className={styles.nocurrency}>No inbox</div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default InboxMessage;
