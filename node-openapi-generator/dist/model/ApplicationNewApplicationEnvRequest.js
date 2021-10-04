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
 * The ApplicationNewApplicationEnvRequest model module.
 * @module model/ApplicationNewApplicationEnvRequest
 * @version 0.0.1
 */
var ApplicationNewApplicationEnvRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationNewApplicationEnvRequest</code>.
   * Request to create a new StackHawk Environment for an existing application.
   * @alias module:model/ApplicationNewApplicationEnvRequest
   */
  function ApplicationNewApplicationEnvRequest() {
    _classCallCheck(this, ApplicationNewApplicationEnvRequest);

    ApplicationNewApplicationEnvRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationNewApplicationEnvRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationNewApplicationEnvRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationNewApplicationEnvRequest} obj Optional instance to populate.
     * @return {module:model/ApplicationNewApplicationEnvRequest} The populated <code>ApplicationNewApplicationEnvRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationNewApplicationEnvRequest();

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'String');
        }

        if (data.hasOwnProperty('env')) {
          obj['env'] = _ApiClient["default"].convertToType(data['env'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationNewApplicationEnvRequest;
}();
/**
 * the UUID identifier of this application.
 * @member {String} applicationId
 */


ApplicationNewApplicationEnvRequest.prototype['applicationId'] = undefined;
/**
 * the name of this new environment.
 * @member {String} env
 */

ApplicationNewApplicationEnvRequest.prototype['env'] = undefined;
var _default = ApplicationNewApplicationEnvRequest;
exports["default"] = _default;