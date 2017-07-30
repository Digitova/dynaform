import React from "react";
import { View } from 'react-native';
import Elements from '../Elements';

export default class extends React.Component {
    render() {
        const {
            schema,
            title,
            subtitle,
            helper,
            styles,
        } = this.props;

        const InputType = this.props.inputType;

        return (
            <View>
                {/*<Title styles={styles}>{title}</Title>*/}
                {/*<Subtitle styles={styles}>{subtitle}</Subtitle>*/}
                <InputType {...this.props} />
                {/*<Helper styles={styles}>{helper}</Helper>*/}
                {/*<Error styles={styles} {...error} />*/}
            </View>
        );
    }
}
