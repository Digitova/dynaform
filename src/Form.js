import React, { Component } from "react";
import Schema from './Container/InputGenerators/Schema';
import { Text, View } from 'react-native';

class Form extends Component
{
    constructor(props) {
        super(props)
        this.state = typeof props.data == 'object' ? props.data : {}
    }

    onSubmitHandler = () => {
        if(typeof this.props.onSubmit == 'function') {
            this.props.onSubmit(this.state)
        }
    }

    onChange = (formData) => {
        this.setState(Object.assign({},this.state,formData), () => {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        });
    }

    render() {
        const { schema, data } = this.props;

        return (
            <View>
                <Schema schema={schema}
                        data={typeof data == 'object' ? data : {}}
                        onChange={this.onChange}
                        onSubmit={this.onSubmitHandler}
                />
                <Text>
                    {JSON.stringify(this.state)}
                </Text>
            </View>
        );
    }
}


export default Form;
