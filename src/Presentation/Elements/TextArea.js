import React, { Component } from "react"
import Text from "./Text"

export default class extends Component {
    render() {
	    const {styleObject, ...addtionalProps} = this.props
	    const mergedStyles = styleObject ? {text: styleObject['textArea']} : {text: {}}
        return (
            <Text
                multiline={true}
                styleObject={mergedStyles}
                {...addtionalProps}
            />
        )
    }
}
