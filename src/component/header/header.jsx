import styles from "../header/header.module.scss";
import Logo from "../../assets/svg/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { RxHamburgerMenu } from "react-icons/rx";
import { LoginButton, PrimaryButton } from "../../shared/utils/button"
import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setShowMenu(!showMenu);
    };

    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };


    return (
        <>
            <div className={styles.header} id='top' >
                <div className={styles.content}>
                    <div className={styles.logoParent} onClick={gotoHome}>
                        <div> <img src={Logo} className={styles.Icon} alt="horse" /></div>
                    </div>

                    <Link className={styles.title} to="/#todayrate" smooth>
                        Today’s rate
                    </Link>
                    <Link className={styles.title} to="/#howitworks">
                        How it works
                    </Link>
                    <Link className={styles.title} to="/#faqs">
                        FAQs
                    </Link>



                    <motion.div className={styles.btnDiv}
                        whileHover={{ scale: 1.1, textShadow: '0px 0px 8px(255,255,255)', boxShadow: '0px 0px 8px(255,255,255)' }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 10, duration: 4 }}
                    >
                        
                        <Link to="/">
                            <LoginButton buttonText="Login"></LoginButton>
                        </Link>
                        <Link to="/">
                            <PrimaryButton buttonText="Create an account"></PrimaryButton>
                        </Link>
                    </motion.div>
                    <div onClick={toggle} className={styles.menuDiv}>
                        <AiOutlineMenu className={styles.menu} />
                    </div>

                    <Modal isOpen={modal} toggle={toggle} fullscreen>
                        <ModalBody className={styles.modalParent}>
                            <div onClick={toggle} className={styles.modalClose}> <AiOutlineClose className={styles.menu} /></div>
                            <div className={styles.modalMenu}>
                                <motion.div className={styles.modalMenufirst}
                                    initial={{ y: -100 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', duration: 7 }}
                                >
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/#todayrate"
                                    >
                                        Today’s rate
                                    </Link>
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/#howitworks"
                                    >
                                        How it works
                                    </Link>
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/#faqs"
                                    >
                                        FAQs
                                    </Link>
                                    <Link
                                        onClick={toggle}
                                        className={styles.titleModal}
                                        to="/"
                                    >
                                        Login
                                    </Link>
                                </motion.div>

                                <motion.div className={styles.modalMenufirst}
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', duration: 7 }}
                                >
                                    <Link to="/">
                                        <PrimaryButton buttonText="Create an account"></PrimaryButton>
                                    </Link>
                                </motion.div>
                            </div>

                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default Header;