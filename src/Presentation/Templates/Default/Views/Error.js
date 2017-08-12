import React from "react"
import Label from './Label'

export default class extends React.Component {
    render() {
	    const { styleObject, associatedElementType } = this.props
	    const mergedStyles = [Styles.Error, styleObject ? styleObject[associatedElementType+'Error'] : {}]
	    return (
            <Label style={mergedStyles}>
                {this.props.children}
            </Label>
        )
    }
}

const Styles = {
	Error: {
		fontSize: 10,
		fontWeight: '700',
		color: "#dd4444",
		paddingHorizontal: 10
	}
}