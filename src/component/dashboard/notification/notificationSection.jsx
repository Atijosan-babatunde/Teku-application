import styles from '../notification/css/notificationsection.module.scss'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import NewNotification from './newnotification';
import InboxMessage from './inbox';

const NotificationSection = () => {
    const [showTodayRate, setShowTodayRate] = useState(true)
    const [showCurrencyAlert, setShowCurrencyAlert] = useState(false)

    const gotoTodayRate = () => {
        setShowTodayRate(true)
        setShowCurrencyAlert(false)
    }
    const gotoCurrency = () => {
        setShowCurrencyAlert(true)
        setShowTodayRate(false)
    }
   

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.buttonrow}>
                    <div className={styles.textholder}>
                        <div className={styles.buttonhead} onClick={gotoTodayRate} style={{ backgroundColor: showTodayRate ? "#fff" : "", color: showTodayRate ? "#000" : "" }}>Notification</div>
                        <div className={styles.buttonhead} onClick={gotoCurrency} style={{ backgroundColor: showCurrencyAlert ? "#fff" : "", color: showCurrencyAlert ? "#000" : "" }}>Inbox</div>
                    </div>

                    <div className={styles.searchholder}>
                        <div className={styles.search}>
                            <input type="text" placeholder="Search" />
                            <span><FiSearch /></span>
                        </div>
                    </div>
                </div>
            </div>
             <div style={{ display: showTodayRate ? '' : 'none' }}>
                <NewNotification />
            </div>
            <div style={{ display: showCurrencyAlert ? '' : 'none' }}>
                <InboxMessage />
            </div>
        </div>
    );
}

export default NotificationSection;