import React from "react"
import { Text, StyleSheet } from "react-native"

export default class extends React.Component {
    render() {
        const { style } = this.props
        return (
            <Text style={Styles.Helper}>
                {this.props.children}
            </Text>
        )
    }
}

const Styles = StyleSheet.create({
    Helper: {
        fontSize: 12,
        color: "#666",
        paddingHorizontal: 10
    }
})
