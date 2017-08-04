import React, { Component } from "react"
import Text from "./Text"

export default class extends Component {
    render() {
        const {styleObject, ...addtionalProps} = this.props
        const mergedStyles = {text: styleObject['password']}
        return (
            <Text secureTextEntry={true}
                  styleObject={mergedStyles}
                  {...addtionalProps}
            />
        )
    }
}