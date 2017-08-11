import React, { Component } from "react"
import { ScrollView, Text } from "react-native"
import Schema from "./Schema"

export default class extends Component {
    render() {
        const { schema, data, styleObject } = this.props
        const elements = Object.keys(schema.elements)

        return (
            <ScrollView>
                {elements.map((name, index) => {
                    return (
                        <Schema
                            schema={schema.elements[name]}
                            data={data && data[name] ? data[name] : null}
                            key={index}
                            name={name}
                            onChange={this.props.onChange}
                            styleObject={styleObject}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}
