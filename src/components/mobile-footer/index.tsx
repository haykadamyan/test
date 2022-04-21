import styles from "./styles.module.scss";

export default function MobileFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.innerContent}>
                <img src="/logo-colored.svg" alt="logo" />
                <div className={styles.bottomBorder}></div>
            </div>
        </footer>
    )
}
