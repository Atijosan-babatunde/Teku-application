import styles from "../notification/css/notification.module.scss";
import NotificationSection from "./notificationSection";

const Notification = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <h1>Notification</h1>
          <p>You can see all notification and inbox here.</p>
        </div>
      </div>
      <div className={styles.herosection}>
        <NotificationSection />
      </div>
    </div>
  );
};

export default Notification;
