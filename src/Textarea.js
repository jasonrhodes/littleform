import React from "react";
import { BaseInput } from "./BaseInput";
import { ErrorMessage } from "./ErrorMessage";

export function Textarea({ validators, ...inputProps }) {
  return (
    <BaseInput
      validators={validators}
      name={inputProps.name}
      getChangeEventValue={event => event.target.value}
      render={({ value, onChange, onBlur, onFocus, ...rest }) => (
        <React.Fragment>
          <textarea
            className="littleform-textarea"
            {...inputProps}
            value={value}
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
