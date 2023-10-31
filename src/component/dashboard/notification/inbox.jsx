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


const InboxMessage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const notificationData = useAppSelector(
    (state) => state.notification.getDataNotifications
  );
  const [data] = useState(notificationData);

  console.log(data)
  useEffect(() => {
    getInboxMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getInboxMessages = () => {
    setLoading(true);
    dispatch(GetInboxData())
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

  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <>
          {data && data.map((prod, index) => (
            <div className={styles.contentinside} key={index}>
              <h1>{prod.title}</h1>
              <div className={styles.backcolor}>
                <p>{prod.description}</p>
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
          {data.length < 1 && (
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
};

export default InboxMessage;
