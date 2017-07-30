import React, { Component } from "react";
import Schema from './Container/Inputs/Schema';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    onChangeHandler = (name, value) => {
        const newState = Object.assign({}, this.state)[name] = value
        this.setState(newState)
    }

    render() {
        const { schema } = this.props;

        return (
            <Schema schema={schema} onChange={this.onChangeHandler} />
        );
    }
}


export default Form;
