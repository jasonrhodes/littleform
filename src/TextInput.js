import React from "react";
import { BaseInput } from "./BaseInput";
import { ErrorMessage } from "./ErrorMessage";

export function TextInput({ validators, ...inputProps }) {
  return (
    <BaseInput
      validators={validators}
      name={inputProps.name}
      getChangeEventValue={event => event.target.value}
      render={({ value, onChange, onBlur, onFocus, ...rest }) => (
        <React.Fragment>
          <input
            className="littleform-text-input"
            type="text"
            value={value}
            {...inputProps}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <ErrorMessage {...rest} />
        </React.Fragment>
      )}
    />
  );
}
