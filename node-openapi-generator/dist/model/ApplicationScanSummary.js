"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationScanAlertStats = _interopRequireDefault(require("./ApplicationScanAlertStats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationScanSummary model module.
 * @module model/ApplicationScanSummary
 * @version 0.0.1
 */
var ApplicationScanSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationScanSummary</code>.
   * A summary of findings from a scanResult.
   * @alias module:model/ApplicationScanSummary
   */
  function ApplicationScanSummary() {
    _classCallCheck(this, ApplicationScanSummary);

    ApplicationScanSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationScanSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationScanSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationScanSummary} obj Optional instance to populate.
     * @return {module:model/ApplicationScanSummary} The populated <code>ApplicationScanSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationScanSummary();

        if (data.hasOwnProperty('alertStats')) {
          obj['alertStats'] = _ApplicationScanAlertStats["default"].constructFromObject(data['alertStats']);
        }

        if (data.hasOwnProperty('configHash')) {
          obj['configHash'] = _ApiClient["default"].convertToType(data['configHash'], 'String');
        }

        if (data.hasOwnProperty('scanId')) {
          obj['scanId'] = _ApiClient["default"].convertToType(data['scanId'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationScanSummary;
}();
/**
 * @member {module:model/ApplicationScanAlertStats} alertStats
 */


ApplicationScanSummary.prototype['alertStats'] = undefined;
/**
 * hash of the HawkScan configuration used for this scan.
 * @member {String} configHash
 */

ApplicationScanSummary.prototype['configHash'] = undefined;
/**
 * the UUID identifier of this scan.
 * @member {String} scanId
 */

ApplicationScanSummary.prototype['scanId'] = undefined;
/**
 * secondsSinceEpoch timestamp of when the scan was run.
 * @member {Number} timestamp
 */

ApplicationScanSummary.prototype['timestamp'] = undefined;
/**
 * the version of HawkScan used for this scan.
 * @member {String} version
 */

ApplicationScanSummary.prototype['version'] = undefined;
var _default = ApplicationScanSummary;
exports["default"] = _default;