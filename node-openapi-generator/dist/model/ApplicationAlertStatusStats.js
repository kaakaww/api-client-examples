"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationAlertStatusStats model module.
 * @module model/ApplicationAlertStatusStats
 * @version 0.0.1
 */
var ApplicationAlertStatusStats = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationAlertStatusStats</code>.
   * @alias module:model/ApplicationAlertStatusStats
   */
  function ApplicationAlertStatusStats() {
    _classCallCheck(this, ApplicationAlertStatusStats);

    ApplicationAlertStatusStats.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationAlertStatusStats, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationAlertStatusStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationAlertStatusStats} obj Optional instance to populate.
     * @return {module:model/ApplicationAlertStatusStats} The populated <code>ApplicationAlertStatusStats</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationAlertStatusStats();

        if (data.hasOwnProperty('alertStatus')) {
          obj['alertStatus'] = _ApiClient["default"].convertToType(data['alertStatus'], 'String');
        }

        if (data.hasOwnProperty('severityStats')) {
          obj['severityStats'] = _ApiClient["default"].convertToType(data['severityStats'], {
            'String': 'Number'
          });
        }

        if (data.hasOwnProperty('totalCount')) {
          obj['totalCount'] = _ApiClient["default"].convertToType(data['totalCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ApplicationAlertStatusStats;
}();
/**
 * @member {module:model/ApplicationAlertStatusStats.AlertStatusEnum} alertStatus
 */


ApplicationAlertStatusStats.prototype['alertStatus'] = undefined;
/**
 * @member {Object.<String, Number>} severityStats
 */

ApplicationAlertStatusStats.prototype['severityStats'] = undefined;
/**
 * @member {Number} totalCount
 */

ApplicationAlertStatusStats.prototype['totalCount'] = undefined;
/**
 * Allowed values for the <code>alertStatus</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationAlertStatusStats['AlertStatusEnum'] = {
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",

  /**
   * value: "FALSE_POSITIVE"
   * @const
   */
  "FALSE_POSITIVE": "FALSE_POSITIVE",

  /**
   * value: "RISK_ACCEPTED"
   * @const
   */
  "RISK_ACCEPTED": "RISK_ACCEPTED",

  /**
   * value: "PROMOTED"
   * @const
   */
  "PROMOTED": "PROMOTED"
};
var _default = ApplicationAlertStatusStats;
exports["default"] = _default;