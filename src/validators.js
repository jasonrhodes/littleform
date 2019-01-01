export function required(value) {
  return value !== 0 && !value ? "This value is required" : null;
}

export function isNumber(value) {
  return isNaN(Number(value)) ? "This value must be a number" : null;
}

export function minChoices(min) {
  return (value = []) =>
    value.length < min ? `Must choose a minimum of ${min} options` : null;
}

export function maxChoices(max) {
  return (value = []) =>
    value.length > max ? `Must choose a maximum of ${max} options` : null;
}

export function exactChoices(num) {
  return (value = []) =>
    value.length !== num ? `Must choose exactly ${num} options` : null;
}
