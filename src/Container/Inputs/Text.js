import React, { Component } from "react";
import { TextInput } from "react-native";

export default class extends Component {
	render() {
		const {
			name,
			style,
			placeholder,
			value,
			dataType,
			validators,
			error,
			onChange,
			onSubmit,
			...additionalProps,
		} = this.props
		return (
            <TextInput
				{...additionalProps}
                name={name}
                style={style}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                onChangeText={(text) => this.setState({text})}
            />
		);
	}
}