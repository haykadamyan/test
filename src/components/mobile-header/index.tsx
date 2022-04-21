import styles from "./styles.module.scss";
import {ChevronLeftIcon} from "@heroicons/react/outline";

export default function MobileHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.innerContent}>
                <a href="#" className={styles.backLink}>
                    <ChevronLeftIcon className={styles.backIcon} />
                    <span>Back</span>
                </a>
                <a href="#" className={styles.registrationLink}>
                    Registration
                </a>
            </div>
        </header>
    )
}
