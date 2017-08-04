import React from "react"
import Label from './Label'

export default class extends React.Component {
    render() {
	    const { styleObject, associatedInputType } = this.props
	    const mergedStyles = [Styles.Title, styleObject ? styleObject[associatedInputType+'Title'] : {}]
	    return (
            <Label style={mergedStyles}>
                {this.props.children}
            </Label>
        )
    }
}
