import React from "react";
import classnames from "classnames";
import { withForm } from "./Form";

const identity = v => v;

class BaseInputView extends React.Component {
  state = {
    active: false,
    touched: false,
    errorMessage: null
  };

  componentDidMount() {
    const { initialValue = "" } = this.props;
    this.props.form.onChange({ [this.props.name]: initialValue });
    this.setValidState();
  }

  componentDidUpdate(prevProps) {
    const { form, name } = this.props;
    if (prevProps.form.values[name] !== form.values[name]) {
      this.setValidState();
    }
  }

  handleChange = event => {
    const { getChangeEventValue = identity } = this.props;
    this.props.form.onChange({ [this.props.name]: getChangeEventValue(event) });
  };

  handleFocus = () => {
    this.setState({ active: true });
  };

  handleBlur = () => {
    this.setState({ touched: true, active: false }, this.setValidState);
  };

  setValidState = () => {
    const errorMessage = this.checkValidity();
    this.setState({ errorMessage });
    this.props.form.onValidity({ [this.props.name]: !errorMessage });
  };

  checkValidity() {
    const { form, name, validators = [] } = this.props;
    const value = form.values[name];
    const failedValidator = validators.find(validate => validate(value));
    return failedValidator ? failedValidator(value) : null;
  }

  render() {
    const { form, name } = this.props;
    const { errorMessage, active, touched } = this.state;
    const valid = form.validity[name] !== false;
    const classes = classnames({
      "littleform-input": true,
      "littleform-input-active": active,
      "littleform-input-inactive": !active,
      "littleform-input-invalid": !valid,
      "littleform-input-touched": touched
    });
    return (
      <span className={classes}>
        {this.props.render({
          form,
          value: this.props.form.values[this.props.name] || "",
          valid,
          errorMessage,
          active,
          touched,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        })}
      </span>
    );
  }
}

export const BaseInput = withForm(BaseInputView);
