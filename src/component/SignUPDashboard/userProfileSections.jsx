import styles from '../SignUPDashboard/CSS/userprofilesections.module.scss'
import userpassport from '../../assets/png/passport.jpg'
import { LuFileEdit } from 'react-icons/lu'
import {IoIosArrowForward} from 'react-icons/io'
// import {AiOutlinePicture} from 'react-icons/ai'



const UserProfileSections = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.cardholder}>
                    <div className={styles.userimg}>
                        <img src={userpassport} alt="" className={styles.userpassportimg}/>
                        {/* <span><AiOutlinePicture/></span> */}
                    </div>
                    <div className={styles.username}>
                        <div className={styles.name}>Tresure Sikiru</div>
                        <div className={styles.country}>
                            <div className={styles.countryh1}>Nigerian</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.kycreg}>
                <div className={styles.kyccontent}>
                    <h1 className={styles.kych1}>KYC Verification</h1>
                    <div className={styles.kycflex}>
                        <p>
                            You have not done your KYC Verification. Therefore some features
                            are being restricted. Kindly start your KYC Verification process
                            to continue using this application.
                        </p>

                        <h3>
                            Start KYC Verification{" "}
                            <IoIosArrowForward className={styles.arrow} />
                        </h3>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <div className={styles.contenth2}>Personal Information</div>
                    <div className={styles.editholder}>
                        <div className={styles.edith1}><LuFileEdit className={styles.icon} />Edit</div>
                    </div>
                </div>

                <div className={styles.contentdata}>
                    <div className={styles.firstdivflex}>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>First name</div>
                            <div className={styles.firstp}>Timothy</div>
                        </div>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}> Last name</div>
                            <div className={styles.firstp}>Godswill</div>
                        </div>
                    </div>

                    <div className={styles.firstdivflex}>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>Email address</div>
                            <div className={styles.firstp}>Timothy@gmail.com</div>
                        </div>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}> Country of nationality</div>
                            <div className={styles.firstp}>Nigeria </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <div className={styles.contenth2}>Identification</div>
                    <div className={styles.editholder}>
                        <div className={styles.edith1}><LuFileEdit className={styles.icon} />Edit</div>
                    </div>
                </div>

                <div className={styles.contentdata}>
                    <div className={styles.firstdivflex}>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>BVN Verifcation</div>
                            <div className={styles.firstp}>Completed</div>
                        </div>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}> Document</div>
                            <div className={styles.firstp}>Completed</div>
                        </div>
                    </div>

                    <div className={styles.firstdivflex}>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>ID Selfie</div>
                            <div className={styles.firstp}>Completed</div>
                        </div>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>Phone number verification</div>
                            <div className={styles.firstp}>Completed</div>
                        </div>
                    </div>

                    <div className={styles.firstdivflex}>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>Address</div>
                            <div className={styles.firstp}>5 Allen Avenue street, Lagos, Nigeria</div>
                        </div>
                        <div className={styles.firstname}>
                            <div className={styles.firstdivh1}>Address verification</div>
                            <div className={styles.firstp}>Completed</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <div className={styles.contenth2}>Password</div>
                    <div className={styles.changepass}>
                        <div className={styles.changepassh1}><LuFileEdit className={styles.icon} />Change password</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileSections;