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
 * The UserProviderInfo model module.
 * @module model/UserProviderInfo
 * @version 0.0.1
 */
var UserProviderInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserProviderInfo</code>.
   * Information about a users access Provider to the StackHawk platform
   * @alias module:model/UserProviderInfo
   */
  function UserProviderInfo() {
    _classCallCheck(this, UserProviderInfo);

    UserProviderInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserProviderInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserProviderInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserProviderInfo} obj Optional instance to populate.
     * @return {module:model/UserProviderInfo} The populated <code>UserProviderInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserProviderInfo();

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Number');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserProviderInfo;
}();
/**
 * @member {String} clientId
 */


UserProviderInfo.prototype['clientId'] = undefined;
/**
 * @member {Number} created
 */

UserProviderInfo.prototype['created'] = undefined;
/**
 * @member {module:model/UserProviderInfo.SlugEnum} slug
 */

UserProviderInfo.prototype['slug'] = undefined;
/**
 * Allowed values for the <code>slug</code> property.
 * @enum {String}
 * @readonly
 */

UserProviderInfo['SlugEnum'] = {
  /**
   * value: "GITHUB"
   * @const
   */
  "GITHUB": "GITHUB",

  /**
   * value: "GOOGLE"
   * @const
   */
  "GOOGLE": "GOOGLE",

  /**
   * value: "STACKHAWK"
   * @const
   */
  "STACKHAWK": "STACKHAWK",

  /**
   * value: "SAMLIDP"
   * @const
   */
  "SAMLIDP": "SAMLIDP"
};
var _default = UserProviderInfo;
exports["default"] = _default;