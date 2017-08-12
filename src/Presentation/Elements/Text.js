import React, { Component } from "react"
import { TextInput, StyleSheet } from "react-native"

export default class extends Component {
    render() {
        const {
            name,
            styleObject,
            placeholder,
            data,
            dataType,
            validators,
            error,
            errors,
            onChange,
            onSubmit,
            ...additionalProps
        } = this.props

        return (
            <TextInput
                {...additionalProps}
                name={name}
                defaultValue={data ? data : ""}
                style={[Styles.TextInput, styleObject ? styleObject['text'] : {}, errors.length > 0 ? Styles.ErrorText : {}]}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                onChangeText={onChange}
                underlineColorAndroid="rgba(0,0,0,0)"
            />
        )
    }
}

const Styles = StyleSheet.create({
    TextInput: {
        borderTopWidth: StyleSheet.hairlineWidth,
	    borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    ErrorText: {
        borderColor: "#dd4444"
    }
})
