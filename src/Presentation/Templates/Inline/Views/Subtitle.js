import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default class extends React.Component {
    render() {
        const { style } = this.props

        return (
            <Text style={Styles.Subtitle}>
                {this.props.children}
            </Text>
        )
    }
}

const Styles = StyleSheet.create({
    Subtitle: {
        fontSize: 11,
        color: "#666",
    }
})
