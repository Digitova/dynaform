import React, { Component } from "react"
import { StyleSheet } from "react-native"
import Label from "./Label"

export default class Title extends Component {
    render() {
        const { style } = this.props

        return (
            <Label style={Styles.Title}>
                {this.props.children}
            </Label>
        )
    }
}

const Styles = StyleSheet.create({
    Title: {
        fontSize: 18,
        color: "#333",
        paddingHorizontal: 10
    }
})
