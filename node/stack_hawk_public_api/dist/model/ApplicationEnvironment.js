"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationScanSummary = _interopRequireDefault(require("./ApplicationScanSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationEnvironment model module.
 * @module model/ApplicationEnvironment
 * @version 0.0.1
 */
var ApplicationEnvironment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationEnvironment</code>.
   * A decorated application&#39;s environment with details of recent scan stats included.
   * @alias module:model/ApplicationEnvironment
   */
  function ApplicationEnvironment() {
    _classCallCheck(this, ApplicationEnvironment);

    ApplicationEnvironment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationEnvironment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEnvironment} obj Optional instance to populate.
     * @return {module:model/ApplicationEnvironment} The populated <code>ApplicationEnvironment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationEnvironment();

        if (data.hasOwnProperty('currentScanSummary')) {
          obj['currentScanSummary'] = _ApplicationScanSummary["default"].constructFromObject(data['currentScanSummary']);
        }

        if (data.hasOwnProperty('environmentId')) {
          obj['environmentId'] = _ApiClient["default"].convertToType(data['environmentId'], 'String');
        }

        if (data.hasOwnProperty('environmentName')) {
          obj['environmentName'] = _ApiClient["default"].convertToType(data['environmentName'], 'String');
        }

        if (data.hasOwnProperty('scanSummaries')) {
          obj['scanSummaries'] = _ApiClient["default"].convertToType(data['scanSummaries'], [_ApplicationScanSummary["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ApplicationEnvironment;
}();
/**
 * @member {module:model/ApplicationScanSummary} currentScanSummary
 */


ApplicationEnvironment.prototype['currentScanSummary'] = undefined;
/**
 * the UUID identifier of this environment.
 * @member {String} environmentId
 */

ApplicationEnvironment.prototype['environmentId'] = undefined;
/**
 * the name of this environment.
 * @member {String} environmentName
 */

ApplicationEnvironment.prototype['environmentName'] = undefined;
/**
 * summaries of recent scans from this environment.
 * @member {Array.<module:model/ApplicationScanSummary>} scanSummaries
 */

ApplicationEnvironment.prototype['scanSummaries'] = undefined;
var _default = ApplicationEnvironment;
exports["default"] = _default;