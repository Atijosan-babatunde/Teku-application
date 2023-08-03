import styles from '../faq/faq.module.scss'
import { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom"
import arrowleft from "../../assets/png/arrowleft.png"

const FaqSection = () => {
    const [isgeneral, setIsgeneral] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);
    const navigate = useNavigate()

    const openGeneral = () => {
        setIsgeneral(!isgeneral)
    }

    const openingSectionTwo = () => {
        setOpenTwo(!openTwo)
    }

    const openingSectionThree = () => {
        setOpenThree(!openThree)
    }

    const openingSectionFour = () => {
        setOpenFour(!openFour)
    }

    const openingSectionFive = () => {
        setOpenFive(!openFive)
    }

    const seeAllFaq = () => {
        navigate("/see-all-faq")
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>

                <div className={styles.browseflex}>
                    <div className={styles.flexone}>
                        <div className={styles.head}>
                            FAQs
                        </div>
                        Browse all topics
                    </div>
                    <div className={styles.flextwo} onClick={seeAllFaq}>
                        <img src={arrowleft} alt="arrowleft" />
                        See all <MdKeyboardArrowRight />
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openGeneral} className={styles.accordion}>
                        <div className={styles.general}>How does it work?</div>
                        <LiaTimesSolid style={{ display: isgeneral ? '' : 'none' }} />
                        <BiPlus style={{ display: !isgeneral ? '' : 'none' }} />
                    </div>
                    <div style={{ display: isgeneral ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Money transfer with Teku works seamslessly. In 3 simple methods,
                                you can transfer money to other countries. Create an account, enter
                                the recipient details and send.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionTwo} className={styles.accordion}>
                        <div className={styles.general}>How does it work?</div>
                        <LiaTimesSolid style={{ display: openTwo ? '' : 'none' }} />
                        <BiPlus style={{ display: !openTwo ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openTwo ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Money transfer with Teku works seamslessly. In 3 simple methods,
                                you can transfer money to other countries. Create an account, enter
                                the recipient details and send.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionThree} className={styles.accordion}>
                        <div className={styles.general}>How does it work?</div>
                        <LiaTimesSolid style={{ display: openThree ? '' : 'none' }} />
                        <BiPlus style={{ display: !openThree ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openThree ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Money transfer with Teku works seamslessly. In 3 simple methods,
                                you can transfer money to other countries. Create an account, enter
                                the recipient details and send.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionFour} className={styles.accordion}>
                        <div className={styles.general}>How does it work?</div>
                        <LiaTimesSolid style={{ display: openFour ? '' : 'none' }} />
                        <BiPlus style={{ display: !openFour ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openFour ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Money transfer with Teku works seamslessly. In 3 simple methods,
                                you can transfer money to other countries. Create an account, enter
                                the recipient details and send.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstrow}>
                    <div onClick={openingSectionFive} className={styles.accordion}>
                        <div className={styles.general}>How does it work?</div>
                        <LiaTimesSolid style={{ display: openFive ? '' : 'none' }} />
                        <BiPlus style={{ display: !openFive ? '' : 'none' }} />
                    </div>
                    <div style={{ display: openFive ? '' : 'none' }} className={styles.boxRow}>
                        <div className={styles.box}>
                            <div className={styles.desc}>
                                Money transfer with Teku works seamslessly. In 3 simple methods,
                                you can transfer money to other countries. Create an account, enter
                                the recipient details and send.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;