import React, { Component } from "react";
import { Switch } from "react-native";

export default class extends Component
{

    onValueChangeHandler = (value) => {
        this.props.onChange(this.props.name, value)
    }

    render() {
        const {
            style,
            disabled,
            data,
            ...additionalProps,
        } = this.props
        return (
            <Switch
                style={style}
                
                disabled={!!disabled}
                onValueChange={onValueChangeHandler}
                {...additionalProps}
            />
        );
    }
}
