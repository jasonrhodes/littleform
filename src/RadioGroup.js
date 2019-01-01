import React from "react";
import { BaseInput } from "./BaseInput";
import { ErrorMessage } from "./ErrorMessage";

export function RadioGroup({ validators, options, name }) {
  return (
    <BaseInput
      validators={validators}
      name={name}
      getChangeEventValue={event => event.target.value}
      render={({ value, onChange, onBlur, onFocus, ...rest }) => (
        <React.Fragment>
          {options.map(({ value, label = value, ...radioProps }) => {
            const key = `${name}-${value}`;
            return (
              <div key={key}>
                <label htmlFor={key}>
                  <input
                    type="radio"
                    name={name}
                    id={key}
                    key={value}
                    value={value}
                    {...radioProps}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                  />
                  {label}
                </label>
              </div>
            );
          })}
          <ErrorMessage {...rest} />
        </React.Fragment>
      )}
    />
  );
}
