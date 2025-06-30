import React from "react";
import styles from "./SubmitButton.module.css";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status: "default" | "pending" | "success" | "error";
}

export function SubmitButton({ status, disabled, children, ...props }: SubmitButtonProps) {
  const getStatusClass = () => {
    switch (status) {
      case "pending":
        return styles.buttonPending;
      case "success":
        return styles.buttonSuccess;
      case "error":
        return styles.buttonError;
      default:
        return styles.buttonDefault;
    }
  };

  return (
    <button
      type="submit"
      disabled={disabled || status === "pending"}
      className={`${styles.button} ${getStatusClass()}`}
      {...props}
    >
      {children}
    </button>
  );
}
