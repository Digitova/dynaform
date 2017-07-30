import React, { Component } from "react";
import Schema from './Container/InputGenerators/Schema';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    onSubmitHandler = () => {
        if(typeof this.props.onSubmit == 'function') {
            this.props.onSubmit(this.state)
        }
    }

	onChange = (formData) => {
		this.setState(Object.assign({},this.state,formData), () => {
			if (this.props.onChange) {
				this.props.onChange(this.state);
			}
		});
	};

    render() {
        const { schema } = this.props;

        return (
            <Schema schema={schema}
                    onChange={this.onChange}
                    onSubmit={this.onSubmitHandler}
            />
        );
    }
}


export default Form;
