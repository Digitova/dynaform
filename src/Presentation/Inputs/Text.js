import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default class extends Component {

    render() {
        const {
            name,
            style,
            placeholder,
            data,
            dataType,
            validators,
            error,
            onChange,
            onSubmit,
            ...additionalProps,
        } = this.props

        const mergedStyles = StyleSheet.flatten([Styles, style])
        return (
            <TextInput
                {...additionalProps}
                name={name}
                style={mergedStyles.TextInput}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                onChangeText={onChange}
            />
        );
    }
}

const Styles = StyleSheet.create({
    TextInput: {
        borderRadius: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#CCC',
        paddingHorizontal: 5
    }
})
