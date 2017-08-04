import React, { Component } from "react"
import { View, Text } from "react-native"

export default class extends Component {
    render() {
        const { styles, errors } = this.props
        return (
            <View styles={styles}>
                <View>
                    {errors.map( (error, i) => <Text key={i}>{error}</Text>) }
                </View>
            </View>
        )
    }
}
