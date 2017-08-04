import React, { Component } from "react"
import {View, Text } from "react-native"
import Label from './Label'

export default class extends Component {
    render() {
	    const { styleObject, errors, associatedInputType } = this.props
	    const mergedStyles = [Styles.Title, styleObject ? styleObject[associatedInputType+'Title'] : {}]
        return (
            <View styles={mergedStyles}>
                    {errors.map( (error, i) => <Label key={i}>{error}</Label>) }
            </View>
        )
    }
}
