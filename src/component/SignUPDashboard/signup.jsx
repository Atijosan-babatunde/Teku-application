import styles from '../SignUPDashboard/CSS/signup.module.scss'
import star from '../../assets/png/star.png'


const SignUpDashboard = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.discone}>
                    <h2 className={styles.headleftimg}>
                        Access to all seamless transfer. Send money to other parts of the countries.
                        <img src={star} alt="star" />
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default SignUpDashboard;