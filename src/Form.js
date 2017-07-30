import React, { Component } from "react";
import Schema from './Container/InputGenerators/Schema';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    onChangeHandler = (name, value) => {
        const oldState = Object.assign({}, this.state)
        const newState = Object.assign({}, this.state)[name] = value
        this.setState(newState)
        if(typeof this.props.onChange == 'function') {
            this.props.onChange(newState, oldState)
        }
    }

    onSubmitHandler = () => {
        if(typeof this.props.onSubmit == 'function') {
            this.props.onSubmit(this.state)
        }
    }

    render() {
        const { schema } = this.props;

        return (
            <Schema schema={schema}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
            />
        );
    }
}


export default Form;
