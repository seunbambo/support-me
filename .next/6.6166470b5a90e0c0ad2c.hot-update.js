webpackHotUpdate(6,{

/***/ 1300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(444);

var _factory = __webpack_require__(1301);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1015);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(519);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\xampp\\htdocs\\blockchain\\support-me\\pages\\index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, "View Campaign")),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Open Campaigns"), this.renderCampaigns()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfX3Byb3RvX18iLCJhcHBseSIsImFyZ3VtZW50cyIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLGtFQUFuQjs7O0FBT0EsSUFBSUMsZ0JBQWdCLFVBQVVDLFVBQVYsRUFBc0I7QUFDeEMsMEJBQVVELGFBQVYsRUFBeUJDLFVBQXpCOztBQUVBLFdBQVNELGFBQVQsR0FBeUI7QUFDdkIsa0NBQWdCLElBQWhCLEVBQXNCQSxhQUF0Qjs7QUFFQSxXQUFPLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDQSxjQUFjRSxTQUFkLElBQTJCLDhCQUF1QkYsYUFBdkIsQ0FBNUIsRUFBbUVHLEtBQW5FLENBQXlFLElBQXpFLEVBQStFQyxTQUEvRSxDQUFqQyxDQUFQO0FBQ0Q7O0FBRUQsNkJBQWFKLGFBQWIsRUFBNEIsQ0FBQztBQUMzQkssU0FBSyxpQkFEc0I7QUFFM0JDLFdBQU8sU0FBU0MsZUFBVCxHQUEyQjtBQUNoQyxVQUFJQyxRQUFRLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBVUMsT0FBVixFQUFtQjtBQUN0RCxlQUFPO0FBQ0xDLGtCQUFRRCxPQURIO0FBRUxFLHVCQUFhLGdCQUFNQyxhQUFOLGVBRVgsRUFBRUMsT0FBTyxnQkFBZ0JKLE9BQXpCLEVBQWtDSyxVQUFVO0FBQ3hDQyx3QkFBVW5CLFlBRDhCO0FBRXhDb0IsMEJBQVk7QUFGNEI7QUFBNUMsV0FGVyxFQU9YLGdCQUFNSixhQUFOLENBQ0UsR0FERixFQUVFO0FBQ0VFLHNCQUFVO0FBQ1JDLHdCQUFVbkIsWUFERjtBQUVSb0IsMEJBQVk7QUFGSjtBQURaLFdBRkYsRUFRRSxlQVJGLENBUFcsQ0FGUjtBQW9CTEMsaUJBQU87QUFwQkYsU0FBUDtBQXNCRCxPQXZCVyxDQUFaOztBQXlCQSxhQUFPLGdCQUFNTCxhQUFOLENBQW9CLHNCQUFLTSxLQUF6QixFQUFnQyxFQUFFYixPQUFPQSxLQUFULEVBQWdCUyxVQUFVO0FBQzdEQyxvQkFBVW5CLFlBRG1EO0FBRTdEb0Isc0JBQVk7QUFGaUQ7QUFBMUIsT0FBaEMsQ0FBUDtBQUtEO0FBakMwQixHQUFELEVBa0N6QjtBQUNEZCxTQUFLLFFBREo7QUFFREMsV0FBTyxTQUFTZ0IsTUFBVCxHQUFrQjtBQUN2QixhQUFPLGdCQUFNUCxhQUFOLG1CQUVMO0FBQ0VFLGtCQUFVO0FBQ1JDLG9CQUFVbkIsWUFERjtBQUVSb0Isc0JBQVk7QUFGSjtBQURaLE9BRkssRUFRTCxnQkFBTUosYUFBTixDQUNFLEtBREYsRUFFRTtBQUNFRSxrQkFBVTtBQUNSQyxvQkFBVW5CLFlBREY7QUFFUm9CLHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsZ0JBQU1KLGFBQU4sQ0FDRSxJQURGLEVBRUU7QUFDRUUsa0JBQVU7QUFDUkMsb0JBQVVuQixZQURGO0FBRVJvQixzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFLGdCQVJGLENBUkYsRUFrQkUsS0FBS1osZUFBTCxFQWxCRixDQVJLLENBQVA7QUE2QkQ7QUFoQ0EsR0FsQ3lCLENBQTVCLEVBbUVJLENBQUM7QUFDSEYsU0FBSyxpQkFERjtBQUVIQyxXQUFPLFlBQVk7QUFDakIsVUFBSWlCLE9BQU8saUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULEdBQW1CO0FBQ3JGLFlBQUlmLFNBQUo7QUFDQSxlQUFPLHNCQUFvQmdCLElBQXBCLENBQXlCLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQzFELGlCQUFPLENBQVAsRUFBVTtBQUNSLG9CQUFRQSxTQUFTQyxJQUFULEdBQWdCRCxTQUFTRSxJQUFqQztBQUNFLG1CQUFLLENBQUw7QUFDRUYseUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSx1QkFBTyxrQkFBUUMsT0FBUixDQUFnQkMsb0JBQWhCLEdBQXVDQyxJQUF2QyxFQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDRXZCLDRCQUFZa0IsU0FBU00sSUFBckI7QUFDQSx1QkFBT04sU0FBU08sTUFBVCxDQUFnQixRQUFoQixFQUEwQixFQUFFekIsV0FBV0EsU0FBYixFQUExQixDQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU9rQixTQUFTUSxJQUFULEVBQVA7QUFYSjtBQWFEO0FBQ0YsU0FoQk0sRUFnQkpYLE9BaEJJLEVBZ0JLLElBaEJMLENBQVA7QUFpQkQsT0FuQjBDLENBQWhDLENBQVg7O0FBcUJBLGVBQVNZLGVBQVQsR0FBMkI7QUFDekIsZUFBT2QsS0FBS3BCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT2lDLGVBQVA7QUFDRCxLQTNCTTtBQUZKLEdBQUQsQ0FuRUo7O0FBbUdBLFNBQU9yQyxhQUFQO0FBQ0QsQ0E3R21CLGtCQUFwQjs7a0JBK0dlQSxhIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiO1xudmFyIF9qc3hGaWxlTmFtZSA9IFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGJsb2NrY2hhaW5cXFxcc3VwcG9ydC1tZVxcXFxwYWdlc1xcXFxpbmRleC5qcz9lbnRyeVwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG52YXIgQ2FtcGFpZ25JbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDYW1wYWlnbkluZGV4LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYW1wYWlnbkluZGV4KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW1wYWlnbkluZGV4KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2FtcGFpZ25JbmRleC5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDYW1wYWlnbkluZGV4KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FtcGFpZ25JbmRleCwgW3tcbiAgICBrZXk6IFwicmVuZGVyQ2FtcGFpZ25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNhbXBhaWducygpIHtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICB7IHJvdXRlOiBcIi9jYW1wYWlnbnMvXCIgKyBhZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJWaWV3IENhbXBhaWduXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Hcm91cCwgeyBpdGVtczogaXRlbXMsIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiAyN1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMzNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzNFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJPcGVuIENhbXBhaWduc1wiXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlckNhbXBhaWducygpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0SW5pdGlhbFByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgdmFyIGNhbXBhaWducztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYW1wYWlnbnMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgeyBjYW1wYWlnbnM6IGNhbXBhaWducyB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBDYW1wYWlnbkluZGV4O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfX3Byb3RvX18iLCJhcHBseSIsImFyZ3VtZW50cyIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwic2VudCIsImFicnVwdCIsInN0b3AiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLGtFQUFuQjs7O0FBT0EsSUFBSUMsZ0JBQWdCLFVBQVVDLFVBQVYsRUFBc0I7QUFDeEMsMEJBQVVELGFBQVYsRUFBeUJDLFVBQXpCOztBQUVBLFdBQVNELGFBQVQsR0FBeUI7QUFDdkIsa0NBQWdCLElBQWhCLEVBQXNCQSxhQUF0Qjs7QUFFQSxXQUFPLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDQSxjQUFjRSxTQUFkLElBQTJCLDhCQUF1QkYsYUFBdkIsQ0FBNUIsRUFBbUVHLEtBQW5FLENBQXlFLElBQXpFLEVBQStFQyxTQUEvRSxDQUFqQyxDQUFQO0FBQ0Q7O0FBRUQsNkJBQWFKLGFBQWIsRUFBNEIsQ0FBQztBQUMzQkssU0FBSyxpQkFEc0I7QUFFM0JDLFdBQU8sU0FB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\xampp\\htdocs\\blockchain\\support-me\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\xampp\\htdocs\\blockchain\\support-me\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})