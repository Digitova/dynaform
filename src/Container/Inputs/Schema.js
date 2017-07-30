import React, { Component } from "react";
import { View } from "react-native";
import Template from "../../Presentation/Templates/Default"

const INPUT_TYPES = {
	text: "Text",
	object: "ObjectType",
	password: "Password",
};

class Schema extends Component {
	render() {
		const { schema } = this.props;

		const InputType = this.getInputType(schema);

		return (
			<Template inputType={InputType} schema={schema} />
		);
	}

	getInputType(schema){
		const inputs = require("../Inputs").default;

		return this.isSupportedInputType(schema.inputType,inputs) ? inputs[schema.inputType] : inputs.UnsupportedInput;
	}

	isSupportedInputType(inputName,inputs){
		return inputName in inputs;
	}
}


export default Schema;
