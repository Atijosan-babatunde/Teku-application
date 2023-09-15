import styles from './css/dashboardHeader.module.scss'
import Logo from ".././../assets/svg/logo.svg";
import Passport from "../../assets/png/passport.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import usericon from '../../assets/svg/usericon.svg'
import settingsimg from '../../assets/svg/settingsimg.svg'
import logoutuser from '../../assets/svg/logoutuser.svg'

const DashboardHeader = () => {

    return (
        <div className={styles.parent}>
            <div className={styles.logoDiv}>
                <img src={Logo} className={styles.logo} alt="logo" />
            </div>

            <div className={styles.row}>
                <div className={styles.passportDiv}>
                    <img src={Passport} alt="img" className={styles.passport} />
                </div>
                {/* <div className={styles.name}>Timothy Godswill</div>
                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div> */}

                <div className={styles.dropdown}>
                    <div className={styles.name}>Babatunde <span><IoMdArrowDropdown /></span></div>
                    <div className={styles.dropdownContent}>
                        <div className={styles.dropDownRow}>
                            <div className={styles.logoDrodownDiv}>
                                <img
                                    src={usericon}
                                    className={styles.dropIcon}
                                    alt="horse"
                                />
                            </div>
                            <div className={styles.logoTitleDiv}>
                                <div className={styles.dropDowntitle}>
                                    Profile
                                </div>
                            </div>
                        </div>

                        <div className={styles.dropDownRow}>

                            <div className={styles.logoDrodownDiv}>
                                <img
                                    src={settingsimg}
                                    className={styles.dropIcon}
                                    alt="horse"
                                />
                            </div>
                            <div className={styles.logoTitleDiv}>
                                <div className={styles.dropDowntitle}>
                                    Settings
                                </div>
                            </div>

                        </div>
                        <div className={styles.dropDownRow}>

                            <div className={styles.logoDrodownDiv}>
                                <img
                                    src={logoutuser}
                                    className={styles.dropIcon}
                                    alt="horse"
                                />
                            </div>
                            <div className={styles.logoTitleDiv}>
                                <div className={styles.dropDowntitle}>
                                    Log out
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;