"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserUserOrganization = _interopRequireDefault(require("./UserUserOrganization"));

var _UserUserPreferences = _interopRequireDefault(require("./UserUserPreferences"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserUserExternal model module.
 * @module model/UserUserExternal
 * @version 0.0.1
 */
var UserUserExternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserUserExternal</code>.
   * Information about the User and how they can access the platform
   * @alias module:model/UserUserExternal
   */
  function UserUserExternal() {
    _classCallCheck(this, UserUserExternal);

    UserUserExternal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserUserExternal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserUserExternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUserExternal} obj Optional instance to populate.
     * @return {module:model/UserUserExternal} The populated <code>UserUserExternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserUserExternal();

        if (data.hasOwnProperty('applicationIds')) {
          obj['applicationIds'] = _ApiClient["default"].convertToType(data['applicationIds'], ['String']);
        }

        if (data.hasOwnProperty('avatarUrl')) {
          obj['avatarUrl'] = _ApiClient["default"].convertToType(data['avatarUrl'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('organizations')) {
          obj['organizations'] = _ApiClient["default"].convertToType(data['organizations'], [_UserUserOrganization["default"]]);
        }

        if (data.hasOwnProperty('preferences')) {
          obj['preferences'] = _UserUserPreferences["default"].constructFromObject(data['preferences']);
        }
      }

      return obj;
    }
  }]);

  return UserUserExternal;
}();
/**
 * array of application ids this user has access to
 * @member {Array.<String>} applicationIds
 */


UserUserExternal.prototype['applicationIds'] = undefined;
/**
 * users avatar url
 * @member {String} avatarUrl
 */

UserUserExternal.prototype['avatarUrl'] = undefined;
/**
 * users email address
 * @member {String} email
 */

UserUserExternal.prototype['email'] = undefined;
/**
 * users first name
 * @member {String} firstName
 */

UserUserExternal.prototype['firstName'] = undefined;
/**
 * users full name
 * @member {String} fullName
 */

UserUserExternal.prototype['fullName'] = undefined;
/**
 * the UUID identifier of this user
 * @member {String} id
 */

UserUserExternal.prototype['id'] = undefined;
/**
 * users last name
 * @member {String} lastName
 */

UserUserExternal.prototype['lastName'] = undefined;
/**
 * organizations a user is a part of
 * @member {Array.<module:model/UserUserOrganization>} organizations
 */

UserUserExternal.prototype['organizations'] = undefined;
/**
 * @member {module:model/UserUserPreferences} preferences
 */

UserUserExternal.prototype['preferences'] = undefined;
var _default = UserUserExternal;
exports["default"] = _default;