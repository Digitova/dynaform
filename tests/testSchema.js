export const basic = {
    type: "object",
    properties: {
        "firstName": {
            dataType: "string",
            placeholder: 'Please enter your first name',
            title: 'First Name',
            helper: 'Your first name, kind person!',
            required: true
        },
        lastName: {
            dataType: "string",
            widgets: "textInput",
            title: 'Last Name',
            required: true,
        },
        "phoneNumber": {
            dataType: "string",
            widgets: "textInput",
            validator: "phoneNumber",
        }
    }
}

export const advanced = {
    type: "object",
    properties: {
        todos: {
            type: "array",
            properties: {
                id: {
                    dataType: 'string',
                    inputType: 'hidden',
                },
                "task": {
                    dataType: 'string',
                    placeholder: 'Enter your task here...',
                    required: 'true',
                },
                'description': {
                    dataType: 'string',
                    inputType: 'textAreaInput',
                    placeholder: 'Some description here',
                    required: 'false',
                },
                'complete': {
                    dataType: 'boolean',
                    inputType: 'checkBox',
                    default: false
                }
            }
        },
    },
}
