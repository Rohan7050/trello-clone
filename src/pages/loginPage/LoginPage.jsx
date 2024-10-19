
import { useForm } from "react-hook-form"
import Input from "../../components/basic-components/Input/Input";
import styles from './LoginPageStyles.module.css'
import { LoginFormMetaModal } from "../../modal/loginPageModal";
import FormActionButton from "../../components/basic-components/FormActionButton/FormActionButton";
import formServices from "../../services/form.service";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

const loginFormModal = new LoginFormMetaModal().getMetaModel();

function LoginPage() {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        mode: 'all'
    })
    
    function submitHandler(data) {
        formServices.submitForm(loginFormModal.actionUrl, data).then(() => {
            console.log('res', data);
        }).catch(err => {
            console.log('error', err);
        });
    }

    function errorHandler(data) {
        formServices.formHasError(data);
    }

    function redirectToRegister() {
        navigate('/register')
    }

    return (
        <main className="flex justify-center items-center">
            <form onSubmit={handleSubmit(submitHandler, errorHandler)} className={"m-5 " + styles.formStyle}>
                <h1 className="text-center font-bold uppercase text-heading text-lg px-2 md:px-5">{loginFormModal.title}</h1>
                <p className="text-center text-heading text-sm px-2 md:px-5">{loginFormModal.desc}</p>
                <div className="grid-cols-1" >
                    <Input register={register} errors={errors} formControl={loginFormModal.properties.controls.userName} />
                    <Input register={register} errors={errors} formControl={loginFormModal.properties.controls.password} />
                </div>
                <FormActionButton action={redirectToRegister} reset={reset} actionModal={loginFormModal.properties.actionButton}/>
            </form>
        </main>
    );
}

export default LoginPage;

export async function loginAction({request, params}) {
    
}