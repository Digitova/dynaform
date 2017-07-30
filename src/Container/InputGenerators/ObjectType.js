import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Schema from './Schema'

export default class extends Component {
	render() {
		const { schema, onChange } = this.props;
		const properties = Object.keys(schema.properties);

		return (
            <View>
	            {properties.map((name,index) => {
		            return (
			            <Schema
				            schema={schema.properties[name]}
				            key={index}
				            name={name}
			                onChange={onChange}
			            />
		            );
	            })}
            </View>
		);
	}
}
