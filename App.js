import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Form from './src/form'

export default class App extends React.Component {
  render() {
    return (
        <View>
          <StatusBar hidden="true" />
          <Form schema="{ type: 'asdfa' }">\
          </Form>
        </View>
    );
  }
}
