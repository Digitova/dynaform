import React, { Component } from "react"
import { Switch, StyleSheet } from "react-native"

export default class extends Component {
    render() {
	    const {
		    name,
		    styleObject,
		    placeholder,
		    data,
		    dataType,
		    validators,
		    error,
		    disabled,
		    onChange,
		    onSubmit,
		    ...additionalProps
	    } = this.props


	    return (
            <Switch
                name={name}
                style={[Styles.Switch, styleObject ? styleObject['switch'] : {}]}
                value={data ? data : false}
                disabled={!!disabled}
                onValueChange={onChange}
                {...additionalProps}
                onSubmitEditing={onSubmit}
                underlineColorAndroid="rgba(0,0,0,0)"
            />
        )
    }
}

const Styles = StyleSheet.create({
	Switch: {
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		paddingHorizontal: 5
	}
})
