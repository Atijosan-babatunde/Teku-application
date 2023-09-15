import { useState } from 'react';
import styles from '../notification/css/newnotification.module.scss'
import notification from '../../../assets/svg/notification.svg'

const NewNotification = () => {

    const [notifications] = useState([
        { id: 1, headermessage: 'Payment processing', bodymessage: 'Your payment has being processed. This may take up to 24hrs before confirmation.', date: '06:00am 16-05-2022' },
        { id: 2, headermessage: 'Payment processing', bodymessage: 'Your payment has being processed. This may take up to 24hrs before confirmation.', date: '06:00am 16-05-2022' }
    ])
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <>
                    {notifications.map((data, index) =>
                        <div className={styles.contentinside} key={index}>
                            <h1>{data.headermessage}</h1>
                            <p>{data.bodymessage}</p>
                            <h2>{data.date}</h2>
                        </div>
                    )}
                </>
                <div className={styles.inner}>
                    {notifications.length < 1 && (
                        <div>
                            <img src={notification} alt="middleimage" />
                            <div className={styles.nocurrency}>
                                No notification
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewNotification;