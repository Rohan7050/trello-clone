
export class CommonModal {
    id;
    constructor(id) {
        this.id = id;
    }
}

export class InputModal extends CommonModal {
    errorName;
    controlName;
    validations;
    type;
    name;
    label;
    customError;
    constructor(id, errorName, controlName, validations, type, name, label, customError = ''){
        super(id)
        this.errorName = errorName;
        this.controlName = controlName;
        this.validations = validations;
        this.type = type;
        this.name = name;
        this.label = label;
        this.customError = customError;
    }
}

export class PageInfo {
    title;
    desc;
    properties;
    actionUrl;
    constructor(title, desc, properties, actionUrl){
        this.title = title;
        this.desc = desc;
        this.properties = properties;
        this.actionUrl = actionUrl;
    }
} 

export class FormMetaModal {
    title;
    desc;
    actionUrl;
    constructor(title, desc, actionUrl){
        this.title = title;
        this.desc = desc;
        this.actionUrl = actionUrl;
    }

    initProperties() {
        return []
    }

    getMetaModel() {
        const pageInfo = new PageInfo();
        pageInfo.title = this.title;
        pageInfo.properties = this.initProperties();
        pageInfo.desc = this.desc;
        pageInfo.actionUrl = this.actionUrl;
        return pageInfo;
    }
}

export class FormActionButton extends CommonModal {
    buttonText;
    hide;
    action;
    order;
    constructor(id, buttonText, hide, action, order) {
        super(id);
        this.buttonText = buttonText;
        this.hide = hide;
        this.action = action;
        this.order = order;
    }
}   
