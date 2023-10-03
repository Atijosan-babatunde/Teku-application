import styles from '../recipients/css/recipients.module.scss'
import { FiSearch } from 'react-icons/fi'
import { BsPlus } from 'react-icons/bs'
import RecipientSectionTable from './recipientsectiontable';
import AddRecipientModal from './addRecipientModal';
import { useState } from 'react';

const Recipients = () => {
    // MODAL STATE

    const [showModal, setShowModal] = useState(false)

    function handleModalShow() {
        setShowModal(!showModal)
    }
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <h1 className={styles.tophead}>Recipients</h1>
                    <p className={styles.toppara}>See all your saved recipient details.</p>
                </div>
                <div className={styles.searchholder}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search" />
                        <span><FiSearch /></span>
                    </div>
                    <button
                        className={styles.btnrequest}
                        onClick={handleModalShow}
                    >
                        <BsPlus  className={styles.icon}/>
                        Add recipient
                    </button>
                </div>
                {showModal && <AddRecipientModal {...{handleModalShow}}/>}
            </div>
            <div className={styles.herosection}>
                <RecipientSectionTable />
            </div>
        </div>
    );
}

export default Recipients;