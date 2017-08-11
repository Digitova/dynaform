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
            onChange,
            onSubmit,
            ...additionalProps
        } = this.props

        return (
            <TextInput
                {...additionalProps}
                name={name}
                defaultValue={data ? data : ""}
                style={[Styles.TextInput, styleObject ? styleObject['text'] : {}]}
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
        borderColor: "#999",
        paddingHorizontal: 10,
        backgroundColor: "#fff"
    }
})
