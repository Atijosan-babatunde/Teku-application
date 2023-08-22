import styles from '../SignUPDashboard/CSS/signupwelcometoteku.module.scss'
import logo from '../../assets/svg/logo.svg'
import middleimg from '../../assets/svg/middlearrow.svg'
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'
import KycBusinessUser from './personal_business_registration/business/KYC/kycBusinessUser'
import { useNavigate } from "react-router-dom"


const SignUpWelcomeToTeku = () => {
     // MODAL STATE

     const [showModal, setShowModal] = useState(false)

     function handleModalShow() {
         setShowModal(!showModal)
     }

     let navigate = useNavigate();
    const goToDashboard = () => {
        navigate("/*");
    };
     
     return (
         <div className={styles.parent}>
             <div className={styles.content}>
                 <div className={styles.imageholder}>
                     <img src={logo} alt="" />
                 </div>
                 <h1 className={styles.innerhead}>
                     Welcome to Teku!
                 </h1>
                 <img src={middleimg} alt="" className={styles.image} />
                 <p className={styles.innerp}>
                     Congratulations! You are almost there, complete your profile by completing your KYC.
                 </p>
 
                 <div className={styles.requestbut}>
                     <button
                         className={styles.btnrequest}
                         onClick={handleModalShow}
                     >
                         Continue to KYC
                     </button>
                 </div>
                 {showModal && <KycBusinessUser {...{handleModalShow}}/>}
                 <div className={styles.skipholder} onClick={goToDashboard}>
                     <p className={styles.skip}>
                         Skip to dashboard
                     </p>
                     <BsArrowRight  className={styles.icon}/>
                 </div>
             </div>
         </div>
     );
}
 
export default SignUpWelcomeToTeku;