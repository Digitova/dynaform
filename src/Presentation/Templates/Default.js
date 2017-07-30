import React from "react";
import { View } from 'react-native';
import Elements from '../Elements'

export default class extends React.Component {
    render() {
        const {
            title,
            subtitle,
            helper,
            styles,
            fieldType,
        } = this.props
        return (
            <View>
                <Title styles={styles}>{title}</Title>
                <Subtitle styles={styles}>{subtitle}</Subtitle>
                <fieldType ...this.props />
                <Helper styles={styles}>{helper}</Helper>
                <Error styles={styles} ...error />
            </View>
        );
    }
}
