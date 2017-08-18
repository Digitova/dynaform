![Screenshot](/images/dynaform_128.png)

A simple React-Native component capable of building dynamic react-native forms out of a JSON schema. This project is loosely based on [React Json Schema From](https://github.com/mozilla-services/react-jsonschema-form).

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [The schema](#the-schema)

  - [Element types](#input-types)

- [Form customization](#form-customization)

- [Form data validation](#form-data-validation)

# Installation

Install the repo via npm

```
$ npm install react-native-dynaform --save
```

> Note: this is not live yet. So for now this is not true...

# Usage

DynaForm allows you to turn JSON configuration into forms. These forms can be styled, can be validated, and return (via callback) a JSON object in a tree resembling the configuration you passed.

Create the `<DynaForm>` object and pass it the schema and (optional) a default state.

```javascript
import React from 'react'
import DynaForm from 'react-native-dynaform'

export default class App extends React.Component {

  render() {
    const schema = {
        elementType: "form",
        elements: {
            "firstName": {
                dataType: "string",
                elementType: "text",
                placeholder: "Please enter your first name",
                title: "First Name",
                subtitle: "What yo name?",
                helper: "Your first name, kind person!",
            },
            "lastName": {
                dataType: "string",
                elementType: "text",
                title: "Last Name",
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

# The schema

The schema defines the form structure, return datatypes, validations, and any styling customizations you wish to make.

## Element Types

Each level of the schema requires an `elementType` property. The `elementType` property is a required field that describes the type of form input at this level of the schema. It is entirely a presentational attribute used to field user input.

```javascript
{
    elementType: "object | string | password | ..."
    ...
}
```

### elementType: "form"

Property   | Type       | Optional/Required?
---------- | ---------- | ------------------
title      | string     | optional
properties | jsonObject | required

Example:

```javascript
{
    title: "Login Form",
    elementType: "form",
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

### elementType: "text"

Property    | Type    | Optional/Required?
----------- | ------- | ------------------
dataType    | string  | required
title       | string  | optional
placeholder | string  | optional
subtitle    | string  | optional
helper      | string  | optional
required    | boolean | optional

Example:

```javascript

"formElement1": {
    elementType: "text",
    dataType: "string",
    placeholder: "Please enter your first name",
    title: "First Name",
    subtitle: "What yo name?",
    helper: "Your first name, kind person!",
}
```

### elementType: "password"

Property    | Type    | Optional/Required?
----------- | ------- | ------------------
dataType    | string  | required
title       | string  | optional
placeholder | string  | optional
subtitle    | string  | optional
helper      | string  | optional
required    | boolean | optional

Passwords are text fields, so take all the variables of the text elementType. The only difference is the input is masked like a password field.

### elementType: "switch"

Property | Type    | Optional/Required?
-------- | ------- | ------------------
dataType | string  | required
title    | string  | required
subtitle | string  | optional
helper   | string  | optional
required | boolean | optional

A (typically boolean) native Switch element (like a checkbox).

Example:

```javascript

"sendMeEmail": {
    elementType: "switch",
    dataType: "boolean",
    title: "Send me email",
    subtitle: "Do you want to receive marketing emails?",
}
```

### elementType: "picker"

Property    | Type    | Optional/Required?
----------- | ------- | ------------------
dataType    | string  | required
items       | mixed   | required
title       | string  | optional
placeholder | string  | optional
subtitle    | string  | optional
helper      | string  | optional
required    | boolean | optional

Pickers are multiple select form fields where you can insert the values. To define the field items, define `items` as either an array (where the elements are the item keys and values) or an object, where object properties are keys, and the property value is its value.

Example:

```javascript
country: {
    elementType: 'picker',
    title: 'Country',
    helper: 'Your country of origin.',
    items: ['Argentina', 'Peru', 'USA'],
}

// This also works. Users will see the proper names, and when the country is
// selected, it passes back the property name. So, for example, when a customer
// selects "Argentina", the form passes back "ag" as the selection.

country: {
    elementType: 'picker',
    title: 'Country',
    helper: 'Your country of origin.',
    items: {
        ar: 'Argentina',
        pe: 'Peru',
        us: 'USA',
    }
}
```

## Form data validation

To specify how you want your form fields validated, DynaForm ships with a handful of built-in, ready to roll validators. Attach your validators to your field properties like so:

```javascript
{
    elementType: "form",
    properties: {
        "email": {
            dataType: "string",
            elementType: "text",
            title: 'First Name',
            // Forces this field to be at least 6 characters long
            validation: ['required', 'minimum:6'],
        },
    }
}
```

Validators can take arguments, but may not. For example `required` doesn't take arguments and is written as:

```javascript
validators: ['required']
```

Other validators need an argument to work, such as minimum or maximum lengths:

```javascript
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
    regex:<expression>
```

### Custom validators

If you would rather pass in your own validator to the validation functions, the validation object allows you to pass functions directly to it. The functions must be similar in signature to those in the `src/Validation` directory.

```javascript
const myForm =  {
    ...
    validation: ['required', garfield, 'minimum:4']
    ...
}

const garfield = (input) => {
    return new Promise((resolve, reject) => {
        if(input.toLowerCase() == 'lasagna') {
            // It passes!
            resolve()
        } else {
            // It fails :(
            reject('Garfield must have lasagna')
        }
    })
}
```

### Custome Styling

_styling info here_
