import React from "react";
import { View, StyleSheet} from 'react-native';
import { Title, Subtitle, Helper } from '../Elements';

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
            <View style={Styles.View}>
                <Title >{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <InputType {...this.props} />
                <Helper>{helper}</Helper>
                {/*<Error styles={styles} {...error} />*/}
            </View>
        );
    }
}

const Styles = StyleSheet.create({
	View: {
		marginBottom: 5,
		marginTop: 5,
	}
})
