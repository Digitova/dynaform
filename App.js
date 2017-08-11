import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DynaForm from './src/DynaForm.js'
import testSchema from './tests/testSchema';

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			formData: {
				firstName: 'Hello',
				lastName: 'World',
				isAdmin: true
			}
		}
	}

    render() {
	    return (
	        <View>
	          <StatusBar hidden={true} />
	          <DynaForm
	              schema={testSchema.basic}
	              data={this.state.formData}
	              styleObject={Styles}
	              onSubmit={this.onFormSubmit.bind(this)}
	              onChange={this.onDataChange.bind(this)}
	          />
	        </View>
	    );
    }

	onDataChange(data){
	//	console.log(data);
	}

	onFormSubmit(data){
	//	console.log(data);
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