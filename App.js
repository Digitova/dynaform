import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Form from './src/Form.js'
import testSchema from './tests/testSchema';

export default class App extends React.Component {
  render() {

    const predata = {
        firstName: 'Hello',
        lastName: 'World',
        phoneNumber: 'State here :D',
        subForm: {
            firstName: 'Woot',
            lastName: 'Woot',
            phoneNumber: "That's the sound of the police!",
        }
    }
    return (
        <View>
          <StatusBar hidden={true} />
          <Form schema={testSchema.basic} data={predata} styleObject={Styles} />
        </View>
    );
  }
}


const Styles = {
    text: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'red'
    },
    password: {
        borderColor: 'blue'
    }
}