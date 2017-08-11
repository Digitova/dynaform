import React from "react"
import { View, StyleSheet } from "react-native"
import { Title, Subtitle, Helper, Errors } from "../Views"

export default class extends React.Component {
    render() {
        const {
            style,
            errors
        } = this.props

        const ElementType = this.props.elementType
        return (
            <View style={Styles.View}>
                {this.renderTitle()}
                {this.renderSubtitle()}
                <ElementType {...this.props} />
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
        marginBottom: 5,
        marginTop: 5
    }
})
