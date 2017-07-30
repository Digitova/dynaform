import React, { Component } from "react";
import { View } from "react-native";


class Schema extends Component {
    render() {
        const {
            schema,
            ...additionalProps
        } = this.props;

        const InputType = this.getInputType(schema);
        const Template = this.getTemplate(schema);

        return (
            <Template
                {...additionalProps}
                inputType={InputType}
                schema={schema}
                title={schema.title}
                subtitle={schema.subtitle}
                helper={schema.helper}
            />
        );
    }

    getTemplate(schema){
        const templates = require("../../Presentation/Templates").default;
        return templates.Default;
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
