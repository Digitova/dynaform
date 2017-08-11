export const basic = {
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
	    "password": {
        	dataType: 'string',
		    elementType: 'password',
		    title: 'Password'
	    },
	    "isAdmin":{
		    dataType: 'boolean',
		    elementType: "switch",
		    title: 'Is Admin?',
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
