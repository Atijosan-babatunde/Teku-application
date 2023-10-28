import { useEffect, useState } from "react";
import styles from "../notification/css/newnotification.module.scss";
import notification from "../../../assets/svg/notification.svg";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { GetNotificationsData } from "../../../shared/redux/slices/notification.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewNotification = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const notificationData = useAppSelector(
    (state) => state.notification.getDataNotifications
  );
  const [data] = useState(notificationData);

  useEffect(() => {
    getNotifications();
  }, [data]);

  const getNotifications = () => {
    setLoading(true);
    dispatch(GetNotificationsData())
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

  if (data) {
    return (
      <div className={styles.parent}>
        <div className={styles.content}>
          <>
            {data.map((prod, index) => (
              <div className={styles.contentinside} key={index}>
                <h1>{prod.title}</h1>
                <p>{prod.description}</p>
                <h2>{prod.createdAt}</h2>
              </div>
            ))}
          </>
          <div className={styles.inner}>
            {data.length < 1 && (
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
