import React from "react";
import Text from "./Text";

export default class extends React.Component {
    render() {
        return (
            <Text secureTextEntry={true} ...this.props />
        );
    }
}
