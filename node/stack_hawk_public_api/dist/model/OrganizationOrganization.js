"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureFeature = _interopRequireDefault(require("./FeatureFeature"));

var _OrganizationSubscription = _interopRequireDefault(require("./OrganizationSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrganizationOrganization model module.
 * @module model/OrganizationOrganization
 * @version 0.0.1
 */
var OrganizationOrganization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationOrganization</code>.
   * @alias module:model/OrganizationOrganization
   */
  function OrganizationOrganization() {
    _classCallCheck(this, OrganizationOrganization);

    OrganizationOrganization.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationOrganization, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrganizationOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationOrganization} obj Optional instance to populate.
     * @return {module:model/OrganizationOrganization} The populated <code>OrganizationOrganization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationOrganization();

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], [_FeatureFeature["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isLinkedToExternalBilling')) {
          obj['isLinkedToExternalBilling'] = _ApiClient["default"].convertToType(data['isLinkedToExternalBilling'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _ApiClient["default"].convertToType(data['plan'], 'String');
        }

        if (data.hasOwnProperty('subscription')) {
          obj['subscription'] = _OrganizationSubscription["default"].constructFromObject(data['subscription']);
        }
      }

      return obj;
    }
  }]);

  return OrganizationOrganization;
}();
/**
 * override to the feature flags in the plan
 * @member {Array.<module:model/FeatureFeature>} features
 */


OrganizationOrganization.prototype['features'] = undefined;
/**
 * @member {String} id
 */

OrganizationOrganization.prototype['id'] = undefined;
/**
 * @member {Boolean} isLinkedToExternalBilling
 */

OrganizationOrganization.prototype['isLinkedToExternalBilling'] = undefined;
/**
 * @member {String} name
 */

OrganizationOrganization.prototype['name'] = undefined;
/**
 * @member {String} plan
 */

OrganizationOrganization.prototype['plan'] = undefined;
/**
 * @member {module:model/OrganizationSubscription} subscription
 */

OrganizationOrganization.prototype['subscription'] = undefined;
var _default = OrganizationOrganization;
exports["default"] = _default;