import React, { Component } from "react";
import { TextInput } from "react-native";

export default class Text extends Component {
	render() {
		const {
			name,
			styles,
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
                style={styles}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                onChangeText={(text) => this.setState({text})}
            />
		);
	}
}