import Form from "@/components/Form/Form";
import { LoginFormMetaModal } from "@/modal/loginPageModal";

const loginFormModal = new LoginFormMetaModal().getMetaModel();

function LoginPage() {
    console.log('Login', loginFormModal)
    function submitHandler(data) {
        console.log('login page data', data)
    }

    return (
        <main>
            <div className="flex justify-center items-center h-screen" >
                <Form onFormSubmit={submitHandler} modal={loginFormModal} />
            </div>
        </main>
    );
}

export default LoginPage;