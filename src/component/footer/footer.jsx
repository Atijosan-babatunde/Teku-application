import styles from '../footer/footer.module.scss'
import logo from "../../assets/svg/logo.svg"

const Footer = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.LowerfooterParent}>
          <div className={styles.parentRow}>
            <div className={styles.rowOne}>
              <div className={styles.logoParent}>
                <div> <img src={logo} className={styles.Icon} alt="logo" /></div>
              </div>
              <div className={styles.footerdescfirst}>
                Access to all seamless transfer.
              </div>
              <div className={styles.footerdescfirst}>
                Send money to other parts of the countries
              </div>
            </div>


            <div className={styles.rowTwo}>
              <div className={styles.section}>
                <div className={styles.footerdesc}>Company</div>
                <div className={styles.top}>
                  <div className={styles.contentTitle}>About Us</div>
                  <div className={styles.contentTitle}>How it works</div>
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.footerdesc}>Support</div>
                <div className={styles.top}>
                  <div className={styles.contentTitle}>Contact Us</div>
                  <div className={styles.contentTitle}>FAQs</div>
                </div>
              </div>

              <div className={styles.sectionTwo}>
                <div className={styles.footerdesc}>Legal</div>
                <div className={styles.top}>
                  <div className={styles.contentTitle}>Terms & Condition</div>
                  <div className={styles.contentTitle}>Privacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;