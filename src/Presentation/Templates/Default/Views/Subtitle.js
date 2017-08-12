import React from "react"
import { View, StyleSheet } from "react-native"
import Label from "./Label"

export default class extends React.Component {
    render() {
        const { style } = this.props

        return (
            <Label style={Styles.Subtitle}>
                {this.props.children}
            </Label>
        )
    }
}

const Styles = StyleSheet.create({
    Subtitle: {
        fontSize: 11,
        color: "#666",
        paddingHorizontal: 10
    }
})
