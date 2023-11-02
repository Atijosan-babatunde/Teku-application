import styles from './button.module.scss';
export function PrimaryButton({
    buttonText, }) {
    return (
        <button className={styles.btn}>
            {buttonText}
        </button>
    )
};

export function LoginButton({
    buttonText, }) {
    return (
        <button className={styles.logbtn}>
            {buttonText}
        </button>
    )
}
export function ConvertButton({
    buttonText, }) {
    return (
        <button className={styles.btnconvert}>
            {buttonText}
        </button>
    )
}
export function RequestButton({
    buttonText }) {
    return (
        <button className={styles.btnrequest}>
            {buttonText}
        </button>
    )
}
export function AppPrimaryButton({
    buttonText, }) {
    return (
        <button className={styles.logoutbtn}>
            {buttonText}
        </button>
    )
}


