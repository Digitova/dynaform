import React, { Component } from "react"
import Schema from "./Container/InputGenerators/Schema.js"
import { Text, View } from "react-native"

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data ? props.data : {}
        }
    }

    onSubmitHandler = () => {
        if (typeof this.props.onSubmit == "function") {
            this.props.onSubmit(this.state)
        }
    }

    onChange = data => {
        const newState = Object.assign({}, this.state)
        newState.data = data
        this.setState(newState)
    }

    render() {
        const { schema, data, styleObject } = this.props
        return (
            <View>
                <Schema
                    schema={schema}
                    data={typeof data == "object" ? data : {}}
                    onSubmit={this.onSubmitHandler}
                    onChange={this.onChange}
                    styleObject={styleObject}
                />
            </View>
        )
    }
}
