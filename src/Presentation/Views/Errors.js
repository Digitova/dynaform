import React, { Component } from "react"
import {View, Text } from "react-native"
import Label from './Label'

export default class extends Component {
    render() {
	    const { styleObject, errors, associatedElementType } = this.props
	    const mergedStyles = [Styles.Title, styleObject ? styleObject[associatedElementType+'Title'] : {}]
        return (
            <View>
                    {errors.map( (error, i) => <Label styles={mergedStyles} key={i}>{error}</Label>) }
            </View>
        )
    }
}
