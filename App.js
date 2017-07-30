import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Form from './src/form'

export default class App extends React.Component {
  render() {
      const schema = {
          inputType: 'as',
          xxx:'asdf',
      };

    return (
        <View>
          <StatusBar hidden={true} />
          <Form schema={schema } />
        </View>
    );
  }
}
