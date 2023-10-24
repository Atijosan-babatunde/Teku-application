import styles from '../footer/footer.module.scss'
import logo from "../../assets/svg/logo.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              <div className={styles.mediaflex}>
                <a href="goggle.com">Instagram</a>
                <a href="goggle.com">Facebook</a>
                <a href="goggle.com">LinkedIn</a>
                <a href="goggle.com">Twitter</a>
              </div>

              <div className={styles.copyright}>© {currentYear} Teku. All rights reserved.</div>
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