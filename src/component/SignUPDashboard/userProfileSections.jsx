import styles from '../SignUPDashboard/CSS/userprofilesections.module.scss'
import userpassport from '../../assets/png/passport.jpg'
import { LuFileEdit } from 'react-icons/lu'
import { IoIosArrowForward } from 'react-icons/io'
// import {AiOutlinePicture} from 'react-icons/ai'
import { useAppSelector } from "../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { GetUsersDatas } from "../../shared/redux/slices/users.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import ReactLoading from "react-loading";



const UserProfileSections = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const userData = useAppSelector(
        (state) => state.users.getUsersData
    );
    const [data] = useState(userData);

    useEffect(() => {
        getUser();
    }, [data]);

    const getUser = () => {
        setLoading(true);
        dispatch(GetUsersDatas())
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
            <div>
                <div className={styles.content}>
                    <div className={styles.cardholder}>
                        <div className={styles.userimg}>
                            <img src={userpassport} alt="" className={styles.userpassportimg} />
                            {/* <span><AiOutlinePicture/></span> */}
                        </div>
                        <div className={styles.username}>
                            <div className={styles.name}>{data?.firstName} {data?.lastName}</div>
                            <div className={styles.country}>
                                <div className={styles.countryh1}>{data?.country}</div>
                            </div>
                        </div>
                    </div>
                    {loading && (
                        <ReactLoading color="blue" width={25} height={25} type="spin" />
                    )}
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
                                <div className={styles.firstp}>{data?.firstName}</div>
                            </div>
                            <div className={styles.firstname}>
                                <div className={styles.firstdivh1}> Last name</div>
                                <div className={styles.firstp}>{data?.lastName}</div>
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstname}>
                                <div className={styles.firstdivh1}>Email address</div>
                                <div className={styles.firstp}>{data?.email}</div>
                            </div>
                            <div className={styles.firstname}>
                                <div className={styles.firstdivh1}> Country of nationality</div>
                                <div className={styles.firstp}>{data?.country}</div>
                            </div>
                        </div>
                    </div>
                    {loading && (
                        <ReactLoading color="blue" width={25} height={25} type="spin" />
                    )}
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
                <ToastContainer />
            </div>
        </div>
    );
}

export default UserProfileSections;