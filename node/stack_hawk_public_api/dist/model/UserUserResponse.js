"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserUser = _interopRequireDefault(require("./UserUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserUserResponse model module.
 * @module model/UserUserResponse
 * @version 0.0.1
 */
var UserUserResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserUserResponse</code>.
   * @alias module:model/UserUserResponse
   */
  function UserUserResponse() {
    _classCallCheck(this, UserUserResponse);

    UserUserResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserUserResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUserResponse} obj Optional instance to populate.
     * @return {module:model/UserUserResponse} The populated <code>UserUserResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserUserResponse();

        if (data.hasOwnProperty('unclaimedInviteOrganizationIds')) {
          obj['unclaimedInviteOrganizationIds'] = _ApiClient["default"].convertToType(data['unclaimedInviteOrganizationIds'], ['String']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _UserUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return UserUserResponse;
}();
/**
 * @member {Array.<String>} unclaimedInviteOrganizationIds
 */


UserUserResponse.prototype['unclaimedInviteOrganizationIds'] = undefined;
/**
 * @member {module:model/UserUser} user
 */

UserUserResponse.prototype['user'] = undefined;
var _default = UserUserResponse;
exports["default"] = _default;