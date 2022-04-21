import React, {FunctionComponent, useEffect, useState} from "react";
import classNames from "classnames";
import {PasswordValidationCheckProps} from "@/components/create-password/form/types";

import styles from "./style.module.scss";

const passwordScores = [
    {
        label: 'Weak',
        score: 1,
        textColor: 'text-[#EB5757]',
        bgColor: 'bg-[#EB5757]',
    },
    {
        label: 'Average',
        score: 2,
        textColor: 'text-[#F2C94C]',
        bgColor: 'bg-[#F2C94C]',
    },
    {
        label: 'Good',
        score: 3,
        textColor: 'text-[#F2994A]',
        bgColor: 'bg-[#F2C94C]',
    },
    {
        label: 'Strong',
        score: 4,
        textColor: 'text-primary',
        bgColor: 'bg-primary',
    },
]

type PasswordStrengthScoreProps = {
    password: string;
    passwordValidationChecks: PasswordValidationCheckProps[];
    setPasswordValidationChecks: React.Dispatch<React.SetStateAction<PasswordValidationCheckProps[]>>;
}

const PasswordStrengthScore: FunctionComponent<PasswordStrengthScoreProps> = ({
    password,
    passwordValidationChecks,
    setPasswordValidationChecks
}) => {
    const [passwordScore, setPasswordScore] = useState({label: '', textColor: '', bgColor: '', score: 0})

    // Pass the changed password through all validation checks
    useEffect(() => {
        let score = 0;
        const checks = [];
        for (let check of passwordValidationChecks) {
            if (password.match(check.regex)) {
                checks.push({...check, passed: true});
                ++score;
            } else {
                checks.push({...check, passed: false});
            }
        }

        const passwordScoreObject = passwordScores.filter((passwordScore) => {
            return score <= passwordScore.score;
        })[0];
        setPasswordScore(passwordScoreObject);
        setPasswordValidationChecks(checks);
    }, [password]);

    return (
        <div>
            <div className={styles.passwordScoresList}>
                {
                    passwordScores.map((scoreItem) => {
                        return (
                            <div className={styles.item} key={scoreItem.label}>
                                <div
                                    className={
                                        classNames(
                                            styles.score,
                                            scoreItem.score <= passwordScore.score ? passwordScore.bgColor : styles.defaultScore
                                        )
                                    }>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.scoreStatus}>
                <span>Password Strength</span>
                <span className={passwordScore.textColor}>
                    {passwordScore.label}
                </span>
            </div>
        </div>
    )
}

export default PasswordStrengthScore;
