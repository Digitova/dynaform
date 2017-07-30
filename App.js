import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Form from './src/Form.js'
import testSchema from './tests/testSchema';

export default class App extends React.Component {
  render() {

    return (
        <View>
          <StatusBar hidden={true} />
          <Form schema={testSchema.basic } />
        </View>
    );
  }
}
