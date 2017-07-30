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
		const inputs = require("../Inputs").default;
		const inputTypeName = INPUT_TYPES[schema.inputType];


		const InputType = this.getInputType(inputTypeName,inputs);
		return (
			<Template
				schema={schema}
				inputType={InputType}
	            inputTypeName={inputTypeName} />
		);
	}

	getInputType(inputName,inputs){
		return  this.isSupportedInputType(inputName,inputs) ? inputs[inputName] : inputs.UnsupportedInput;
	}

	isSupportedInputType(inputName,inputs){
		return inputName in inputs;
	}
}


export default Schema;
