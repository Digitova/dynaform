![Screenshot](/images/dynaform_128.png)

A simple React-Native component capable of building dynamic react-native forms out of a JSON schema.
This project is loosely based on [React Json Schema From](https://github.com/mozilla-services/react-jsonschema-form).

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [The schema](#the-schema) 
    - [Input types](#input-types)
* [Form customization](#form-customization)   
* [Form data validation](#form-data-validation)


## Installation

Install the repo via npm


```
$ npm install react-native-dynaform --save
```


> Note: this is not live yet.  So for now this is not true...

## Usage

The whole purpose of this component is to enable dynamic form creation via a JSON schema.

Create the <DynaForm> object and pass it the schema and optionally a default state.

```
import React from 'react';
import DynaForm from './src/DynaForm.js'
import schema from './schema/schema.js'

export default class App extends React.Component {

  render() {
    const schema = {
        inputType: "object",
        properties: {
            "firstName": {
                dataType: "string",
                inputType: "text",
                placeholder: "Please enter your first name",
                title: "First Name",
                subtitle: "What yo name?",
                helper: "Your first name, kind person!",
                required: true
            },
            "lastName": {
                dataType: "string",
                inputType: "text",
                title: "Last Name",
                required: true,
            }
        }
    }
  
    const initialState = {
        "firstName": "Dyna",
        "lastName": "Form"
    }
  
    return (
          <DynaForm
              schema={schema}
              data={initialState}
          />
    )
  }
}
```

## The schema
The schema defines the structure, data types, and is used to customize the form.  

### Input Types
Each level of the schema requires an _inputType_ property.  The _inputType_ property is a required field and describes 
the type of form input at this level of the schema.  

```
{
    inputType: "object | string | password | ..."
    ...
}
```

Next we will detail the different input types and the available properties for each.

#### inputType: "object"

| Property      | Type        | Optional/Required? |
| ------------- |-------------|----------|
| title         | string      | optional |
| properties    | jsonObject  | required |

Example:

```
{
    title: "Login Form",
    inputType: "object",
    properties: {
        "formElement1": {
            ...
        },
        "formElement2": {
            ...
        }
    }
}
```


#### inputType: "text"

| Property      | Type        | Optional/Required? |
| ------------- |-------------|----------|
| dataType      | string      | required |
| title         | string      | optional |
| placeholder    | string  | optional |
| subtitle        | string      | optional |
| helper        | string      | optional |
| required        | boolean      | optional |

Example:

```

"formElement1": {
    inputType: "text",
    dataType: "string",
    placeholder: "Please enter your first name",
    title: "First Name",
    subtitle: "What yo name?",
    helper: "Your first name, kind person!",
    required: true
}

```

               


