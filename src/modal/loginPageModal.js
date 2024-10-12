import { ApiUrlConstants } from "../constant/appConstants";
import { FormActionButton, FormMetaModal, InputModal } from "./baseModel";

export class LoginFormMetaModal extends FormMetaModal {

    constructor(){
        super('Sing in', 'Welcome to the Sing In Page', ApiUrlConstants.login)
    }
    
    initProperties() {
        const properties = {
            controls: {},
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
        const password = new InputModal(
            'password',
            'Password',
            'password',
            { required: true, minLength: 8, maxLength: 15 },
            'password',
            'password',
            'Enter Password'
        );
        properties.controls['userName'] = userName;
        properties.controls['password'] = password;
        properties.actionButton.submit = new FormActionButton('loginSubmit', 'Submit', false, 'submit', 'secondary');
        properties.actionButton.reset = new FormActionButton('loinReset', 'Reset', true, 'reset', 'primary');
        properties.actionButton.redirect = new FormActionButton('loginRedirect', 'Register', false, 'button', 'primary');
        return properties
    }
} 