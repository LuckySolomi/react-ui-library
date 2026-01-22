import { useEffect } from "react";
import styles from "./Toast.module.css";
import type { ToastProps } from "./Toast.types";

export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  closable = false,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className={styles.message}>{message}</span>

      {closable && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};
