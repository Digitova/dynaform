import React, { Component } from "react"
import { Text, StyleSheet } from "react-native"

export default class Title extends Component {
    render() {
        const { styleObject, associatedElementType } = this.props
        const mergedStyles = [Styles.Title, styleObject ? styleObject[associatedElementType+'Title'] : {}]
        return (
            <Text style={mergedStyles}>
                {this.props.children}
            </Text>
        )
    }
}

const Styles = StyleSheet.create({
    Title: {
        fontSize: 14,
        fontWeight: '700',
        color: "#666",
        paddingHorizontal: 10,
        marginTop: 20,
    }
})
