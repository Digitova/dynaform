import React from "react"
import Label from './Label'

export default class extends React.Component {
    render() {
	    const { styleObject, associatedElementType } = this.props
	    const mergedStyles = [Styles.Title, styleObject ? styleObject[associatedElementType+'Title'] : {}]
	    return (
            <Label style={mergedStyles}>
                {this.props.children}
            </Label>
        )
    }
}

const Styles = {

}