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
        console.log('Validating against ', validators)
        validators = Array.isArray(validators) ? validators : [validators]
        // Don't take duplicate validations. This usually only filters out extra
        // "requires" when required: true is set along with a "required" validator
        validators = validators.filter((validator, i, arr) => arr.includes(validator))
        validators.forEach(validator => {
            const validatorFunction = this.getValidatorFunctionFor(validator)
            // This allows us to pass arguments to our validators by putting the
            // arguments after a colon. E.g., "length:12".
            const args = typeof validator !== 'function' ? validator.split(':').slice(0) : []
            validatorFunction(this.state.data, args).catch(this.addError.bind(this))
        })
    }

    getValidatorFunctionFor(validator) {
        if(typeof validator == 'function') return validator
        let validatorFunction = Validators.default[validator]
        if(!validatorFunction) validatorFunction = Validators.default.UnsupportedValidator
        return validatorFunction
    }

    validationHandler(eventName = EVENT_CHANGE) {
        this.clearErrors()
        if(!this.props.validation && !this.props.schema.required)  return
        console.log('Calling validation handlers for: ' + eventName)
        if(!AVAILABLE_EVENTS.includes(eventName)) {
            throw "Unavailable event passed to schema: " + eventName
        }
        // If it's just an array, we by default validate on change
        if(Array.isArray(this.props.validation)) {
            const validators = this.props.validation
            if(this.props.required) validators.push('required')
            this.validate(this.props.validation)
        } else {
            const validators = []
            if(this.props.validation && this.props.validation[eventName]) validators.concat(this.props.validation[eventName])
            if(this.props.schema.required) validators.push('required')
            this.validate(validators)
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
            this.validationHandler()
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

    isSupportedInputType(inputName, inputs) {
        return inputName in inputs
    }
}
