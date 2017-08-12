export const basic = {
    elementType: "form",
	sectionSpacing: 30,
	sections: [
		{
			header: "PROFILE INFORMATION",
			elements: {
				"name": {
					dataType: "string",
					elementType: "text",
					templateType: "inline",
					title: 'Name',
					subtitle: 'What is the user\'s Name?',
					placeholder: 'John Doe',
					required: true
				},
				"age": {
					dataType: "number",
					elementType: "text",
					templateType: "inline",
					title: 'Age',
					placeholder: '32',
					required: true
				},
				"sex": {
					dataType: "string",
					elementType: "text",
					templateType: "inline",
					title: 'Sex',
					placeholder: 'Male',
					required: true
				},
			}
		},
		{
			header: "AUTHENTICATION INFORMATION",
			elements: {
				"email": {
					dataType: "string",
					elementType: "text",
					templateType: "inline",
					title: 'Email',
					placeholder: 'john.doe@dynaform.com',
					required: true,
				},
				"password": {
					dataType: "string",
					elementType: "password",
					templateType: "inline",
					title: 'Password',
					placeholder: '************',
					required: true,
				}
			}
		},
		{
			header: "USER SETTINGS",
			subheader: "Section subheading",
			elements: {
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
				"canCreateUsers":{
					dataType: 'boolean',
					elementType: "switch",
					templateType: "inline",
					title: "Create Users",
					subtitle: "Can this user create users?",
				},
				"deleteUsers":{
					dataType: 'boolean',
					elementType: "switch",
					templateType: "inline",
					title: "Delete Users",
					subtitle: "Can this user delete users?",
				}
			}
		},

	]
}


export default {
    basic
}
