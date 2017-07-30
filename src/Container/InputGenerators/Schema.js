import React, { Component } from "react";
import * as Inputs from '../../Presentation/Inputs'
import * as InputGenerators from './index'
const inputTypes = Object.assign({}, Inputs.default, InputGenerators.default)

export default class Schema extends Component {

    constructor(props)
    {
        super(props)
        this.state = typeof props.data == 'object' ? props.data : null
    }

    onChangeHandler = (text) => {
        if (this.props.onChange) {
            if (this.props.name) {
                this.setState(Object.assign({}, this.state, {[this.props.name]: text}), () => {
                    this.props.onChange(this.state);
                });
            } else {
                this.props.onChange(text);
            }
        }
    }

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
                onChange={this.onChangeHandler}
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
        return this.isSupportedInputType(schema.inputType, inputTypes) ? inputTypes[schema.inputType] : inputTypes.UnsupportedInput;
    }

    isSupportedInputType(inputName,inputs){
        return inputName in inputs;
    }
}
