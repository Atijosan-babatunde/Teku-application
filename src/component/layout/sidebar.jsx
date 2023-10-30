import {NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from './css/sidebar.module.scss';
import DashboardHeader from "./dashboardheader";  
import ActiveDashboard from '../../assets/svg/activedashboard.svg';
import ActiveCurrency from '../../assets/svg/activecurrency.svg';
import ActiveTransactions from '../../assets/svg/activetransactions.svg';
import ActivePayment from '../../assets/svg/activepayment.svg'
import ActiveRecipient from '../../assets/svg/activerecipient.svg'
import ActiveNotification from '../../assets/svg/activenotification.svg'
import ActiveSupport from '../../assets/svg/activesupport.svg'
// import ActiveWallet from '../../assets/activewallet.svg';
import InActiveDashboard from '../../assets/svg/inactivedashboard.svg';
import InActiveCurrency from '../../assets/svg/inactivecurrency.svg';
import InActivePayment from '../../assets/svg/inactivepayment.svg';
import InActiveTransactions from '../../assets/svg/inactivetransactions.svg';
import InActiveRecipient from '../../assets/svg/inactiverecipient.svg';
import InActiveNotification from '../../assets/svg/inactivenotification.svg';
import InActiveSupport from '../../assets/svg/inactivesupport.svg';
import LogOut from '../../assets/svg/logout.svg';
import { useEffect, useState } from "react";
import { useIdleTimer } from 'react-idle-timer'
import { Modal, ModalBody } from "reactstrap";
// import { AppPrimaryButton } from "../../shared/utils/buttons";
const SideMenu = ({children}) => {
  const [state, setState] = useState('Active')
  const [count, setCount] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(false);
  const location = useLocation().pathname;
  let navigate=useNavigate()

  const toggle = () => {
    setModal(!modal);
  } 
  const onIdle = () => {
    setState('Idle')
  }
  const logOut=()=>{
    navigate('/')
  }

  const onActive = () => {
    setState('Active')
  }

  const onAction = () => {
    setCount(count + 1)
  }
  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 5_000,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  useEffect(() => {
    window.scrollTo(0,0)
  },[])


    return ( 
      <div>
        <DashboardHeader/>
        <div style={{display:'flex'}}>
          <div className={styles.parent}>    
            <div>
              <NavLink to='/dashboard' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/dashboard' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/dashboard' ? 
                    <img src={ActiveDashboard} className={styles.icon} alt="horse"/> : <img src={InActiveDashboard} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/dashboard' ? '#011B6D' : '#888888'}} className={styles.pageName}>Dashboard</div>
                </div>
              </NavLink>

              <NavLink to='/currency-rate' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/currency-rate' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/currency-rate' ? 
                    <img src={ActiveCurrency} className={styles.icon} alt="horse"/> : <img src={InActiveCurrency} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/currency-rate' ? '#011B6D' : '#888888'}} className={styles.pageName}>Currency Rate</div>
                </div>
              </NavLink>

              <NavLink to='/transactions' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/transactions' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/transactions' ? 
                    <img src={ActiveTransactions} className={styles.icon} alt="horse"/> : <img src={InActiveTransactions} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/transactions' ? '#011B6D' : '#888888'}} className={styles.pageName}>Transactions</div>
                </div>
              </NavLink>

              <NavLink to='/payment-cart' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/payment-cart' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/payment-cart' ? 
                    <img src={ActivePayment} className={styles.icon} alt="horse"/> : <img src={InActivePayment} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/payment-cart' ? '#011B6D' : '#888888'}} className={styles.pageName}>Payment Cart</div>
                </div>
              </NavLink>

              <NavLink to='/recipient' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/recipient' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/recipient' ? 
                    <img src={ActiveRecipient} className={styles.icon} alt="horse"/> : <img src={InActiveRecipient} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/recipient' ? '#011B6D' : '#888888'}} className={styles.pageName}>Recipients</div>
                </div>
              </NavLink>

              <NavLink to='/notification' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/notification' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/notification' ? 
                    <img src={ActiveNotification} className={styles.icon} alt="horse"/> : <img src={InActiveNotification} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/notification' ? '#011B6D' : '#888888'}} className={styles.pageName}>Notification</div>
                </div>
              </NavLink>

              <NavLink to='/support' className={styles.link}>  
                 <div className={styles.iconpagename} style={{background:location==='/support' ? "linear-gradient(#e1e9f5, #F6F6F6)" : ''}}>
                   {location === '/support' ? 
                    <img src={ActiveSupport} className={styles.icon} alt="horse"/> : <img src={InActiveSupport} className={styles.icon} alt="horse"/>
                   }
                   <div style={{color:location==='/support' ? '#011B6D' : '#888888'}} className={styles.pageName}>Support</div>
                </div>
              </NavLink>

              <NavLink to='/' className={styles.link}>  
                 <div className={styles.iconpagename}>
                   <img src={LogOut} className={styles.icon} alt="horse"/>
                   <div style={{color:'#888888'}} className={styles.pageName}>Log Out</div>
                 </div>   
              </NavLink>


            
         
            </div>
          </div>
          <main className={styles.main}>{children}</main>
        </div>
       
        <Modal isOpen={modal} toggle={toggle} size="lg" className={styles.modalParent} backdrop={backdrop}> 
            <ModalBody className={styles.modalContent}>
              <div className={styles.modalTitle}>Session Time Out</div>
              <div className={styles.modalDesc}>Your session has expired, Kindly Login again to continue</div>    
              {/* <div onClick={logOut} className={styles.btnDiv}>
                <AppPrimaryButton buttonText='Log Out'></AppPrimaryButton>
              </div> */}
        </ModalBody>
       </Modal>
      </div>  
     );
}
 
export default SideMenu;