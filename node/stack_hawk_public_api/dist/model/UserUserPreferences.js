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
 * The UserUserPreferences model module.
 * @module model/UserUserPreferences
 * @version 0.0.1
 */
var UserUserPreferences = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserUserPreferences</code>.
   * User settings and preferences for interaction within StackHawk
   * @alias module:model/UserUserPreferences
   */
  function UserUserPreferences() {
    _classCallCheck(this, UserUserPreferences);

    UserUserPreferences.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserUserPreferences, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserUserPreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUserPreferences} obj Optional instance to populate.
     * @return {module:model/UserUserPreferences} The populated <code>UserUserPreferences</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserUserPreferences();

        if (data.hasOwnProperty('defaultOrganizationId')) {
          obj['defaultOrganizationId'] = _ApiClient["default"].convertToType(data['defaultOrganizationId'], 'String');
        }

        if (data.hasOwnProperty('dontReceiveUpdatesEmail')) {
          obj['dontReceiveUpdatesEmail'] = _ApiClient["default"].convertToType(data['dontReceiveUpdatesEmail'], 'Boolean');
        }

        if (data.hasOwnProperty('dontReceiveWeeklyEmail')) {
          obj['dontReceiveWeeklyEmail'] = _ApiClient["default"].convertToType(data['dontReceiveWeeklyEmail'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UserUserPreferences;
}();
/**
 * the UUID identifier of the organization a user currently belongs to
 * @member {String} defaultOrganizationId
 */


UserUserPreferences.prototype['defaultOrganizationId'] = undefined;
/**
 * if `true`, the user will be opted out of Company Update emails
 * @member {Boolean} dontReceiveUpdatesEmail
 */

UserUserPreferences.prototype['dontReceiveUpdatesEmail'] = undefined;
/**
 * if `true`, the user will be opted out of weekly organization update emails
 * @member {Boolean} dontReceiveWeeklyEmail
 */

UserUserPreferences.prototype['dontReceiveWeeklyEmail'] = undefined;
var _default = UserUserPreferences;
exports["default"] = _default;