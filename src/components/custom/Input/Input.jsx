import styles from './InputStyles.module.css'

function Input({ register, errors, controlName, errorName, validations, customClass, type, name, label, customError }) {
    return (
        <div className={"p-5 " + styles.control}>
            <label className={styles.controlLabel}>{label}</label>
            <input {...register(controlName, validations)} aria-invalid={errors[controlName] ? "true" : "false"} className={(customClass ? `${customClass} `: '') + styles.controlInput} name={name} type={type} />
            {errors[controlName] && <div className={styles.controlError}>
                {errors[controlName]?.type === "required" && (
                    <p role="alert">{errorName} is required</p>
                )}
                {errors[controlName]?.type === "minLength" && (
                    <p role="alert">{errorName} Must be greater than {validations.minLength} letters</p>
                )}
                {errors[controlName]?.type === "maxLength" && (
                    <p role="alert">{errorName} Must be less than {validations.maxLength} letters</p>
                )}
                {errors[controlName]?.type === "pattern" && (
                    <p role="alert">{customError}</p>
                )}
            </div>}
        </div>
    );
}

export default Input;