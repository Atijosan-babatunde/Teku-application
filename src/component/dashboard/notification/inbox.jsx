import styles from '../notification/css/inbox.module.scss'
import { useState } from 'react'
import receivemail from '../../../assets/svg/receivemail.svg'
import eye from '../../../assets/svg/lucideeye.svg'


const InboxMessage = () => {
    const [notifications] = useState([
        { id: 1, headermessage: 'Appeal replied', bodymessage: 'The bank issue has been resolved. Kindly check your account again.', date: '06:00am 16-05-2022' },
        { id: 2, headermessage: 'Appeal replied', bodymessage: 'The bank issue has been resolved. Kindly check your account again.', date: '06:00am 16-05-2022' }
    ])
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <>
                    {notifications.map((data, index) =>
                        <div className={styles.contentinside} key={index}>
                            <h1>{data.headermessage}</h1>
                            <div className={styles.backcolor}>
                                <p>{data.bodymessage}</p>
                                <span>view <img src={eye} alt="" /></span>
                            </div>
                            <h2>{data.date}</h2>
                        </div>
                    )}
                </>
                <div className={styles.inner}>
                    {notifications.length < 1 && (
                        <div>
                            <img src={receivemail} alt="middleimage" />
                            <div className={styles.nocurrency}>
                                No inbox
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InboxMessage;