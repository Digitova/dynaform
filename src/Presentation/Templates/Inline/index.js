import React from "react"
import { View, StyleSheet } from "react-native"
import { Title, Subtitle, Helper, Errors } from "./Views"

export default class extends React.Component {
    render() {
        const {
            style,
            errors
        } = this.props

        const ElementType = this.props.elementType
        return (
        	<View>
	            <View style={Styles.View}>
		            <View>
		                {this.renderTitle()}
		                {this.renderSubtitle()}
		            </View>
	                <ElementType {...this.props} />
	            </View>
			    {this.renderHelper()}
			    {errors && errors.length > 0 ? <Errors styles={style} errors={errors} /> : false }
	        </View>
        )
    }
    renderTitle() {
        if (this.props.title) {
            return (
                <Title
                    associatedElementType={this.props.elementTypeName}
                    styleObject={this.props.styleObject}
                >
                    {this.props.title}
                </Title>
            )
        }
        return null
    }
    renderSubtitle() {
        if (this.props.subtitle) {
            return (
                <Subtitle
                    associatedElementType={this.props.elementTypeName}
                    styleObject={this.props.styleObject}
                >
                    {this.props.subtitle}
                </Subtitle>
            )
        }
        return null
    }
    renderHelper() {
        if (this.props.helper) {
            return (
                <Helper
                    associatedElementType={this.props.elementTypeName}
                    styleObject={this.props.styleObject}
                >
                    {this.props.helper}
                </Helper>
            )
        }
        return null
    }
}

const Styles = StyleSheet.create({
    View: {
	    flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    padding: 10,
	    height: 40,
	    backgroundColor: "#fff",
	    borderTopWidth: StyleSheet.hairlineWidth,
	    borderBottomWidth: StyleSheet.hairlineWidth,
    },
})
