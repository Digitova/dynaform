import React, { Component } from "react";
import Label from './Label';

export default class extends Component {
    render() {
        const {style} = this.props

        return (
            <Label style={style}>{this.props.children}</Label>
        );
    }
}
