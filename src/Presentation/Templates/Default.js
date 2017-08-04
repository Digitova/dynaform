import React from "react"
import { View, StyleSheet } from "react-native"
import { Title, Subtitle, Helper } from "../Elements"

export default class extends React.Component {
    render() {
        const { schema, title, subtitle, helper, style, inputTypeName } = this.props

        const InputType = this.props.inputType
        return (
            <View style={Styles.View}>
                {this.renderTitle()}
                {this.renderSubtitle()}
                <InputType {...this.props} />
                {this.renderHelper()}
                {/*<Error styles={styles} {...error} />*/}
            </View>
        )
    }
    renderTitle() {
        if (this.props.title) {
            return (
                <Title>
                    {this.props.title}
                </Title>
            )
        }
        return null
    }
    renderSubtitle() {
        if (this.props.subtitle) {
            return (
                <Subtitle>
                    {this.props.subtitle}
                </Subtitle>
            )
        }
        return null
    }
    renderHelper() {
        if (this.props.helper) {
            return (
                <Helper>
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
