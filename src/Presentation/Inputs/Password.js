import React, { Component } from "react"
import Text from "./Text"

export default class extends Component {
    render() {
        return <Text secureTextEntry={true} {...this.props} />
    }
}
