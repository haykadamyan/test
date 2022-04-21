import {useState} from "react";
import {EyeOffIcon, EyeIcon} from "@heroicons/react/outline";

import Input from "@/components/input";
import PasswordStrengthScore from "@/components/create-password/form/password-strength-score";
import {PasswordScoreItemProps, PasswordValidationCheckProps} from "@/components/create-password/form/types";
import PasswordValidationRules from "@/components/create-password/form/password-validation-rules";

import styles from "./style.module.scss";

const initialState = {
    password: {
        value: '',
        show: false,
    },
    passwordConfirm: {
        value: '',
        show: false,
    },
}

const passwordScoreInitialState: PasswordScoreItemProps = {
    label: '',
    textColor: '',
    bgColor: '',
    score: 0
};

const passwordValidationChecksInitialState: PasswordValidationCheckProps[] = [
    {
        name: 'min_chars',
        label: '8 characters minimum',
        regex: '^.{8,}$',
        passed: false,
    },
    {
        name: 'upper_lower_exists',
        label: 'Contain at least 1 upper & lower case letter',
        regex: '(?=.*[a-z])(?=.*[A-Z])',
        passed: false,
    },
    {
        name: 'number_exists',
        label: 'Contain at least 1 number',
        regex: '[0-9]+',
        passed: false,
    },
    {
        name: 'symbol_exists',
        label: 'Contain at least 1 character',
        regex: '[^a-zA-z0-9]+',
        passed: false,
    },
];

export default function CreatePasswordForm() {
    const [formData, setFormData] = useState(initialState);
    const [passwordValidationChecks, setPasswordValidationChecks] = useState(passwordValidationChecksInitialState);
    const [error, setError] = useState(null);
    const [passwordScore, setPasswordScore] = useState(passwordScoreInitialState)

    const togglePassword = (inputName) => {
        setFormData({
            ...formData,
            [inputName]: {
                ...formData[inputName],
                show: !formData[inputName].show,
            }
        })
    }

    const goToNext = (event) => {
        event.preventDefault();
        alert('Going to next');
    }

    return (
        <form className={styles.form}>
            <Input
                value={formData.password.value}
                onChange={
                    (event) => {
                        if (event.target.value === '') {
                            setPasswordValidationChecks(passwordValidationChecksInitialState);
                        }
                        setFormData({
                            ...formData,
                            password: {
                                ...formData.password,
                                value: event.target.value,
                            },
                        })
                    }
                }
                name='password'
                type={formData.password.show ? 'text': 'password'}
                label='Password'
                icon={
                    formData.password.show ?
                        <EyeOffIcon onClick={() => togglePassword('password')} /> :
                        <EyeIcon onClick={() => togglePassword('password')} />
                }
            />
            {
                formData.password.value && (
                    <PasswordStrengthScore
                        password={formData.password.value}
                        passwordScore={passwordScore}
                        setPasswordScore={setPasswordScore}
                        passwordValidationChecks={passwordValidationChecks}
                        setPasswordValidationChecks={setPasswordValidationChecks}
                    />
                )
            }
            <Input
                wrapperClasses="mt-5"
                value={formData.passwordConfirm.value}
                onChange={
                    (event) => {
                        setFormData({
                            ...formData,
                            passwordConfirm: {
                                ...formData.passwordConfirm,
                                value: event.target.value,
                            },
                        });
                        if (event.target.value !== formData.password.value) {
                            setError("Passwords dont match.");
                        } else {
                            setError(null);
                        }
                    }
                }
                name='password_confirm'
                type={formData.passwordConfirm.show ? 'text': 'password'}
                label='Confirm Password'
                icon={
                    formData.passwordConfirm.show ?
                        <EyeOffIcon onClick={() => togglePassword('passwordConfirm')} /> :
                        <EyeIcon onClick={() => togglePassword('passwordConfirm')} />
                }
            />
            {error && <span className={styles.error}>{error}</span>}
            <PasswordValidationRules passwordValidationChecks={passwordValidationChecks} />
            <button className={styles.nextButton} onClick={goToNext} disabled={(passwordScore.score < 2 || error)}>
                Next
            </button>
        </form>
    )
}
