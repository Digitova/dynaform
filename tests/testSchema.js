export const basic = {
    elementType: "form",
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
				}
			}
		},
		{
			header: "PICKLES",
			elements: {
				'pickles': {
					dataType: 'string',
					elementType: 'picker',
					items: {
						dill: 'Dill Pickles',
						egg: 'Pickled Egg',
						bb: 'Bread & Butter',
					}
				}
			}
		}
	]
}


export default {
    basic
}
