import {FunctionComponent} from "react";
import classNames from "classnames";
import {CheckCircleIcon} from "@heroicons/react/solid";

import {PasswordValidationCheckProps} from "@/components/create-password/form/types";

import styles from "./style.module.scss";

type PasswordValidationRulesProps = {
    passwordValidationChecks: PasswordValidationCheckProps[];
}

const PasswordValidationRules:FunctionComponent<PasswordValidationRulesProps> = ({passwordValidationChecks}) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.note}>Your password must have:</span>
            <div className={styles.rulesList}>
                {
                    passwordValidationChecks.map((check) => {
                        return (
                            <div className={styles.rule} key={check.name}>
                                <CheckCircleIcon className={classNames(styles.checkIcon, check.passed ? "fill-[#0BAEB9]" : "fill-[#DADADA]")} />
                                <span className={classNames(styles.text, check.passed ? "text-secondary": "text-[#AAAEC1]")}>
                                    {check.label}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PasswordValidationRules;
