import styles from "../SignUPDashboard/CSS/userProfile.module.scss";
import UserProfileSections from "./userProfileSections";
import { IoIosLogOut } from "react-icons/io";

const UserProfile = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <h1 className={styles.tophead}>My profile</h1>
        </div>
        <div className={styles.requestbut}>
          <button
            className={styles.btnrequest}
            // onClick={handleModalShowTransfer}
          >
            <IoIosLogOut className={styles.icon} />
            Log out
          </button>
        </div>
      </div>

      <div className={styles.herosection}>
        <UserProfileSections />
      </div>
    </div>
  );
};

export default UserProfile;
