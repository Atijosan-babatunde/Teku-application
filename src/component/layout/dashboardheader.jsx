import styles from './css/dashboardHeader.module.scss'
import Logo from ".././../assets/svg/logo.svg";
import Passport from "../../assets/png/passport.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import usericon from '../../assets/svg/usericon.svg'
// import settingsimg from '../../assets/svg/settingsimg.svg'
import logoutuser from '../../assets/svg/logoutuser.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Modal, ModalBody } from "reactstrap";
import { useState } from 'react';
import { useAppSelector } from "../../shared/redux/reduxHooks";
import { useDispatch } from "react-redux";
import { GetUsersDatas } from "../../shared/redux/slices/users.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import ReactLoading from "react-loading";



const DashboardHeader = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [modal, setModal] = useState(false);
    let navigate = useNavigate();
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

    const toggle = () => {
        setModal(!modal);
        setShowMenu(!showMenu);
    };

    const goToUserProfile = () => {
        navigate('/user-profile')
    }

    return (
        <div className={styles.parent}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={styles.logoDiv}>
                    <img src={Logo} className={styles.logo} alt="logo" />
                </div>

                <div className={styles.row}>
                    <div className={styles.userdata}>
                        <div className={styles.passportDiv}>
                            <img src={Passport} alt="img" className={styles.passport} />
                        </div>
                        {/* <div className={styles.name}>Timothy Godswill</div>
                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div> */}

                        <div className={styles.dropdown}>
                            <div className={styles.name}>{data?.firstName}
                                {loading && (
                                    <ReactLoading color="blue" width={25} height={25} type="spin" />
                                )}
                                <span><IoMdArrowDropdown /></span>
                            </div>
                            <div className={styles.dropdownContent}>

                                <div className={styles.dropDownRow} onClick={goToUserProfile}>
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

                                {/* <div className={styles.dropDownRow}>

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

                            </div> */}
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
            </div>

            <div onClick={toggle} className={styles.menuDiv}>
                {/* <div className={styles.logoDivmobile}>
                    <img src={Logo} className={styles.logomobile} alt="logo" />
                </div> */}
                <AiOutlineMenu className={styles.menu} />
            </div>

            <Modal isOpen={modal} toggle={toggle} fullscreen style={{ width: "60%" }}>
                <ModalBody className={styles.modalParent}>
                    <div onClick={toggle} className={styles.modalClose}> <AiOutlineClose className={styles.menu} /></div>
                    <div className={styles.modalMenu}>
                        <div className={styles.modalMenufirst}>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/currency-rate"
                            >
                                Currency rate
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/payment-cart"
                            >
                                Payment cart
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/transactions"
                            >
                                Transactions
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/recipient"
                            >
                                Recipients
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/notification"
                            >
                                Notification
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/support"
                            >
                                Support
                            </Link>
                            <Link
                                onClick={toggle}
                                className={styles.titleModal}
                                to="/login"
                            >
                                Log out
                            </Link>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default DashboardHeader;