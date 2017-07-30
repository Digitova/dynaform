import React, { Component } from "react";
import * as Inputs from '../../Presentation/Inputs'
import * as InputGenerators from './index'
const inputTypes = Object.assign({}, Inputs.default, InputGenerators.default)

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
        console.log([schema.inputType, inputTypes])
        return this.isSupportedInputType(schema.inputType, inputTypes) ? inputTypes[schema.inputType] : inputTypes.UnsupportedInput;
    }

    isSupportedInputType(inputName,inputs){
        return inputName in inputs;
    }
}


export default Schema;
