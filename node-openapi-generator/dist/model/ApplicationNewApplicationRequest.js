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
 * The ApplicationNewApplicationRequest model module.
 * @module model/ApplicationNewApplicationRequest
 * @version 0.0.1
 */
var ApplicationNewApplicationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationNewApplicationRequest</code>.
   * Request to create a new StackHawk Application.
   * @alias module:model/ApplicationNewApplicationRequest
   */
  function ApplicationNewApplicationRequest() {
    _classCallCheck(this, ApplicationNewApplicationRequest);

    ApplicationNewApplicationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationNewApplicationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationNewApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationNewApplicationRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationNewApplicationRequest} The populated <code>ApplicationNewApplicationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationNewApplicationRequest();

        if (data.hasOwnProperty('dataType')) {
          obj['dataType'] = _ApiClient["default"].convertToType(data['dataType'], 'String');
        }

        if (data.hasOwnProperty('env')) {
          obj['env'] = _ApiClient["default"].convertToType(data['env'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('organizationId')) {
          obj['organizationId'] = _ApiClient["default"].convertToType(data['organizationId'], 'String');
        }

        if (data.hasOwnProperty('riskLevel')) {
          obj['riskLevel'] = _ApiClient["default"].convertToType(data['riskLevel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationNewApplicationRequest;
}();
/**
 * a specified dataType for this new application.
 * @member {module:model/ApplicationNewApplicationRequest.DataTypeEnum} dataType
 */


ApplicationNewApplicationRequest.prototype['dataType'] = undefined;
/**
 * the initial environment for this new application.
 * @member {String} env
 */

ApplicationNewApplicationRequest.prototype['env'] = undefined;
/**
 * the name of this new application.
 * @member {String} name
 */

ApplicationNewApplicationRequest.prototype['name'] = undefined;
/**
 * the UUID identifier of the organization that will own this application.
 * @member {String} organizationId
 */

ApplicationNewApplicationRequest.prototype['organizationId'] = undefined;
/**
 * a specified riskLevel for this new application.
 * @member {module:model/ApplicationNewApplicationRequest.RiskLevelEnum} riskLevel
 */

ApplicationNewApplicationRequest.prototype['riskLevel'] = undefined;
/**
 * Allowed values for the <code>dataType</code> property.
 * @enum {String}
 * @readonly
 */

ApplicationNewApplicationRequest['DataTypeEnum'] = {
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

ApplicationNewApplicationRequest['RiskLevelEnum'] = {
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
var _default = ApplicationNewApplicationRequest;
exports["default"] = _default;