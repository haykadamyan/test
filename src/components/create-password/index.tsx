import styles from "./style.module.scss";
import CreatePasswordForm from "@/components/create-password/form";

export default function CreatePassword() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Create Password</h1>
            <p className={styles.note}>Please create a secure password </p>
            <CreatePasswordForm />
        </div>
    )
}
