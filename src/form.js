import React, { Component } from "react";
import Schema from './Container/Inputs/Schema';

class Form extends Component {
	render() {
		const { schema } = this.props;

		return (
			<Schema schema={schema}></Schema>
		);
	}
}


export default Form;
