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
 * The ApplicationApplication model module.
 * @module model/ApplicationApplication
 * @version 0.0.1
 */
var ApplicationApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationApplication</code>.
   * StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html).
   * @alias module:model/ApplicationApplication
   */
  function ApplicationApplication() {
    _classCallCheck(this, ApplicationApplication);

    ApplicationApplication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationApplication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationApplication} obj Optional instance to populate.
     * @return {module:model/ApplicationApplication} The populated <code>ApplicationApplication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationApplication();

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('dataType')) {
          obj['dataType'] = _ApiClient["default"].convertToType(data['dataType'], 'String');
        }

        if (data.hasOwnProperty('env')) {
          obj['env'] = _ApiClient["default"].convertToType(data['env'], 'String');
        }

        if (data.hasOwnProperty('envId')) {
          obj['envId'] = _ApiClient["default"].convertToType(data['envId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('riskLevel')) {
          obj['riskLevel'] = _ApiClient["default"].convertToType(data['riskLevel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationApplication;
}();
/**
 * the UUID identifier of this application.
 * @member {String} applicationId
 */


ApplicationApplication.prototype['applicationId'] = undefined;
/**
 * the perceived dataType of this application.
 * @member {module:model/ApplicationApplication.DataTypeEnum} dataType
 */

ApplicationApplication.prototype['dataType'] = undefined;
/**
 * the name of this environment.
 * @member {String} env
 */

ApplicationApplication.prototype['env'] = undefined;
/**
 * the UUID identifier of this environment.
 * @member {String} envId
 */

ApplicationApplication.prototype['envId'] = undefined;
/**
 * the name of this application.
 * @member {String} name
 */

ApplicationApplication.prototype['name'] = undefined;
/**
 * the perceived riskLevel of this application.
 * @member {module:model/ApplicationApplication.RiskLevelEnum} riskLevel
 */

ApplicationApplication.prototype['riskLevel'] = undefined;
/**
 * Allowed values for the <code>dataType</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationApplication['DataTypeEnum'] = {
  /**
   * value: "NONE"
   * @const
   */
  "NONE": "NONE",

  /**
   * value: "PII"
   * @const
   */
  "PII": "PII",

  /**
   * value: "PCI"
   * @const
   */
  "PCI": "PCI",

  /**
   * value: "FIN"
   * @const
   */
  "FIN": "FIN",

  /**
   * value: "PKI"
   * @const
   */
  "PKI": "PKI",

  /**
   * value: "HIPAA"
   * @const
   */
  "HIPAA": "HIPAA",

  /**
   * value: "FERPA"
   * @const
   */
  "FERPA": "FERPA"
};
/**
 * Allowed values for the <code>riskLevel</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationApplication['RiskLevelEnum'] = {
  /**
   * value: "LOW"
   * @const
   */
  "LOW": "LOW",

  /**
   * value: "MEDIUM"
   * @const
   */
  "MEDIUM": "MEDIUM",

  /**
   * value: "HIGH"
   * @const
   */
  "HIGH": "HIGH",

  /**
   * value: "CRITICAL"
   * @const
   */
  "CRITICAL": "CRITICAL"
};
var _default = ApplicationApplication;
exports["default"] = _default;