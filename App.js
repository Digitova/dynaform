import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DynaForm from './src/DynaForm.js'
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
          <DynaForm
              schema={testSchema.basic}
              data={predata}
              styleObject={Styles}
          />
        </View>
    );
  }
}


const Styles = {
    text: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'red'
    },
    textTitle: {
        color: 'green'
    },
    password: {
        borderColor: 'blue'
    }
}