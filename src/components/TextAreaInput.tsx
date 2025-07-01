// Lucas: Criar Componente

import React from "react";
import styles from './TextAreaInput.module.css';

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextAreaInput({ label, error, className = "", ...props }: TextAreaInputProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`${styles.textarea} ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
      />
      {error && (
        <p id={`${props.id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
