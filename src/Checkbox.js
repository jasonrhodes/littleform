import React from "react";
import { BaseInput } from "./BaseInput";
import { ErrorMessage } from "./ErrorMessage";
import { FormConsumer } from "./Form";

export function SingleCheckbox({ validators, ...inputProps }) {
  return (
    <BaseInput
      validators={validators}
      name={inputProps.name}
      initialValue={false}
      render={({ value, onChange, onBlur, onFocus, ...rest }) => (
        <React.Fragment>
          <input
            type="checkbox"
            {...inputProps}
            value={!!value}
            checked={!!value}
            onChange={() => onChange(!value)}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <ErrorMessage {...rest} />
        </React.Fragment>
      )}
    />
  );
}

export function GroupedCheckbox(inputProps) {
  const { name, value } = inputProps;
  return (
    <FormConsumer>
      {form => {
        const groupValue = form.values[name] || [];
        const isChecked = groupValue.includes(value);

        return (
          <input
            {...inputProps}
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              isChecked
                ? form.onChange({
                    [name]: groupValue.filter(v => v !== inputProps.value)
                  })
                : form.onChange({ [name]: [...groupValue, inputProps.value] });
            }}
          />
        );
      }}
    </FormConsumer>
  );
}

export function CheckboxGroup({ validators, options, ...inputProps }) {
  return (
    <BaseInput
      validators={validators}
      name={inputProps.name}
      initialValue={[]}
      render={({ value = [], onChange, onBlur, onFocus, ...rest }) => (
        <React.Fragment>
          {options.map(checkbox => (
            <div key={checkbox.value}>
              <GroupedCheckbox
                name={inputProps.name}
                value={checkbox.value}
                id={`${inputProps.name}-${checkbox.value}`}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <label htmlFor={`${inputProps.name}-${checkbox.value}`}>
                {checkbox.label || checkbox.value}
              </label>
            </div>
          ))}
          <ErrorMessage {...rest} />
        </React.Fragment>
      )}
    />
  );
}
