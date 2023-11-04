import styles from '../SignUPDashboard/CSS/userprofilesections.module.scss'
import userpassport from '../../assets/png/passport.jpg'
import business from '../../assets/png/business.png'
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
import KycBusinessUser from './personal_business_registration/business/KYC/kycBusinessUser'



const UserProfileSections = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const userData = useAppSelector(
        (state) => state.users.getUsersData
    );
    const [data] = useState(userData);

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

     // MODAL STATE

     const [showModalKyc, setShowModalKyc] = useState(false)

     function handleModalShowKyc() {
         setShowModalKyc(!showModalKyc)
     }


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

                            <h3 onClick={handleModalShowKyc}>
                                Start KYC Verification{" "}
                                <IoIosArrowForward className={styles.arrow} />
                            </h3>
                        </div>
                        {showModalKyc && <KycBusinessUser {...{handleModalShowKyc}}/>}
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
                                <input type="text" className={styles.firstp} value={data?.firstName} />
                            </div>
                            <div className={styles.firstname}>
                                <div className={styles.firstdivh1}> Last name</div>
                                <input type="text" className={styles.firstp} value={data?.lastName} />
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstname}>
                                <div className={styles.firstdivh1}>Email address</div>
                                <input type="email" className={styles.firstp} value={data?.email} />
                            </div>
                            <div className={styles.firstname}>
                                <div className={styles.firstdivh1}> Country of nationality</div>
                                <input type="text" className={styles.firstp} value={data?.country} />
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



                <>
                    <div className={styles.content}>
                        <div className={styles.cardholder}>
                            <div className={styles.userimg}>
                                <img src={business} alt="" className={styles.userpassportimg} />
                                {/* <span><AiOutlinePicture/></span> */}
                            </div>
                            <div className={styles.username}>
                                <div className={styles.name}>{data?.businessName}</div>
                                <div className={styles.country}>
                                    <div className={styles.countryh1}>{data?.country}</div>
                                </div>
                            </div>
                        </div>
                        {loading && (
                            <ReactLoading color="blue" width={25} height={25} type="spin" />
                        )}
                    </div>


                    <div className={styles.content}>
                        <div className={styles.contenthead}>
                            <div className={styles.contenth2}>Business Information</div>
                            <div className={styles.editholder}>
                                <div className={styles.edith1}><LuFileEdit className={styles.icon} />Edit</div>
                            </div>
                        </div>

                        <div className={styles.contentdata}>
                            <div className={styles.firstdivflex}>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Business name</div>
                                    <input type="text" className={styles.firstp} value={data?.firstName} />
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Business type</div>
                                    <input type="text" className={styles.firstp} value={data?.lastName} />
                                </div>
                            </div>

                            <div className={styles.firstdivflex}>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Email address</div>
                                    <input type="email" className={styles.firstp} value={data?.email} />
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}> Country of business</div>
                                    <input type="text" className={styles.firstp} value={data?.country} />
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
                                    <div className={styles.firstdivh1}>RC Number</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Business verification</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                            </div>

                            <div className={styles.firstdivflex}>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Business address</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Address verification</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                            </div>

                            <div className={styles.firstdivflex}>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>No. of directors</div>
                                    <div className={styles.firstp}>5 Allen Avenue street, Lagos, Nigeria</div>
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Phone number verification</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.contenthead}>
                            <div className={styles.contenth2}>Director 1 identification</div>
                            <div className={styles.editholder}>
                                <div className={styles.edith1}><LuFileEdit className={styles.icon} />Edit</div>
                            </div>
                        </div>

                        <div className={styles.contentdata}>
                            <div className={styles.firstdivflex}>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>BVN Verification</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Document</div>
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
                            <div className={styles.contenth2}> Director 2 Identification</div>
                            <div className={styles.editholder}>
                                <div className={styles.edith1}><LuFileEdit className={styles.icon} />Edit</div>
                            </div>
                        </div>

                        <div className={styles.contentdata}>
                            <div className={styles.firstdivflex}>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>Document</div>
                                    <div className={styles.firstp}>Completed</div>
                                </div>
                                <div className={styles.firstname}>
                                    <div className={styles.firstdivh1}>ID Selfie</div>
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
                </>


                <ToastContainer />
            </div>
        </div>
    );
}

export default UserProfileSections;