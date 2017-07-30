import React, { Component } from "react";
import { View, TextInput } from "react-native";
import Schema from './Schema'

export default class extends Component {
    render() {
        const { schema, onChange, data } = this.props;
        const properties = Object.keys(schema.properties);

        return (
            <View>
                {properties.map((name,index) => {
                    return (
                        <Schema
                            schema={schema.properties[name]}
                            data={data && data[name] ? data[name] : null}
                            key={index}
                            name={name}
                            onChange={onChange}
                        />
                    );
                })}
            </View>
        );
    }
}
