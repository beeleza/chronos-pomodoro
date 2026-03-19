// DefaultInput/index.tsx
import styles from "./styles.module.css";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

type DefaultInputProps = {
  id: string;
  labelText: string;
  error?: string;
  hint?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ 
    id, 
    type = "text",
    labelText,
    error,
    hint,
    disabled,
    required,
    className,
    ...rest
}: DefaultInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!rest.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    if (rest.onChange) {
      rest.onChange(e);
    }
  };

  return (
    <div className={`${styles.inputWrapper} ${disabled ? styles.disabled : ''} ${className || ''}`}>
      <div className={styles.inputContainer}>
        <input
          className={`
            ${styles.input} 
            ${error ? styles.error : ''} 
            ${isFocused ? styles.focused : ''}
          `}
          id={id}
          type={type}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...rest}
        />
        
        {/* Label só aparece se NÃO tem valor E não está focado */}
        {!hasValue && !isFocused && (
          <label htmlFor={id} className={styles.label}>
            {labelText}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.inputBorder}></div>
        <div className={styles.inputGlow}></div>
      </div>

      {(error || hint) && (
        <div className={`${styles.feedback} ${error ? styles.error : ''}`}>
          <AlertCircle size={14} />
          <span>{error || hint}</span>
        </div>
      )}
    </div>
  );
}