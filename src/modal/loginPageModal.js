import { FormActionButton, FormMetaModal, InputModal } from "./baseModel";

export class LoginFormMetaModal extends FormMetaModal {

    constructor(){
        super('Login Form', 'Welcome to the Login Form')
    }
    
    initProperties() {
        const properties = {
            controls: [],
            actionButton: {

            }
        };
        const userName = new InputModal(
            'userName',
            'User Name',
            'userName',
            { required: true, pattern: /^[A-Za-z]+$/i, minLength: 6, maxLength: 20 },
            'text',
            'userName',
            'Enter User Name',
            'only letter are allow (a to z & A to Z)'
        );
        const password = new InputModal(
            'password',
            'Password',
            'password',
            { required: true, minLength: 8, maxLength: 15 },
            'password',
            'password',
            'Enter Password'
        );

        properties.controls.push(userName);
        properties.controls.push(password);

        properties.actionButton.submit = new FormActionButton('loginSubmit', 'Submit', false, 'submit', 'secondary');
        properties.actionButton.reset = new FormActionButton('loinReset', 'Reset', true, 'reset', 'primary');
        properties.actionButton.redirect = new FormActionButton('loginRedirect', 'Register', false, 'button', 'primary');
        return properties
    }
} 
