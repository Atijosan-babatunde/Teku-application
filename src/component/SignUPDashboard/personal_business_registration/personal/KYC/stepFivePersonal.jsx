import styles from '../KYC/CSS/stepfivepersonal.module.scss'
import envelop from '../../../../../assets/png/envelop.png'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from "react-router-dom"


const StepFivePersonal = ({setStep}) => {

    const goToStepFour =()=> {
        setStep(4)
    }

    let navigate = useNavigate();
    const goToDashboard = () => {
        navigate("/*");
    };

    return (
        <div className={styles.parent}>
            <h1 className={styles.stepnumber}><BsArrowLeft onClick={goToStepFour} className={styles.arrow}/>Step 5</h1>
            <div className={styles.writeup}>
                <h2 className={styles.headtwo}>Account verification</h2>
            </div>

            <div className={styles.content}>
                <img src={envelop} alt="" />
                <p>Your verification is pending, this may take few hours depending on
                    some factors. If your status does not change in the next 24hours,
                    kindly send us a message.
                </p>
            </div>
            <div className={styles.requestbut}>
                <button
                    className={styles.btnrequest}
                    onClick={goToDashboard}
                >
                    Continue to dashboard
                </button>
            </div>
        </div>
    );
}

export default StepFivePersonal;