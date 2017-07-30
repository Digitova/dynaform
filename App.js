import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Form from './src/form'

export default class App extends React.Component {
  render() {
      const schema = {
          inputType: 'object',
	      properties: {
		      "firstName": {
			      dataType: "string",
			      placeholder: 'Please enter your first name',
			      inputType: "text",
			      title: 'First Name',
			      helper: 'Your first name, kind person!',
			      required: true
		      },
		      "lastName": {
			      dataType: "string",
			      inputType: "text",
			      title: 'Last Name',
			      required: true,
		      },
		      "phoneNumber": {
			      dataType: "string",
			      inputType: "text",
			      validator: "phoneNumber",
		      }
	      }
      };

    return (
        <View>
          <StatusBar hidden={true} />
          <Form schema={schema } />
        </View>
    );
  }
}
