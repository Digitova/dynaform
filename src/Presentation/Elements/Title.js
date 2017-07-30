import React, { Component } from "react";
import { Text } from 'react-native';
import Label from './Label';

export default class Title extends Component {
    render() {
        const {style} = this.props
        
        return (
            <Label style={style}><Text>{title}</Text></Label>
        );
    }
}
