import React, { Component } from "react"
import { Picker, StyleSheet } from "react-native"

const PickerItem = Picker.Item

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
            ...additionalProps
        } = this.props,
            onChange = this.onChange,
            sanitizedItems = [],
            items = this.props.schema.items

        // Here, for rendering purposes, we want an array of arrays that signify
        // key/value pairs. E.g., [ ['dill', 'Dill'], ['bb', 'Bread and Butter'] ]
        //
        // If you pass in an array, we render it down to something like:
        // ['choice 1', 'choice2'] => [ ['choice 1', 'choice 1'], ['choice2', 'choice2'] ]
        console.log(this.props)
        if(Array.isArray(items)) {
            items.forEach(item => sanitizedItems.push([item, item]))
        } else {
            Object.keys(items).forEach(key => {
                sanitizedItems.push([key, items[key]])
            })
        }

        return (
            <Picker
                name={name}
                style={[Styles.Picker, styleObject ? styleObject['picker'] : {}]}
                onValueChange={onChange}
                selectedValue={data}
                enabled={!disabled}
            >
                {sanitizedItems.map(item => <PickerItem key={item[0]} value={item[0]} label={item[1]} />)}
            </Picker>
        )
    }

    onChange = (itemValue, itemPosition) => {
        this.props.onChange(itemValue)
    }
}

const Styles = StyleSheet.create({
    Picker: {
    }
})
