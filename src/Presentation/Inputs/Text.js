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
                defaultValue={data ? data : ''}
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
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        height: 30,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#CCC',
        paddingHorizontal: 5
    }
})
