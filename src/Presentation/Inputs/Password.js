import React, { Component } from "react"
import Text from "./Text"

export default class extends Component {
    render() {
        const {styleObject, ...addtionalProps} = this.props
        const mergedStyles = styleObject['password'] ? {text: styleObject['password']} : {text: {}}
        return (
            <Text secureTextEntry={true}
                  styleObject={mergedStyles}
                  {...addtionalProps}
            />
        )
    }
}