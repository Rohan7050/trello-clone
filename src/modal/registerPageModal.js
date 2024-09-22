import { FormActionButton, FormMetaModal, InputModal } from "./baseModel";

export class RegisterFormMetaModal extends FormMetaModal {

    constructor(){
        super('Login Form', 'Welcome to the Login Form')
    }
    
    initProperties() {
        const properties = {
            controls: [],
            actionButton: {}
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
        const userEmail = new InputModal(
            'userEmail',
            'Email',
            'userEmail',
            { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
            'text',
            'userEmail',
            'Enter User Email',
            'Please enter valid email address'
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
        const confirmPassword = new InputModal(
            'confirmPassword',
            'Confirm Password',
            'confirmPassword',
            { required: true, minLength: 8, maxLength: 15 },
            'password',
            'confirmPassword',
            'Confirm Password'
        );
        properties.controls.push(userName);
        properties.controls.push(userEmail);
        properties.controls.push(password);
        properties.controls.push(confirmPassword);

        properties.actionButton.submit = new FormActionButton('loginSubmit', 'Submit', false, 'submit', 'secondary');
        properties.actionButton.reset = new FormActionButton('loinReset', 'Reset', false, 'reset', 'primary');
        properties.actionButton.redirect = new FormActionButton('loginRedirect', 'Register', true, 'button', 'primary');
        return properties;
    }
} 
