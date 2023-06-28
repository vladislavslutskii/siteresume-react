import React, { FC, ChangeEvent } from "react";
import styles from "./Input.module.scss";

import classnames from "classnames";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className,
  disabled,
  error,
  onBlur,
  name,
}) => {
  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };
  const onTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(evt.target.value);
  };
  return type !== "textarea" ? (
    <input
      name={name}
      type={type}
      onChange={onInputChange}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      className={classnames(className, styles.input, { [styles.error]: error })}
      disabled={disabled}
    />
  ) : (
    <textarea
      name={name}
      onChange={onTextAreaChange}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      className={classnames(styles.input, className, { [styles.error]: error })}
      disabled={disabled}
    />
  );
};
export default Input;
