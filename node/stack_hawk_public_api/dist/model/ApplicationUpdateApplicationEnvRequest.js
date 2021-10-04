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
 * The ApplicationUpdateApplicationEnvRequest model module.
 * @module model/ApplicationUpdateApplicationEnvRequest
 * @version 0.0.1
 */
var ApplicationUpdateApplicationEnvRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationUpdateApplicationEnvRequest</code>.
   * Request to update an existing StackHawk Environment.
   * @alias module:model/ApplicationUpdateApplicationEnvRequest
   */
  function ApplicationUpdateApplicationEnvRequest() {
    _classCallCheck(this, ApplicationUpdateApplicationEnvRequest);

    ApplicationUpdateApplicationEnvRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationUpdateApplicationEnvRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationUpdateApplicationEnvRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationUpdateApplicationEnvRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationUpdateApplicationEnvRequest} The populated <code>ApplicationUpdateApplicationEnvRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationUpdateApplicationEnvRequest();

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('dataType')) {
          obj['dataType'] = _ApiClient["default"].convertToType(data['dataType'], 'String');
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

  return ApplicationUpdateApplicationEnvRequest;
}();
/**
 * the UUID identifier of this application.
 * @member {String} applicationId
 */


ApplicationUpdateApplicationEnvRequest.prototype['applicationId'] = undefined;
/**
 * updated riskLevel for this environment.
 * @member {module:model/ApplicationUpdateApplicationEnvRequest.DataTypeEnum} dataType
 */

ApplicationUpdateApplicationEnvRequest.prototype['dataType'] = undefined;
/**
 * the UUID identifier of this environment.
 * @member {String} envId
 */

ApplicationUpdateApplicationEnvRequest.prototype['envId'] = undefined;
/**
 * updated name for this environment.
 * @member {String} name
 */

ApplicationUpdateApplicationEnvRequest.prototype['name'] = undefined;
/**
 * updated riskLevel for this environment.
 * @member {module:model/ApplicationUpdateApplicationEnvRequest.RiskLevelEnum} riskLevel
 */

ApplicationUpdateApplicationEnvRequest.prototype['riskLevel'] = undefined;
/**
 * Allowed values for the <code>dataType</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationUpdateApplicationEnvRequest['DataTypeEnum'] = {
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

ApplicationUpdateApplicationEnvRequest['RiskLevelEnum'] = {
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
var _default = ApplicationUpdateApplicationEnvRequest;
exports["default"] = _default;