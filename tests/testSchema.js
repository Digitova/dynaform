export const basic = {
    inputType: "object",
    properties: {
        "firstName": {
            dataType: "string",
	        inputType: "text",
            placeholder: 'Please enter your first name',
            title: 'First Name',
            subtitle:'What yo name?',
            helper: 'Your first name, kind person!',
            required: true
        },
        "lastName": {
            dataType: "string",
            inputType: "text",
            title: 'Last Name',
            required: true,
        },
	    "password": {
        	dataType: 'string',
		    inputType: 'password',
		    title: 'Password'
	    },
	    "subForm": {
		    inputType: "object",
		    properties: {
			    "firstName": {
				    dataType: "string",
				    inputType: "text",
				    placeholder: 'Please enter your first name',
				    title: 'First Name',
				    subtitle:'What yo name?',
				    helper: 'Your first name, kind person!',
				    required: true
			    },
			    "lastName": {
				    dataType: "string",
				    inputType: "text",
				    title: 'Last Name',
				    required: true,
			    },
			    "subForm": {
				    inputType: "object",
				    properties: {
					    "firstName": {
						    dataType: "string",
						    inputType: "text",
						    placeholder: 'Please enter your first name',
						    title: 'First Name',
						    subtitle:'What yo name?',
						    helper: 'Your first name, kind person!',
						    required: true
					    },
					    "lastName": {
						    dataType: "string",
						    inputType: "text",
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
    inputType: "object",
    properties: {
        todos: {
            inputType: "array",
            properties: {
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
