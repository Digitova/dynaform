import React from "react";
import { View } from 'react-native';
import Elements from '../Elements';
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

        console.log(Styles[inputTypeName])
        return (
            <View>
                {/*<Title styles={styles}>{title}</Title>*/}
                {/*<Subtitle styles={styles}>{subtitle}</Subtitle>*/}
                <InputType {...this.props} style={Styles[inputTypeName]} />
                {/*<Helper styles={styles}>{helper}</Helper>*/}
                {/*<Error styles={styles} {...error} />*/}
            </View>
        );
    }
}
