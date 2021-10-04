"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserProviderInfo = _interopRequireDefault(require("./UserProviderInfo"));

var _UserUserExternal = _interopRequireDefault(require("./UserUserExternal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserUser model module.
 * @module model/UserUser
 * @version 0.0.1
 */
var UserUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserUser</code>.
   * Represents a StackHawk User
   * @alias module:model/UserUser
   */
  function UserUser() {
    _classCallCheck(this, UserUser);

    UserUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUser} obj Optional instance to populate.
     * @return {module:model/UserUser} The populated <code>UserUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserUser();

        if (data.hasOwnProperty('external')) {
          obj['external'] = _UserUserExternal["default"].constructFromObject(data['external']);
        }

        if (data.hasOwnProperty('organizationIds')) {
          obj['organizationIds'] = _ApiClient["default"].convertToType(data['organizationIds'], ['String']);
        }

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _UserProviderInfo["default"].constructFromObject(data['provider']);
        }

        if (data.hasOwnProperty('stackhawkId')) {
          obj['stackhawkId'] = _ApiClient["default"].convertToType(data['stackhawkId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserUser;
}();
/**
 * @member {module:model/UserUserExternal} external
 */


UserUser.prototype['external'] = undefined;
/**
 * **Deprecated**
 * @member {Array.<String>} organizationIds
 */

UserUser.prototype['organizationIds'] = undefined;
/**
 * @member {module:model/UserProviderInfo} provider
 */

UserUser.prototype['provider'] = undefined;
/**
 * internal identifier for this user. _this is not the user uuid_
 * @member {String} stackhawkId
 */

UserUser.prototype['stackhawkId'] = undefined;
var _default = UserUser;
exports["default"] = _default;