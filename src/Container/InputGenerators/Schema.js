import React, { Component } from "react";
import * as Inputs from '../../Presentation/Inputs'
import * as InputGenerators from './index'
const inputTypes = Object.assign({}, Inputs.default, InputGenerators.default)

export default class Schema extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            data: props.data ? props.data : null
        }
    }

    onChangeHandler() {
        // Changes could come in as (index, value) or as just (value) depending
        // on the schema type. E.g., props need to know what value to update,
        // so they get a (key, value); arrays need to the know index; but text
        // boxes just need to know the value.
        const name = arguments[1] ? arguments[0] : null
        const data = name ? arguments[1] : arguments[0]

        const newState = Object.assign({}, this.state)
        // If we are passed a name, update that particular element; otherwise,
        // update the data itself.
        if(name) {
            if(!newState.data) newState.data = {}
            newState.data[name] = data
        } else {
            newState.data = data
        }

        this.setState(newState, () => {
            if(this.props.name) {
                this.props.onChange(this.props.name, this.state.data);
            } else {
                this.props.onChange(this.state.data)
            }
        });
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
                onChange={this.onChangeHandler.bind(this)}
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
