import React from "react";
import { View } from 'react-native';
import Label from './Label';

export default class extends React.Component {
    render() {
        const {styles, subtitle} = this.props
        return (
            <Label styles={styles}>{subtitle}</Label>
        );
    }
}
