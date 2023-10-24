import styles from '../SignUPDashboard/CSS/signup.module.scss'
import star from '../../assets/png/star.png'
import logo from "../../assets/svg/logo.svg"
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/png/arrowright.png"
import personal from '../../assets/png/personal.png'
import group from '../../assets/png/group.png'
import { Link } from "react-router-dom"
import { useState } from 'react';

const SignUpDashboard = () => {
    const [selectedSignup, setSelectedSignup] = useState();
    

    const selectSignupType = async (e) => {
        setSelectedSignup(e.id)
        sessionStorage.setItem("accountType",e.direct)
    }


    const [signupType] = useState([
        { id: 1, icon: <img src={personal} className={styles.payicon} alt="img" />, name: 'Personal use', direct: 'PERSONAL' },
        { id: 2, icon: <img src={group} className={styles.payicon} alt="groupimg" />, name: 'Business use', direct: 'BUSINESS'},
    ])


    let navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };
    
    const gotoPersonalOrBusiness = () => {
       if (selectedSignup === 1){
         navigate("/personal-registration")
       }

       if (selectedSignup === 2){
        navigate("/business-registration")
      }
    }


    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <h2 className={styles.headleftimg}>
                        Access to all seamless transfer. Send money to other parts of the countries.
                        <img src={star} alt="star" />
                    </h2>
                </div>
                <div className={styles.disctwo}>
                    <div className={styles.insidedisc}>
                        <div className={styles.logoimg} onClick={gotoHome}>
                            <img src={logo} alt="logo" />
                        </div>
                        <h2 className={styles.headcontent}>
                            How do you plan to use Teku?
                        </h2>
                        <div className={styles.arrowstyle}>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <h2 className={styles.headinner}>
                            Let’s get you started into accessing seamless transfer.
                        </h2>
                        <div className={styles.decidebutton}>
                            {signupType.map((clickbutton,index) => 
                                <div key={index} className={styles.personal} 
                                    style={{
                                        border: clickbutton.id === selectedSignup ? '2px solid #011B6D' : '',
                                        backgroundColor: clickbutton.id === selectedSignup ? '#F0F3FF' : ''
                                    }}
                                    onClick={() => selectSignupType(clickbutton)}
                                >
                                    <div className={styles.imgpersonal}>
                                        {clickbutton.icon}
                                        <h3 className={styles.perhead}>{clickbutton.name}</h3>
                                    </div>
                                    <div className={styles.dot}
                                        style={{ backgroundColor: clickbutton.id === selectedSignup ? '#011B6D' : '' }}>
                                    </div>
                                </div>
                            )}
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    onClick={gotoPersonalOrBusiness}
                                    disabled={!selectedSignup}
                                    style={{backgroundColor: !selectedSignup ? "rgba(1, 27, 109, 0.20)" : " "}}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className={styles.donthave}>
                                Already have an account? <span><Link to="/login">Sign in here </Link></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpDashboard;