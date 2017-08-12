import React, { Component } from "react"
import { View, ScrollView,StyleSheet, Text } from "react-native"
import Schema from "./Schema"

export default class extends Component {
    render() {
        const { schema, data, styleObject } = this.props
	    const sections = schema.sections

        return (
            <ScrollView>
                {sections.map((section, index) => {

	                const elements = Object.keys(section.elements)

                    return (<View key={index} style={{flex: 1, marginBottom: schema.sectionSpacing > 0 ? schema.sectionSpacing: 1}}>
                                {this.renderHeader(section.header)}
	                            {this.renderSubheader(section.subheader)}
                                {elements.map((elementName, elementIndex) => {
                                    return (
                                        <Schema
                                            schema={section.elements[elementName]}
                                            data={data && data[elementName] ? data[elementName] : null}
                                            key={elementIndex}
                                            name={elementName}
                                            onChange={this.props.onChange}
                                            styleObject={styleObject}
                                        />
                                    )
                                })}
	                            {this.renderHelper(section.helper)}

                    </View>)

                })}
            </ScrollView>
        )
    }

	renderHeader(header) {
		if (header) {
			return (
                <Text style={Styles.Header}>{header}</Text>
			)
		}
		return null
	}
	renderSubheader(subheader) {
		if (subheader) {
			return (
                <Text style={Styles.Subheader}>{subheader}</Text>
			)
		}
		return null
	}
	renderHelper(helper) {
		if (helper) {
			return (
                <Text style={Styles.Helper}>{helper}</Text>
            )
		}
		return null
	}
}


const Styles = StyleSheet.create({
	Header: {
		fontSize: 14,
		fontWeight: '700',
		color: "#666",
		paddingHorizontal: 10,
		marginTop: 20
	},
	Subheader: {
		fontSize: 11,
		color: "#666",
		paddingHorizontal: 10
	},
	Helper: {
		fontSize: 12,
		color: "#666",
		paddingHorizontal: 10
	}
})
