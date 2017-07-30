import React, { Component } from "react";
import { View, Text } from "react-native";
import Schema from './Schema'

export default class extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            data: {}
        }
    }

    onChangeHandler = (name, data) => {
        const newState = Object.assign({}, this.state)
        newState.data[name] = data
        this.setState(newState, () => {
            if(this.props.name) {
                this.props.onChange(this.props.name, this.state.data);
            } else {
                this.props.onChange(this.state.data);
            }
        });
    }

    render() {
        const { schema, data } = this.props;
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
                            onChange={this.onChangeHandler}
                        />
                    );
                })}
            </View>
        );
    }
}
