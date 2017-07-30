import React from "react";
import { View } from 'react-native';
import { Title, Subtitle, Helper } from '../Elements';
import Styles from '../../styles'

export default class extends React.Component {
    render() {
        const {
            schema,
            title,
            subtitle,
            helper,
            style,
            inputTypeName
        } = this.props;

        const InputType = this.props.inputType;
        return (
            <View>
                <Title style={Styles[inputTypeName]} >{title}</Title>
                <Subtitle style={Styles[inputTypeName]}>{subtitle}</Subtitle>
                <InputType {...this.props} style={Styles[inputTypeName]} />
                <Helper style={Styles[inputTypeName]}>{helper}</Helper>
                {/*<Error styles={styles} {...error} />*/}
            </View>
        );
    }
}
