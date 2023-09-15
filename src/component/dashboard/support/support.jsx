import styles from '../support/css/support.module.scss'
import SectionTable from './sectionTable';
const Support = () => {
    return ( 
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <h1>Support</h1>
                    <p>Need help? Send us a message.</p>
                </div>
            </div>
            <div className={styles.herosection}>
                <SectionTable />
            </div>
        </div>
     );
}
 
export default Support;