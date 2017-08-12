export const basic = {
	title: 'PROFILE INFORMATION',
    elementType: "form",
    elements: {
        "firstName": {
            dataType: "string",
	        templateType: "inline",
            elementType: "text",
	        title: 'First Name',
	        subtitle: 'What is the user\'s First Name?',
            placeholder: 'Christopher',
            required: true
        },
        "lastName": {
            dataType: "string",
            elementType: "text",
	        title: 'Last Name',
	        subtitle: 'What is the user\'s Last Name?',
	        placeholder: 'First Name',
            required: true,
        },
	    "email": {
		    dataType: "string",
		    elementType: "text",
		    title: "LOGIN INFORMATION",
		    placeholder: "E-Mail Address",
		    required: true,
	    },
        "password": {
            dataType: 'string',
            elementType: 'password',
	        placeholder: 'Password',
        },
        "isAdmin":{
            dataType: 'boolean',
            elementType: "switch",
	        templateType: "inline",
	        title: "Admin User",
	        subtitle: "Is this user an Admin?",
        },
	    "isActive":{
		    dataType: 'boolean',
		    elementType: "switch",
		    templateType: "inline",
		    title: "Active User",
		    subtitle: "Is this an active user?",
	    },
	    'pickles': {
		    dataType: 'string',
		    elementType: 'picker',
		    title: 'Pickle Selection',
		    items: {
			    dill: 'Dill Pickles',
			    egg: 'Pickled Egg',
			    bb: 'Bread & Butter',
		    }
	    },
        "subForm": {
            elementType: "form",
            elements: {
                "firstName": {
                    dataType: "string",
                    elementType: "text",
                    placeholder: 'Please enter your first name',
                    title: 'First Name',
                    subtitle:'What yo name?',
                    helper: 'Your first name, kind person!',
                    required: true
                },
                "lastName": {
                    dataType: "string",
                    elementType: "text",
                    title: 'Last Name',
                    required: true,
                },
                "subForm": {
                    elementType: "form",
                    elements: {
                        "firstName": {
                            dataType: "string",
                            elementType: "text",
                            placeholder: 'Please enter your first name',
                            title: 'First Name',
                            subtitle:'What yo name?',
                            helper: 'Your first name, kind person!',
                            required: true
                        },
                        "lastName": {
                            dataType: "string",
                            elementType: "text",
                            title: 'Last Name',
                            required: true,
                        }
                    }
                }
            }
        }
    }
}

export const advanced = {
    elementType: "form",
    elements: {
        todos: {
            elementType: "array",
            elements: {
                id: {
                    dataType: 'readOnly',
                    value: 'testst',
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

export default {
    basic,
    advanced
}
