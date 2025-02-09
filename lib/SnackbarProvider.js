"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = _interopRequireDefault(require("@mui/material/Snackbar"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _SnackbarContext = _interopRequireDefault(require("./SnackbarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DefaultSnackbar(_ref) {
  var message = _ref.message,
      action = _ref.action,
      ButtonProps = _ref.ButtonProps,
      SnackbarProps = _ref.SnackbarProps,
      customParameters = _ref.customParameters;
  return /*#__PURE__*/_react["default"].createElement(_Snackbar["default"], _extends({}, SnackbarProps, {
    message: message || '',
    action: action != null && /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
      color: "secondary",
      size: "small"
    }, ButtonProps), action)
  }));
}

var SnackbarProvider = /*#__PURE__*/function (_PureComponent) {
  _inherits(SnackbarProvider, _PureComponent);

  var _super = _createSuper(SnackbarProvider);

  function SnackbarProvider(props) {
    var _this;

    _classCallCheck(this, SnackbarProvider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      message: null,
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "showMessage", function (message, action, handleAction, customParameters, handleHideWithoutAction) {
      _this.setState({
        open: true,
        message: message,
        action: action,
        handleAction: handleAction,
        customParameters: customParameters,
        handleHideWithoutAction: handleHideWithoutAction
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionClick", function () {
      _this.setState({
        open: false,
        handleAction: null,
        handleHideWithoutAction: null
      });

      _this.state.handleAction();
    });

    _defineProperty(_assertThisInitialized(_this), "handleHideWithoutAction", function () {
      var handleHideWithoutAction = _this.state.handleHideWithoutAction;

      _this.setState({
        open: false,
        handleAction: null,
        handleHideWithoutAction: null
      });

      if (handleHideWithoutAction) {
        handleHideWithoutAction();
      }
    });

    _this.contextValue = {
      showMessage: _this.showMessage
    };
    return _this;
  }
  /**
   * Display a message with this snackbar.
   * @param {string} message message to display
   * @param {string} [action] label for the action button
   * @param {function} [handleAction] click handler for the action button
   * @param {any} [customParameters] custom parameters that will be passed to the snackbar renderer
   * @param {function} [handleHideWithoutAction] handler function that is called when the snackbar hides and the action button was not clicked
   * @public
   */


  _createClass(SnackbarProvider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          action = _this$state.action,
          message = _this$state.message,
          open = _this$state.open,
          customParameters = _this$state.customParameters;
      var _this$props = this.props,
          _this$props$ButtonPro = _this$props.ButtonProps,
          ButtonProps = _this$props$ButtonPro === void 0 ? {} : _this$props$ButtonPro,
          children = _this$props.children,
          _this$props$SnackbarP = _this$props.SnackbarProps,
          SnackbarProps = _this$props$SnackbarP === void 0 ? {} : _this$props$SnackbarP,
          _this$props$SnackbarC = _this$props.SnackbarComponent,
          SnackbarComponent = _this$props$SnackbarC === void 0 ? DefaultSnackbar : _this$props$SnackbarC;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SnackbarContext["default"].Provider, {
        value: this.contextValue
      }, children), /*#__PURE__*/_react["default"].createElement(SnackbarComponent, {
        message: message,
        action: action,
        ButtonProps: _objectSpread(_objectSpread({}, ButtonProps), {}, {
          onClick: this.handleActionClick
        }),
        SnackbarProps: _objectSpread(_objectSpread({}, SnackbarProps), {}, {
          open: open,
          onClose: this.handleHideWithoutAction
        }),
        customParameters: customParameters
      }));
    }
  }]);

  return SnackbarProvider;
}(_react.PureComponent);

exports["default"] = SnackbarProvider;
SnackbarProvider.propTypes = {
  /**
   * Props to pass through to the action button.
   */
  ButtonProps: _propTypes["default"].object,

  /**
   * The children that are wrapped by this provider.
   */
  children: _propTypes["default"].node,

  /**
   * Custom snackbar component.
   * Props: open, message, action, ButtonProps, SnackbarProps
   */
  SnackbarComponent: _propTypes["default"].elementType,

  /**
   * Props to pass through to the snackbar.
   */
  SnackbarProps: _propTypes["default"].object
};