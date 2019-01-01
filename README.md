# littleform

A React form library that does very little. Requires React 16.3+

## Install

```
npm install littleform
```

or

```
yarn add littleform
```

## Play with littleform

You can take the library for a spin using codesandbox.io (or any online code app that lets you download packages from npm)

[![Edit littleform example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jvpkpvk23v)

## Basic Usage

littleform uses React context, exporting a `Form` component as the provider. It also exposes a number of default inputs that can be used inside of the provider, which will "just work".

```js
import React from "react";
import { Form, TextInput } from "littleform";

export class SubscribePage extends React.Component {
  handleSubmit = async ({ values, clear }) => {
    await this.props.subscribe(values);
    clear();
  };

  render() {
    return (
      <React.Fragment>
        <h1>Subscribe to News</h1>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <TextInput name="email" placeholder="Email" />
          </div>
          <div>
            <button type="submit">Subscribe</button>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}
```

## Included Inputs

littleform ships with a number of basic form inputs which each accept the following props:

- `name` (string)  
  This is required and dictates the key which will be used for this form value.

- `validators` (array of functions)  
  Optional. If set, all of the included functions will be run when a value is changed. See [validation section](#validation) for more.

- `...rest`  
  The rest of the passed in props (excluding props defined below for other input types) are passed to the underlying HTML element (e.g. `,input>`, `<select>`, etc.), along with the `name` prop.

#### TextInput

Basic `<input type="text">` input. No additional props.

```js
<TextInput name="firstName" placeholder="First Name" />
```

#### Textarea

Basic `<textarea>` input. No additional props.

```js
<Textarea name="comment" placeholder="Leave your comment..." />
```

#### Checkboxes

Checkboxes are broken up into 2 types, single and grouped.

`<SingleCheckbox>` is a simple, single checkbox with a corresponding boolean value. Checked is true, unchecked is false.

```js
<SingleCheckbox name="isPublished" />
```

`<GroupedCheckbox>` is used for advanced groups of checkboxes where one or more items can be selected. Each of these should share their "name" prop, while also providing a "value" prop which will be included in an array value for that group's name. (i.e. in the below example, checking the first two will result in `{ "colors": ["red", "green"] }`)

```js
<label htmlFor="color-red">
  <GroupedCheckbox name="colors" value="red" id="color-red" />
  Red
</label>
<label htmlFor="color-green">
  <GroupedCheckbox name="colors" value="green" id="color-green" />
  Green
</label>
<label htmlFor="color-blue">
  <GroupedCheckbox name="colors" value="blue" id="color-blue" />
  Blue
</label>
```

### Option groups

There are several input types that are just a list of options presented in different ways. All of these accept an `options` prop which should be an array of options objects. Each options object should provide a `value` and optional `label`.

#### Checkbox group

`<CheckboxGroup>` is a convenience wrapper around the grouped checkbox component. Here you can list the name once, then provide an `options` prop

```js
<CheckboxGroup
  name="colors"
  options={[
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" }
  ]}
/>
```

#### Radio group

The `<RadioGroup>` component produces a single string value representing the one item currently selected in the group.

```js
<RadioGroup
  name="favoriteBand"
  options={[
    { value: "beatles", label: "The Beatles" },
    { value: "stones", label: "The Rolling Stones" },
    { value: "zeppelin", label: "Led Zeppelin" },
    { value: "hanson", label: "Hanson" }
  ]}
/>
```

#### Select box

The `<Select>` component is a single-select input that, like the radio group, produces a single string value representing the selected option.

```js
<Select
  name="favoriteBand"
  options={[
    { value: "beatles", label: "The Beatles" },
    { value: "stones", label: "The Rolling Stones" },
    { value: "zeppelin", label: "Led Zeppelin" },
    { value: "hanson", label: "Hanson" }
  ]}
/>
```

## Initial values

You can pass an object to the `Form` provider component that represents the intial values you want the form to be loaded with. This works well for default values or for something like an edit form.

```js
<Form
  initalValues={{
    firstName: "Jane",
    lastName: "Smith"
  }}
>
  <TextInput name="firstName" />
  <TextInput name="lastName" />
</Form>
```

_Note: if you are retrieving your initial values from a data store or other async operation, don't mount your form until your values are ready. The initial values will only be applied on form mount._

## Validation

Validators can be passed to any included input via the `validators` prop, which should be an array of validation functions.

Each function will receive the current value to be validated and should return null/undefined if the value is valid, or a string (representing the error message for the invalid state) if invalid. You can define any kind of validator you want if it follows those conventions.

littleform validation happens _on blur_ and _on submit_, so the validity of an input isn't evaluated until either the input has been touched and blurred, or once the form has been submitted.

`littleform` ships with a few basic validators (but you can define any validators you want):

- `validators.required`  
  Ensures a value has been entered for the given input.

- `validators.isNumber`  
  Ensures the value is a number.

- `validators.maxChoices(n)`  
  Ensures the given option group has a maximum of `n` selected choices.

- `validators.minChoices(n)`  
  Ensures the given option group has a minimum of `n` selected choices.

- `validators.exactChoices(n)`  
  Ensures the given option group has exactly `n` selected choices.

## Building custom inputs

`littleform` makes it easy to create your own custom inputs that work however you want them to work. You can build it completely from scratch using the provided `FormConsumer` or `withForm` helper, or you can use the `BaseInput` as a starting point like all of the included inputs.

_TODO: provide more info here_
