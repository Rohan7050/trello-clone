import Input from "../custom/Input/Input";
import styles from './FormStyles.module.css'
import { useForm } from "react-hook-form"
import FormActionButton from "../custom/formActionButtons/FormActionButton";

function Form({ modal, onFormSubmit }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        onFormSubmit(data)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"m-5 " + styles.formStyle}>
            {modal.properties.controls.map((metaData) => {
                return (
                    <Input
                        key={metaData.id}
                        register={register}
                        errorName={metaData.errorName}
                        errors={errors}
                        controlName={metaData.controlName}
                        validations={metaData.validations}
                        type={metaData.type}
                        name={metaData.name}
                        label={metaData.label}
                        customError={metaData.customError}
                    />
                )
            })}
            <FormActionButton actionModal={modal.properties.actionButton}/>
        </form>
    );
}

export default Form;