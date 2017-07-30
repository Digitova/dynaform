import React from "react";
import Label from './Label'

export default class extends React.Component {
    render() {
        const {styles} = this.props
        return (
            <Label styles={styles}>{this.props.children}</Label>
        );
    }
}
