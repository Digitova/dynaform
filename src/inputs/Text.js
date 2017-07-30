import React from "react";
import { TextInput } from "react-native";

class Text extends React.Component {
    render() {
        const {
            name,
            styles,
            placeholder,
            value,
            dataType,
            validators,
            error,
            onChange,
            onSubmit,
            ...additionalProps,
        } = this.props
        return (
            <TextInput
                {...additionalProps}
                name={name}
                style={styles}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                onChangeText={(text) => this.setState({text})}
            />
        );
    }
}


export default Text;
