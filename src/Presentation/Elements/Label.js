import React from "react";
import { View } from 'react-native';

export default class extends React.Component {
    render() {
        const {styles} = this.props
        return (
            <View styles={styles}>{this.props.children}</View>
        );
    }
}
