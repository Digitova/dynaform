import React, { Component } from "react"
import * as Inputs from "../../Presentation/Inputs"
import * as InputGenerators from "./index"
import * as Validators from "../../Validation/"
const inputTypes = Object.assign({}, Inputs.default, InputGenerators.default)

export const EVENT_CHANGE = 'onChange',
             EVENT_BLUR   = 'onBlur',
             EVENT_SUBMIT = 'onSubmit',
             AVAILABLE_EVENTS = [EVENT_SUBMIT,  EVENT_BLUR, EVENT_CHANGE]

export default class Schema extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data ? props.data : null,
            errors: [],
        }
    }

    clearErrors() {
        const newState = Object.assign({}, this.state)
        newState.errors = []
        this.setState(newState)
    }

    addError(message) {
        const newState = Object.assign({}, this.state)
        newState.errors.push(message)
        this.setState(newState)
    }

    validate(validators) {
        if(!validators) return
        validators = Array.isArray(validators) ? validators : [validators]
        validators.forEach(validator => {
            let validatorFunction = typeof validator == 'function' ? validator : Validators[validator] || Validators.UnsupportedValidator
            validatorFunction(this.state.data).catch(this.addError.bind(this))
        })
    }

    // Possible events:  change, blur, submit
    validationHandler(event = EVENT_CHANGE) {
        this.clearErrors()
        if(!this.props.validation)  return
        if(!AVAILABLE_EVENTS.includes(event)) {
            throw "Unavailable event passed to schema: " + event
        }
        // If it's just an array, we by default validate on change
        if(Array.isArray(this.props.validation)) {
            this.validate(this.props.validation)
        } else {
            this.validate(this.props.validation[event])
        }
    }

    // This function is /purposefully not/ a fat arrow function. Fat arrow functions
    // don't bind the arguments variable, which we need here.
    onChangeHandler() {
        // Changes can come in as (index, value) or as just (value) depending
        // on the schema type. E.g., props need to know what value to update,
        // so they get a (key, value); arrays need to the know index; but text
        // boxes just need to know the value.
        const name = arguments[1] ? arguments[0] : null
        const data = name ? arguments[1] : arguments[0]

        const newState = Object.assign({}, this.state)
        // If we are passed a name, update that particular element; otherwise,
        // update the data itself.
        if (name) {
            if (!newState.data) newState.data = {}
            newState.data[name] = data
        } else {
            newState.data = data
        }

        this.setState(newState, () => {
            if (this.props.name) {
                this.props.onChange(this.props.name, this.state.data)
            } else {
                this.props.onChange(this.state.data)
            }
        })
    }

    render() {
        const { schema, ...additionalProps } = this.props

        const InputType = this.getInputType(schema)
        const Template = this.getTemplate(schema)
        return (
            <Template
                {...additionalProps}
                onChange={this.onChangeHandler.bind(this)}
                inputType={InputType}
                inputTypeName={this.getNameOfInputType(schema)}
                schema={schema}
                title={schema.title}
                subtitle={schema.subtitle}
                helper={schema.helper}
            />
        )
    }

    getTemplate(schema) {
        const templates = require("../../Presentation/Templates").default
        return templates.Default
    }

    getInputType(schema) {
        return this.isSupportedInputType(schema.inputType, inputTypes)
            ? inputTypes[schema.inputType]
            : inputTypes.UnsupportedInput
    }

    getNameOfInputType(schema){
	    return this.isSupportedInputType(schema.inputType, inputTypes)
            ? schema.inputType
            : 'unsupprotedInput'
    }

    isSupportedInputType(inputName, inputs) {
        return inputName in inputs
    }
}
