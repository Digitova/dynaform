import React from "react";

const INPUT_TYPES = {
	text: "Text",
	object: "Object",
	password: "Password",
};

class Schema extends React.Component {
	render() {
		const { schema } = this.props;
		const inputs = require("../inputs").default;


		const InputType = this.getInputType(schema,inputs);

		return (
			<InputType schema={schema}/>
		);
	}

	getInputType(schema,inputs){
		const inputName = INPUT_TYPES[schema.inputType];
		return  this.isSupportedInputType(inputName,inputs) ? inputs[inputName] : inputs.UnsupportedInput;
	}

	isSupportedInputType(inputName,inputs){
		return inputName in inputs;
	}
}


export default Schema;
