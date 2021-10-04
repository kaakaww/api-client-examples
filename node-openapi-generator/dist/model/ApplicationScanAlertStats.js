"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationAlertStatusStats = _interopRequireDefault(require("./ApplicationAlertStatusStats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationScanAlertStats model module.
 * @module model/ApplicationScanAlertStats
 * @version 0.0.1
 */
var ApplicationScanAlertStats = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationScanAlertStats</code>.
   * @alias module:model/ApplicationScanAlertStats
   */
  function ApplicationScanAlertStats() {
    _classCallCheck(this, ApplicationScanAlertStats);

    ApplicationScanAlertStats.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationScanAlertStats, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationScanAlertStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationScanAlertStats} obj Optional instance to populate.
     * @return {module:model/ApplicationScanAlertStats} The populated <code>ApplicationScanAlertStats</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationScanAlertStats();

        if (data.hasOwnProperty('alertStatusStats')) {
          obj['alertStatusStats'] = _ApiClient["default"].convertToType(data['alertStatusStats'], [_ApplicationAlertStatusStats["default"]]);
        }

        if (data.hasOwnProperty('totalAlerts')) {
          obj['totalAlerts'] = _ApiClient["default"].convertToType(data['totalAlerts'], 'Number');
        }

        if (data.hasOwnProperty('uniqueAlerts')) {
          obj['uniqueAlerts'] = _ApiClient["default"].convertToType(data['uniqueAlerts'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ApplicationScanAlertStats;
}();
/**
 * @member {Array.<module:model/ApplicationAlertStatusStats>} alertStatusStats
 */


ApplicationScanAlertStats.prototype['alertStatusStats'] = undefined;
/**
 * @member {Number} totalAlerts
 */

ApplicationScanAlertStats.prototype['totalAlerts'] = undefined;
/**
 * @member {Number} uniqueAlerts
 */

ApplicationScanAlertStats.prototype['uniqueAlerts'] = undefined;
var _default = ApplicationScanAlertStats;
exports["default"] = _default;