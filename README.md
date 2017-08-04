![Screenshot](/images/dynaform_128.png)

A simple React-Native component capable of building dynamic react-native forms out of a JSON schema. This project is loosely based on [React Json Schema From](https://github.com/mozilla-services/react-jsonschema-form).

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)

  - [The schema](#the-schema)
  - [Form initialization](#form-initialization)
  - [Form event handlers](#form-event-handlers)

- [Form customization](#form-customization)
- [Form data validation](#form-data-validation)

# Installation

Install the repo via npm

```
$ npm install react-native-dynaform --save
```

> Note: this is not live yet. So for now this is not true...

# Usage

The whole purpose of this component is to enable dynamic form creation via a JSON schema. It is only fitting that we start with the Schema

## The Schema

```
{
    inputType: "object",
    properties: {
        "firstName": {
            dataType: "string",
            inputType: "text",
            placeholder: 'Please enter your first name',
            title: 'First Name',
            subtitle:'What yo name?',
            helper: 'Your first name, kind person!',
            required: true
        },
        "lastName": {
            dataType: "string",
            inputType: "text",
            title: 'Last Name',
            required: true,
        }
    }
}
```

Next create the

<dynaform> object and pass it the schema and optionally a default state.</dynaform>

## Form initialization

```
import React from 'react';
import DynaForm from './src/DynaForm.js'
import schema from './schema/schema.js'

export default class App extends React.Component {
  render() {
    const initialState = {
        "firstName": "Dyna",
        "lastName": "Form"
    }

    return (
          <DynaForm
              schema={schema}
              data={{}}
          />
    )
  }
}
```

## Form data validation

To specify how you want your form fields validated, DynaForm ships with a handful of built-in, ready to roll validators. Attach your validators to your field properties like so:

```
{
    inputType: "object",
    properties: {
        "email": {
            dataType: "string",
            inputType: "text",
            title: 'First Name',
            required: true,                         // Shorthand for validation: ['required']
            validation: ['required', 'minimum:6'],  // Forces this field to be at least 6 characters long
        },
    }
}
```

Validators can take arguments or be just place true/false functions. "required", for example, doesn't take arguments, so you write it just as:

```
validators: ['required']
```

or, for short,

```
required: true,
```

Other validators need an argument to work, such as minimum or maximum lengths:

```
validation: ['required', 'minimum:6', 'maximum:24']
```

This specifies that the field must be set and be between 6 and 24 characters.

Validator types:

```
    required
    minimum:<number>
    maximum:<number>
    numeric
    range:<from>:<to>
    email
    phone-number
    regex:<expression>
```
