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
        const name = arguments[1] ? arguments[0] : null
        const data = name ? arguments[1] : arguments[0]
        const newState = Object.assign({}, this.state)
        newState.data = data.data ? data.data : data
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
