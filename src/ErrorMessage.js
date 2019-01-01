import React from "react";

export function ErrorMessage({ form, errorMessage, valid, touched, active }) {
  if (!errorMessage || valid || (!form.submitted && !touched) || active) {
    return null;
  }

  return <span class="littleform-error-message">{errorMessage}</span>;
}
