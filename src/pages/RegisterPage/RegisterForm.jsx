import Form from "@/components/Form/Form";
import { RegisterFormMetaModal } from "@/modal/registerPageModal";

const registerFormModal = new RegisterFormMetaModal().getMetaModel();

function RegisterPage() {

    function submitHandler(data) {
        console.log('register page data', data)
    }

    return (
        <main>
            <div className="flex justify-center items-center h-screen" >
                <Form onFormSubmit={submitHandler} modal={registerFormModal} />
            </div>
        </main>
    );
}

export default RegisterPage;