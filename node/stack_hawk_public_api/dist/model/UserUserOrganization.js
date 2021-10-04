"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureFeature = _interopRequireDefault(require("./FeatureFeature"));

var _OrganizationOrganization = _interopRequireDefault(require("./OrganizationOrganization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserUserOrganization model module.
 * @module model/UserUserOrganization
 * @version 0.0.1
 */
var UserUserOrganization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserUserOrganization</code>.
   * Represents the relationship between a User and an Organization they belong to.
   * @alias module:model/UserUserOrganization
   */
  function UserUserOrganization() {
    _classCallCheck(this, UserUserOrganization);

    UserUserOrganization.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserUserOrganization, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserUserOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUserOrganization} obj Optional instance to populate.
     * @return {module:model/UserUserOrganization} The populated <code>UserUserOrganization</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserUserOrganization();

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], [_FeatureFeature["default"]]);
        }

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _OrganizationOrganization["default"].constructFromObject(data['organization']);
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserUserOrganization;
}();
/**
 * Specific features available to this organization
 * @member {Array.<module:model/FeatureFeature>} features
 */


UserUserOrganization.prototype['features'] = undefined;
/**
 * @member {module:model/OrganizationOrganization} organization
 */

UserUserOrganization.prototype['organization'] = undefined;
/**
 * The organization role the user belongs to within this organization
 * @member {module:model/UserUserOrganization.RoleEnum} role
 */

UserUserOrganization.prototype['role'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

UserUserOrganization['RoleEnum'] = {
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",

  /**
   * value: "OWNER"
   * @const
   */
  "OWNER": "OWNER",

  /**
   * value: "ADMIN"
   * @const
   */
  "ADMIN": "ADMIN"
};
var _default = UserUserOrganization;
exports["default"] = _default;