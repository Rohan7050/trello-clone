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
    constructor(title, desc, properties){
        this.title = title;
        this.desc = desc;
        this.properties = properties;
    }
} 

export class FormMetaModal {
    title;
    desc;
    constructor(title, desc){
        this.title = title;
        this.desc = desc;
    }

    initProperties() {
        return []
    }

    getMetaModel() {
        const pageInfo = new PageInfo();
        pageInfo.title = this.title;
        pageInfo.properties = this.initProperties();
        pageInfo.desc = this.desc;
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