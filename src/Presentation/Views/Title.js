import React, { Component } from "react"
import { StyleSheet } from "react-native"
import Label from "./Label"

export default class Title extends Component {
    render() {
        const { styleObject, associatedElementType } = this.props
        const mergedStyles = [Styles.Title, styleObject ? styleObject[associatedElementType+'Title'] : {}]
        return (
            <Label style={mergedStyles}>
                {this.props.children}
            </Label>
        )
    }
}

const Styles = StyleSheet.create({
    Title: {
        fontSize: 14,
        fontWeight: '700',
        color: "#666",
        paddingHorizontal: 10,
        marginTop: 20
    }
})
