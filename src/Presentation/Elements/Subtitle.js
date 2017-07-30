import React from "react";
import { View } from 'react-native';
import Label from './Label';

export default class extends React.Component {
    render() {
        const {style} = this.props

        return (
            <Label style={style}>{this.props.children}</Label>
        );
    }
}
