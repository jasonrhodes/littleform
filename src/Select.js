import React from "react";
import { BaseInput } from "./BaseInput";
import { ErrorMessage } from "./ErrorMessage";

export function Select({ validators, options, ...inputProps }) {
  return (
    <BaseInput
      validators={validators}
      name={inputProps.name}
      getChangeEventValue={event => event.target.value}
      render={({ value, onChange, onBlur, onFocus, ...rest }) => (
        <React.Fragment>
          <select
            {...inputProps}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          >
            {options.map(
              ({ value: optionValue, label = optionValue, ...optionProps }) => (
                <option key={optionValue} value={optionValue} {...optionProps}>
                  {label}
                </option>
              )
            )}
          </select>
          <ErrorMessage {...rest} />
        </React.Fragment>
      )}
    />
  );
}
