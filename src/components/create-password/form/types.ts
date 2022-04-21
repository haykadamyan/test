export type PasswordValidationCheckProps = {
    name: string;
    label: string;
    regex: string;
    passed: boolean;
}

export type PasswordScoreItemProps = {
    label: string;
    textColor: string;
    bgColor: string;
    score: number;
};
