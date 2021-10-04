"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationApplication = _interopRequireDefault(require("./ApplicationApplication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationListApplicationsResponse model module.
 * @module model/ApplicationListApplicationsResponse
 * @version 0.0.1
 */
var ApplicationListApplicationsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationListApplicationsResponse</code>.
   * Paginated response of applications.
   * @alias module:model/ApplicationListApplicationsResponse
   */
  function ApplicationListApplicationsResponse() {
    _classCallCheck(this, ApplicationListApplicationsResponse);

    ApplicationListApplicationsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationListApplicationsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationListApplicationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationListApplicationsResponse} obj Optional instance to populate.
     * @return {module:model/ApplicationListApplicationsResponse} The populated <code>ApplicationListApplicationsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationListApplicationsResponse();

        if (data.hasOwnProperty('applications')) {
          obj['applications'] = _ApiClient["default"].convertToType(data['applications'], [_ApplicationApplication["default"]]);
        }

        if (data.hasOwnProperty('nextPageToken')) {
          obj['nextPageToken'] = _ApiClient["default"].convertToType(data['nextPageToken'], 'String');
        }

        if (data.hasOwnProperty('totalCount')) {
          obj['totalCount'] = _ApiClient["default"].convertToType(data['totalCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ApplicationListApplicationsResponse;
}();
/**
 * found list of applications.
 * @member {Array.<module:model/ApplicationApplication>} applications
 */


ApplicationListApplicationsResponse.prototype['applications'] = undefined;
/**
 * pageToken to provide for the next page of results.
 * @member {String} nextPageToken
 */

ApplicationListApplicationsResponse.prototype['nextPageToken'] = undefined;
/**
 * total number of results.
 * @member {Number} totalCount
 */

ApplicationListApplicationsResponse.prototype['totalCount'] = undefined;
var _default = ApplicationListApplicationsResponse;
exports["default"] = _default;