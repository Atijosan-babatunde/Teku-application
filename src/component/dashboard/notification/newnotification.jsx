import { useEffect, useState } from "react";
import styles from "../notification/css/newnotification.module.scss";
import notification from "../../../assets/svg/notification.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import customAxios from "../../../shared/utils/axios";
import { formatDate } from "../../../shared/utils/formatDate";

const NewNotification = ({ searchValue }) => {
  const [loading, setLoading] = useState(false);
  const [notificationsData, setNotificationsData] = useState(false);

  useEffect(() => {
    getNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const getNotifications = async () => {
    setLoading(true);

    try {
      const response = await customAxios.get(`/notifications/me`, {
        params: { search: searchValue }, // Send searchValue as a query parameter
      });
      console.log(response);
      setNotificationsData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  if (notificationsData) {
    return (
      <div className={styles.parent}>
        <div className={styles.content}>
          <>
            {notificationsData.map((prod, index) => (
              <div className={styles.contentinside} key={index}>
                <h1>{prod.title}</h1>
                <p>{prod.description}</p>
                <h2>{formatDate(prod.createdAt)}</h2>
              </div>
            ))}
          </>
          {loading && (
            <ReactLoading color="blue" width={25} height={25} type="spin" />
          )}
          <div className={styles.inner}>
            {notificationsData.length < 1 && (
              <div>
                <img src={notification} alt="middleimage" />
                <div className={styles.nocurrency}>No notification</div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default NewNotification;
