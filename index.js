'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));

function required(value) {
  return value !== 0 && !value ? "This value is required" : null;
}
function isNumber(value) {
  return isNaN(Number(value)) ? "This value must be a number" : null;
}
function minChoices(min) {
  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return value.length < min ? "Must choose a minimum of ".concat(min, " options") : null;
  };
}
function maxChoices(max) {
  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return value.length > max ? "Must choose a maximum of ".concat(max, " options") : null;
  };
}
function exactChoices(num) {
  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return value.length !== num ? "Must choose exactly ".concat(num, " options") : null;
  };
}

var validators = /*#__PURE__*/Object.freeze({
  required: required,
  isNumber: isNumber,
  minChoices: minChoices,
  maxChoices: maxChoices,
  exactChoices: exactChoices
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var FormContext = React.createContext({});
var FormConsumer = FormContext.Consumer;
var withForm = function withForm(Component) {
  return function (props) {
    return React.createElement(FormConsumer, null, function (form) {
      return React.createElement(Component, _extends({}, props, {
        form: form
      }));
    });
  };
};
var initialState = {
  values: {},
  validity: {},
  submitted: false
};
var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", _objectSpread({}, initialState));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clear", function () {
      return _this.setState(initialState);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "restoreInitialValues", function () {
      return _this.setState({
        values: _this.props.initialValues
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isFormValid", function () {
      return !Object.keys(_this.state.validity).some(function (k) {
        return _this.state.validity[k] === false;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      event.preventDefault();

      _this.setState({
        submitted: true
      });

      if (!_this.isFormValid()) {
        return;
      }

      _this.props.onSubmit && _this.props.onSubmit(_this.getForm(), event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (change) {
      _this.setState({
        values: _objectSpread({}, _this.state.values, change)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleValidity", function (validity) {
      _this.setState(function (state) {
        return {
          validity: _objectSpread({}, state.validity, validity)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getForm", function () {
      return {
        values: _this.state.values,
        validity: _this.state.validity,
        submitted: _this.state.submitted,
        onChange: _this.handleChange,
        onValidity: _this.handleValidity,
        isValid: _this.isFormValid,
        clear: _this.clear,
        restoreInitialValues: _this.restoreInitialValues
      };
    });

    return _this;
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.initialValues) {
        this.restoreInitialValues();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classnames({
        littleform: true,
        "littleform-form-submitted": this.state.submitted
      });
      return React.createElement(FormContext.Provider, {
        value: this.getForm()
      }, React.createElement("form", {
        className: classes,
        onSubmit: this.handleSubmit
      }, this.props.children));
    }
  }]);

  return Form;
}(React.Component);

var identity = function identity(v) {
  return v;
};

var BaseInputView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseInputView, _React$Component);

  function BaseInputView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseInputView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseInputView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: false,
      touched: false,
      errorMessage: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var _this$props$getChange = _this.props.getChangeEventValue,
          getChangeEventValue = _this$props$getChange === void 0 ? identity : _this$props$getChange;

      _this.props.form.onChange(_defineProperty({}, _this.props.name, getChangeEventValue(event)));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function () {
      _this.setState({
        active: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBlur", function () {
      _this.setState({
        touched: true,
        active: false
      }, _this.setValidState);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValidState", function () {
      var errorMessage = _this.checkValidity();

      _this.setState({
        errorMessage: errorMessage
      });

      _this.props.form.onValidity(_defineProperty({}, _this.props.name, !errorMessage));
    });

    return _this;
  }

  _createClass(BaseInputView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$initialVa = this.props.initialValue,
          initialValue = _this$props$initialVa === void 0 ? "" : _this$props$initialVa;
      this.props.form.onChange(_defineProperty({}, this.props.name, initialValue));
      this.setValidState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          form = _this$props.form,
          name = _this$props.name;

      if (prevProps.form.values[name] !== form.values[name]) {
        this.setValidState();
      }
    }
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      var _this$props2 = this.props,
          form = _this$props2.form,
          name = _this$props2.name,
          _this$props2$validato = _this$props2.validators,
          validators = _this$props2$validato === void 0 ? [] : _this$props2$validato;
      var value = form.values[name];
      var failedValidator = validators.find(function (validate) {
        return validate(value);
      });
      return failedValidator ? failedValidator(value) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          form = _this$props3.form,
          name = _this$props3.name;
      var _this$state = this.state,
          errorMessage = _this$state.errorMessage,
          active = _this$state.active,
          touched = _this$state.touched;
      var valid = form.validity[name] !== false;
      var classes = classnames({
        "littleform-input": true,
        "littleform-input-active": active,
        "littleform-input-inactive": !active,
        "littleform-input-invalid": !valid,
        "littleform-input-touched": touched
      });
      return React.createElement("span", {
        className: classes
      }, this.props.render({
        form: form,
        value: this.props.form.values[this.props.name] || "",
        valid: valid,
        errorMessage: errorMessage,
        active: active,
        touched: touched,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }));
    }
  }]);

  return BaseInputView;
}(React.Component);

var BaseInput = withForm(BaseInputView);

function ErrorMessage(_ref) {
  var form = _ref.form,
      errorMessage = _ref.errorMessage,
      valid = _ref.valid,
      touched = _ref.touched,
      active = _ref.active;

  if (!errorMessage || valid || !form.submitted && !touched || active) {
    return null;
  }

  return React.createElement("span", {
    class: "littleform-error-message"
  }, errorMessage);
}

function SingleCheckbox(_ref) {
  var validators = _ref.validators,
      inputProps = _objectWithoutProperties(_ref, ["validators"]);

  return React.createElement(BaseInput, {
    validators: validators,
    name: inputProps.name,
    initialValue: false,
    render: function render(_ref2) {
      var value = _ref2.value,
          _onChange = _ref2.onChange,
          onBlur = _ref2.onBlur,
          onFocus = _ref2.onFocus,
          rest = _objectWithoutProperties(_ref2, ["value", "onChange", "onBlur", "onFocus"]);

      return React.createElement(React.Fragment, null, React.createElement("input", _extends({
        type: "checkbox"
      }, inputProps, {
        value: !!value,
        checked: !!value,
        onChange: function onChange() {
          return _onChange(!value);
        },
        onBlur: onBlur,
        onFocus: onFocus
      })), React.createElement(ErrorMessage, rest));
    }
  });
}
function GroupedCheckbox(inputProps) {
  var name = inputProps.name,
      value = inputProps.value;
  return React.createElement(FormConsumer, null, function (form) {
    var groupValue = form.values[name] || [];
    var isChecked = groupValue.includes(value);
    return React.createElement("input", _extends({}, inputProps, {
      type: "checkbox",
      checked: isChecked,
      onChange: function onChange() {
        isChecked ? form.onChange(_defineProperty({}, name, groupValue.filter(function (v) {
          return v !== inputProps.value;
        }))) : form.onChange(_defineProperty({}, name, [].concat(_toConsumableArray(groupValue), [inputProps.value])));
      }
    }));
  });
}
function CheckboxGroup(_ref3) {
  var validators = _ref3.validators,
      options = _ref3.options,
      inputProps = _objectWithoutProperties(_ref3, ["validators", "options"]);

  return React.createElement(BaseInput, {
    validators: validators,
    name: inputProps.name,
    initialValue: [],
    render: function render(_ref4) {
      var _ref4$value = _ref4.value,
          onChange = _ref4.onChange,
          onBlur = _ref4.onBlur,
          onFocus = _ref4.onFocus,
          rest = _objectWithoutProperties(_ref4, ["value", "onChange", "onBlur", "onFocus"]);

      return React.createElement(React.Fragment, null, options.map(function (checkbox) {
        return React.createElement("div", {
          key: checkbox.value
        }, React.createElement(GroupedCheckbox, {
          name: inputProps.name,
          value: checkbox.value,
          id: "".concat(inputProps.name, "-").concat(checkbox.value),
          onFocus: onFocus,
          onBlur: onBlur
        }), React.createElement("label", {
          htmlFor: "".concat(inputProps.name, "-").concat(checkbox.value)
        }, checkbox.label || checkbox.value));
      }), React.createElement(ErrorMessage, rest));
    }
  });
}

function RadioGroup(_ref) {
  var validators = _ref.validators,
      options = _ref.options,
      name = _ref.name;
  return React.createElement(BaseInput, {
    validators: validators,
    name: name,
    getChangeEventValue: function getChangeEventValue(event) {
      return event.target.value;
    },
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange,
          onBlur = _ref2.onBlur,
          onFocus = _ref2.onFocus,
          rest = _objectWithoutProperties(_ref2, ["value", "onChange", "onBlur", "onFocus"]);

      return React.createElement(React.Fragment, null, options.map(function (_ref3) {
        var value = _ref3.value,
            _ref3$label = _ref3.label,
            label = _ref3$label === void 0 ? value : _ref3$label,
            radioProps = _objectWithoutProperties(_ref3, ["value", "label"]);

        var key = "".concat(name, "-").concat(value);
        return React.createElement("div", {
          key: key
        }, React.createElement("label", {
          htmlFor: key
        }, React.createElement("input", _extends({
          type: "radio",
          name: name,
          id: key,
          key: value,
          value: value
        }, radioProps, {
          onChange: onChange,
          onBlur: onBlur,
          onFocus: onFocus
        })), label));
      }), React.createElement(ErrorMessage, rest));
    }
  });
}

function Select(_ref) {
  var validators = _ref.validators,
      options = _ref.options,
      inputProps = _objectWithoutProperties(_ref, ["validators", "options"]);

  return React.createElement(BaseInput, {
    validators: validators,
    name: inputProps.name,
    getChangeEventValue: function getChangeEventValue(event) {
      return event.target.value;
    },
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange,
          onBlur = _ref2.onBlur,
          onFocus = _ref2.onFocus,
          rest = _objectWithoutProperties(_ref2, ["value", "onChange", "onBlur", "onFocus"]);

      return React.createElement(React.Fragment, null, React.createElement("select", _extends({}, inputProps, {
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus
      }), options.map(function (_ref3) {
        var optionValue = _ref3.value,
            _ref3$label = _ref3.label,
            label = _ref3$label === void 0 ? optionValue : _ref3$label,
            optionProps = _objectWithoutProperties(_ref3, ["value", "label"]);

        return React.createElement("option", _extends({
          key: optionValue,
          value: optionValue
        }, optionProps), label);
      })), React.createElement(ErrorMessage, rest));
    }
  });
}

function TextInput(_ref) {
  var validators = _ref.validators,
      inputProps = _objectWithoutProperties(_ref, ["validators"]);

  return React.createElement(BaseInput, {
    validators: validators,
    name: inputProps.name,
    getChangeEventValue: function getChangeEventValue(event) {
      return event.target.value;
    },
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange,
          onBlur = _ref2.onBlur,
          onFocus = _ref2.onFocus,
          rest = _objectWithoutProperties(_ref2, ["value", "onChange", "onBlur", "onFocus"]);

      return React.createElement(React.Fragment, null, React.createElement("input", _extends({
        className: "littleform-text-input",
        type: "text",
        value: value
      }, inputProps, {
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus
      })), React.createElement(ErrorMessage, rest));
    }
  });
}

function Textarea(_ref) {
  var validators = _ref.validators,
      inputProps = _objectWithoutProperties(_ref, ["validators"]);

  return React.createElement(BaseInput, {
    validators: validators,
    name: inputProps.name,
    getChangeEventValue: function getChangeEventValue(event) {
      return event.target.value;
    },
    render: function render(_ref2) {
      var value = _ref2.value,
          onChange = _ref2.onChange,
          onBlur = _ref2.onBlur,
          onFocus = _ref2.onFocus,
          rest = _objectWithoutProperties(_ref2, ["value", "onChange", "onBlur", "onFocus"]);

      return React.createElement(React.Fragment, null, React.createElement("textarea", _extends({
        className: "littleform-textarea"
      }, inputProps, {
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus
      })), React.createElement(ErrorMessage, rest));
    }
  });
}

exports.validators = validators;
exports.SingleCheckbox = SingleCheckbox;
exports.GroupedCheckbox = GroupedCheckbox;
exports.CheckboxGroup = CheckboxGroup;
exports.ErrorMessage = ErrorMessage;
exports.Form = Form;
exports.FormConsumer = FormConsumer;
exports.withForm = withForm;
exports.RadioGroup = RadioGroup;
exports.Select = Select;
exports.TextInput = TextInput;
exports.Textarea = Textarea;
