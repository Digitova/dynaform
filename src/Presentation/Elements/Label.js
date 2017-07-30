import React from "react";
import { View, Text } from 'react-native';

export default class extends React.Component {
    render() {
        const {style} = this.props

        return (
            <Text style={style}>{this.props.children}</Text>
        );
    }
}
