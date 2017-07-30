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

        return (
            <TextInput
                {...additionalProps}
                name={name}
                style={Styles.TextInput}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                onChangeText={onChange}
                defaultValue={data}
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
