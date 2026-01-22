import { useState } from "react";
import type { ChangeEvent } from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Input = ({
  value,
  onChange,
  type = "text",
  placeholder,
  clearable = false,
  disabled = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const actualType = isPassword && showPassword ? "text" : type;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={actualType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />

      {isPassword && (
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}

      {clearable && value && (
        <button
          type="button"
          className={styles.iconButton}
          onClick={handleClear}
        >
          ✕
        </button>
      )}
    </div>
  );
};
