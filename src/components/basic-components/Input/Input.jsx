
import styles from './InputStyles.module.css'

function Input({ register, errors, formControl, validator }) {
    if(validator){
        formControl.validations['validate'] = validator;
    }
    return (
        <div className={"py-5 px-2 md:p-5 "}>
            <div className={styles.inputContainer}>
                <label className={styles.controlLabel}>{formControl.label}</label>
                <input
                    {...register(formControl.controlName, formControl.validations)}
                    aria-invalid={errors[formControl.controlName] ? "true" : "false"}
                    className={(errors[formControl.controlName] ? `${styles.inputError} ` : '') + styles.controlInput}
                    name={formControl.name}
                    type={formControl.type}
                />
            </div>
            <div>
                {errors[formControl.controlName] && <div className={styles.controlError}>
                    {errors[formControl.controlName]?.type === "required" && (
                        <p role="alert">{formControl.errorName} is required</p>
                    )}
                    {errors[formControl.controlName]?.type === "minLength" && (
                        <p role="alert">{formControl.errorName} Must be greater than {formControl.validations.minLength} letters</p>
                    )}
                    {errors[formControl.controlName]?.type === "maxLength" && (
                        <p role="alert">{formControl.errorName} Must be less than {formControl.validations.maxLength} letters</p>
                    )}
                    {errors[formControl.controlName]?.type === "pattern" && (
                        <p role="alert">{formControl.customError}</p>
                    )}
                    {errors[formControl.controlName]?.type === "validate" && (
                        <p role="alert">{errors[formControl.controlName].message}</p>
                    )}
                </div>}
            </div>
        </div>
    );
}

export default Input;
