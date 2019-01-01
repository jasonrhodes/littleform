import React from "react";
import classnames from "classnames";

export const FormContext = React.createContext({});
export const FormConsumer = FormContext.Consumer;

export const withForm = Component => props => (
  <FormConsumer>{form => <Component {...props} form={form} />}</FormConsumer>
);

const initialState = {
  values: {},
  validity: {},
  submitted: false
};

export class Form extends React.Component {
  state = { ...initialState };

  componentDidMount() {
    if (this.props.initialValues) {
      this.restoreInitialValues();
    }
  }

  clear = () => this.setState(initialState);
  restoreInitialValues = () =>
    this.setState({ values: this.props.initialValues });

  isFormValid = () =>
    !Object.keys(this.state.validity).some(
      k => this.state.validity[k] === false
    );

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    if (!this.isFormValid()) {
      return;
    }

    this.props.onSubmit && this.props.onSubmit(this.getForm(), event);
  };

  handleChange = change => {
    this.setState({ values: { ...this.state.values, ...change } });
  };

  handleValidity = validity => {
    this.setState(state => ({
      validity: {
        ...state.validity,
        ...validity
      }
    }));
  };

  getForm = () => ({
    values: this.state.values,
    validity: this.state.validity,
    submitted: this.state.submitted,
    onChange: this.handleChange,
    onValidity: this.handleValidity,
    isValid: this.isFormValid,
    clear: this.clear,
    restoreInitialValues: this.restoreInitialValues
  });

  render() {
    const classes = classnames({
      littleform: true,
      "littleform-form-submitted": this.state.submitted
    });

    return (
      <FormContext.Provider value={this.getForm()}>
        <form className={classes} onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    );
  }
}
