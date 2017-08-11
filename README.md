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

The whole purpose of this component is to enable dynamic form creation via a JSON schema.

Create the

<dynaform> object and pass it the schema and optionally a default state.</dynaform>

```javascript
import React from 'react';
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
                required: true
            },
            "lastName": {
                dataType: "string",
                elementType: "text",
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

# The schema

The schema defines the structure, data types, and is used to customize the form.

## Element Types

Each level of the schema requires an _elementType_ property. The _elementType_ property is a required field and describes the type of form input at this level of the schema.

```javascript
{
    elementType: "object | string | password | ..."
    ...
}
```

Next we will detail the different element types and the available properties for each.

### elementType: "form"

| Property   | Type       | Optional/Required? |
| ---------- | ---------- | ------------------ |
| title      | string     | optional           |
| properties | jsonObject | required           |

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

| Property    | Type    | Optional/Required? |
| ----------- | ------- | ------------------ |
| dataType    | string  | required           |
| title       | string  | optional           |
| placeholder | string  | optional           |
| subtitle    | string  | optional           |
| helper      | string  | optional           |
| required    | boolean | optional           |

Example:

```javascript

"formElement1": {
    elementType: "text",
    dataType: "string",
    placeholder: "Please enter your first name",
    title: "First Name",
    subtitle: "What yo name?",
    helper: "Your first name, kind person!",
    required: true
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
            required: true,                         // Shorthand for validation: ['required']
            validation: ['required', 'minimum:6'],  // Forces this field to be at least 6 characters long
        },
    }
}
```

Validators can take arguments or be just place true/false functions. "required", for example, doesn't take arguments, so you write it just as:

```javascript
validators: ['required']
```

or, for short,

```javascript
required: true,
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
    email
    phone-number
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

*styling info here*