import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from 'react-hook-form';
import styles from './TextInputField.module.scss';

interface Props {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  [x: string]: any;
}

function TextInputField({
  error,
  label,
  name,
  register,
  type,
  placeholder,
  textarea = false,
  ...props
}: Props) {
  return (
    <>
      <div
        className={
          error
            ? [styles.invalid, styles.formGroup].join(' ')
            : styles.formGroup
        }>
        <label>{label}</label>

        {!textarea ? (
          <input
            {...props}
            type={type}
            className={`${styles.input} ${type === 'file' && styles.file}`}
            {...register(name)}
          />
        ) : (
          <textarea
            {...props}
            placeholder={placeholder}
            className={styles.input}
            {...register(name)}
          />
        )}

        <div className={styles.errorMessage}>{error?.message}</div>
      </div>
    </>
  );
}

export default TextInputField;
