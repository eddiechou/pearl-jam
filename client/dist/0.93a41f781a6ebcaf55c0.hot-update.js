webpackHotUpdate(0,{103:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(60);\n\nvar _reactRouterDom = __webpack_require__(217);\n\nvar _actions = __webpack_require__(106);\n\nvar _Login = __webpack_require__(250);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _PlayerView = __webpack_require__(251);\n\nvar _PlayerView2 = _interopRequireDefault(_PlayerView);\n\nvar _SpectatorView = __webpack_require__(252);\n\nvar _SpectatorView2 = _interopRequireDefault(_SpectatorView);\n\nvar _TopNavBar = __webpack_require__(253);\n\nvar _TopNavBar2 = _interopRequireDefault(_TopNavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * Components\n */\n\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      window.addEventListener('resize', this.handleWindowResize.bind(this));\n      this.handleWindowResize();\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('resize', this.handleWindowResize);\n    }\n  }, {\n    key: 'handleWindowResize',\n    value: function handleWindowResize() {\n      var updateScreenSize = this.props.updateScreenSize;\n\n      var width = window.innerWidth;\n      var height = window.innerHeight;\n      var ratio = window.devicePixelRatio || 1;\n      updateScreenSize({ width: width, height: height, ratio: ratio });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouterDom.BrowserRouter,\n        null,\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'ul',\n            null,\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/login' },\n                'Login Page'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/playerView' },\n                'Player View'\n              )\n            ),\n            _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/spectatorView' },\n                'Spectator View'\n              )\n            )\n          ),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/playerView', component: _PlayerView2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/spectatorView', component: _SpectatorView2.default })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\n/**\n * updateScreenSize is an action creator\n * passing in null because we have no need for mapStateToProps .... yet\n */\n\n\nexports.default = (0, _reactRedux.connect)(null, { updateScreenSize: _actions.updateScreenSize })(App);\n\n//////////////////\n// WEBPACK FOOTER\n// ./client/src/App.js\n// module id = 103\n// module chunks = 0\n\n//# sourceURL=Users/Mycah/hrsf72-thesis/client/src")}});