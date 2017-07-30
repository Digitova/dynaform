import React, { Component } from "react";
import { Switch } from "react-native";

export default class extends Component
{

    onValueChangeHandler = (value) => {
        this.props.onChange(value)
    }

    render() {
        const {
            style,
            disabled,
            value,
            ...additionalProps,
        } = this.props
        return (
            <Switch
                style={style}
                value={!!value}
                disabled={!!disabled}
                onValueChange={onValueChangeHandler}
                {...additionalProps}
            />
        );
    }
}
