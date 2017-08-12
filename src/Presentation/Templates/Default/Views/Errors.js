import React, { Component } from "react"
import {View, Text } from "react-native"

export default class extends Component {
    render() {
	    const { styleObject, errors, associatedElementType } = this.props
	    const mergedStyles = [Styles.Errors, styleObject ? styleObject[associatedElementType+'Errors'] : {}]
        return (
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                    {errors.map( (error, i) => <Text style={mergedStyles} key={i}>{error}</Text>) }
            </View>
        )
    }
}

const Styles = {
	Errors: {
		fontSize: 12,
		fontWeight: '500',
		color: "#dd4444",
		paddingHorizontal: 10
	}
}