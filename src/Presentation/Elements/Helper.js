import React from "react";
import { StyleSheet } from "react-native";
import Label from './Label'

export default class extends React.Component {
    render() {
        const {style} = this.props
        return (
            <Label style={Styles.Helper}>{this.props.children}</Label>
        );
    }
}

const Styles = StyleSheet.create({
	Helper: {
		fontSize: 12,
		color: '#666',
		paddingHorizontal: 10
	}
})