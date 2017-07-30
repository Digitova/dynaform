import React from "react";
import Schema from './Container/Inputs/Schema';

class Form extends React.Component {
	render() {
		const { schema } = this.props;

		return (
			<Schema schema={schema}></Schema>
		);
	}
}


export default Form;
