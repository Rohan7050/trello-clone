
import { useForm } from "react-hook-form"
import Input from "../../components/basic-components/Input/Input";
import styles from './RegisterPageStyles.module.css'
import { RegisterFormMetaModal } from "../../modal/registerPageModal";
import FormActionButton from "../../components/basic-components/FormActionButton/FormActionButton";
import formServices from "../../services/form.service";
import { Link } from "react-router-dom";

const registerFormModal = new RegisterFormMetaModal().getMetaModel();

function RegisterPage() {
    const { register, formState: { errors }, handleSubmit, reset, watch, trigger } = useForm({
        mode: 'all'
    })
    
    const password = watch('password');

    function submitHandler(data) {
        formServices.submitForm(registerFormModal.actionUrl, data);
    }

    function errorHandler(data) {
        formServices.formHasError(data);
    }

    function validatePassword(data) {
        trigger('password')
        return password === data || "Passwords do not match"
    }

    return (
        <main className="flex justify-center items-center">
            <form onSubmit={handleSubmit(submitHandler, errorHandler)} className={"m-5 " + styles.formStyle}>
                <h1 className="text-center font-bold uppercase text-heading text-lg px-2 md:px-5">{registerFormModal.title}</h1>
                <p className="text-center text-heading text-sm px-2 md:px-5">{registerFormModal.desc}</p>
                <div className="grid grid-cols-1" >
                    <Input register={register} errors={errors} formControl={registerFormModal.properties.controls.userName} />
                    <Input register={register} errors={errors} formControl={registerFormModal.properties.controls.userEmail} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Input register={register} errors={errors} formControl={registerFormModal.properties.controls.password} />
                    <Input register={register} validator={validatePassword} errors={errors} formControl={registerFormModal.properties.controls.confirmPassword} />
                </div >
                <FormActionButton reset={reset} actionModal={registerFormModal.properties.actionButton} />
                <p className='flex justify-end items-end flex-col text-heading text-sm px-2 md:px-5'>
                    <Link to="/login">Go to login</Link>
                </p>
            </form>
        </main>
    );
}

export default RegisterPage;