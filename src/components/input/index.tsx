import classNames from "classnames";
import {ChangeEvent, FunctionComponent, ReactNode} from 'react';
import styles from "./style.module.scss";

type InputProps = {
  wrapperClasses?: string;
  value: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  classes?: string;
  icon?: ReactNode,
};

const Input: FunctionComponent<InputProps> = ({
  wrapperClasses,
  value,
  onChange,
  name,
  type = 'text',
  placeholder,
  label,
  classes = '',
  icon,
}) => {
  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className={classNames(styles.input, classes)}
            value={value}
            onChange={onChange}
        />
        {
          icon && (
            <div className="block w-5 h-5 text-center text-xl leading-0 absolute top-3 right-2 text-[#AAAEC1] focus:outline-none transition-colors">
              {icon}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Input;
