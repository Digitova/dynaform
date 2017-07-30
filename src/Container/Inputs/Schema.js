import React, { Component } from "react";
import { View } from "react-native";
import Template from "../../Presentation/Templates/Default"

const INPUT_TYPES = {
	text: "Text",
	object: "Object",
	password: "Password",
};

class Schema extends Component {
	render() {
		const { schema } = this.props;
		const inputs = require("../Inputs").default;


		const InputType = this.getInputType(schema,inputs);

		return (
			//<View/>
			<Template inputType={InputType} />
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
