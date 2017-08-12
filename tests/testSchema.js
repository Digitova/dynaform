export const basic = {
    elementType: "form",
	sections: [
		{
			header: "PROFILE INFORMATION",
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
					templateType: "inline",
					title: 'Last Name',
					subtitle: 'What is the user\'s Last Name?',
					placeholder: 'Rathgeb',
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
