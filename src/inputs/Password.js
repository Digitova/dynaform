import React, { Component } from "react";
import Text from "./Text";
import { View } from 'react-native';

export default class Password extends Component {
    render() {
        const {
            name,
            title,
            subtitle,
            helper,
            styles,
            placeholder,
            value,
            dataType,
            validators,
            error,
            onChange,
            onSubmit,
        } = this.props

        return (
            <View>
                <Text />
            </View>
        );
    }
}