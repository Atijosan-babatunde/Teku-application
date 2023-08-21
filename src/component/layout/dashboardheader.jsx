import styles from './css/dashboardHeader.module.scss'
import  Logo from ".././../assets/svg/logo.svg";
import  Passport from "../../assets/png/passport.jpg";
import { MdArrowDropDown } from "react-icons/md";
// import  Sun from "../../assets/sun.svg";
// import {  FormGroup, Input } from 'reactstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
    const [state, setState] = useState(true);
    let navigate=useNavigate()
    const gotoMessages=()=>{
      navigate('/messages')
    }
    return ( 
        <div className={styles.parent}>
           <div className={styles.logoDiv}>
                <img src={Logo} className={styles.logo} alt="logo" />
            </div>

            <div className={styles.row}>
                <div className={styles.passportDiv}>
                   <img src={Passport} className={styles.passport} />
                </div>
                <div className={styles.name}>Timothy Godswill</div>
                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
            </div>
        </div>
     );
}
 
export default DashboardHeader;