import React from "react";
import Schema from './inputs/Schema';

class Form extends React.Component {
	render() {
		const { schema } = this.props;

		return (
			<Schema schema={schema}></Schema>
		);
	}
}


export default Form;
