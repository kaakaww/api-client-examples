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
 * The OrganizationSubscription model module.
 * @module model/OrganizationSubscription
 * @version 0.0.1
 */
var OrganizationSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganizationSubscription</code>.
   * Properties of the external billing subscription for entitled access to the StackHawk platform
   * @alias module:model/OrganizationSubscription
   */
  function OrganizationSubscription() {
    _classCallCheck(this, OrganizationSubscription);

    OrganizationSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganizationSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrganizationSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationSubscription} obj Optional instance to populate.
     * @return {module:model/OrganizationSubscription} The populated <code>OrganizationSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganizationSubscription();

        if (data.hasOwnProperty('appCount')) {
          obj['appCount'] = _ApiClient["default"].convertToType(data['appCount'], 'Number');
        }

        if (data.hasOwnProperty('customerId')) {
          obj['customerId'] = _ApiClient["default"].convertToType(data['customerId'], 'String');
        }

        if (data.hasOwnProperty('endDate')) {
          obj['endDate'] = _ApiClient["default"].convertToType(data['endDate'], 'Number');
        }

        if (data.hasOwnProperty('isEnabled')) {
          obj['isEnabled'] = _ApiClient["default"].convertToType(data['isEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('productName')) {
          obj['productName'] = _ApiClient["default"].convertToType(data['productName'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('recurringInterval')) {
          obj['recurringInterval'] = _ApiClient["default"].convertToType(data['recurringInterval'], 'String');
        }

        if (data.hasOwnProperty('recurringIntervalCount')) {
          obj['recurringIntervalCount'] = _ApiClient["default"].convertToType(data['recurringIntervalCount'], 'Number');
        }

        if (data.hasOwnProperty('stackhawkOrgId')) {
          obj['stackhawkOrgId'] = _ApiClient["default"].convertToType(data['stackhawkOrgId'], 'String');
        }

        if (data.hasOwnProperty('startDate')) {
          obj['startDate'] = _ApiClient["default"].convertToType(data['startDate'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('subscriptionId')) {
          obj['subscriptionId'] = _ApiClient["default"].convertToType(data['subscriptionId'], 'String');
        }

        if (data.hasOwnProperty('unitAmount')) {
          obj['unitAmount'] = _ApiClient["default"].convertToType(data['unitAmount'], 'Number');
        }

        if (data.hasOwnProperty('userCount')) {
          obj['userCount'] = _ApiClient["default"].convertToType(data['userCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return OrganizationSubscription;
}();
/**
 * Soft application limit for this organization
 * @member {Number} appCount
 */


OrganizationSubscription.prototype['appCount'] = undefined;
/**
 * CustomerId from billing provider
 * @member {String} customerId
 */

OrganizationSubscription.prototype['customerId'] = undefined;
/**
 * End Date of this subscription, in seconds from epoch
 * @member {Number} endDate
 */

OrganizationSubscription.prototype['endDate'] = undefined;
/**
 * If external billing is enabled
 * @member {Boolean} isEnabled
 */

OrganizationSubscription.prototype['isEnabled'] = undefined;
/**
 * The name of the purchased product subscription
 * @member {String} productName
 */

OrganizationSubscription.prototype['productName'] = undefined;
/**
 * The quantity of units in this subscription
 * @member {Number} quantity
 */

OrganizationSubscription.prototype['quantity'] = undefined;
/**
 * The billing recurring interval for this subscription
 * @member {module:model/OrganizationSubscription.RecurringIntervalEnum} recurringInterval
 */

OrganizationSubscription.prototype['recurringInterval'] = undefined;
/**
 * How often in the recurring interval billing occurs
 * @member {Number} recurringIntervalCount
 */

OrganizationSubscription.prototype['recurringIntervalCount'] = undefined;
/**
 * The organization UUID for this subscription
 * @member {String} stackhawkOrgId
 */

OrganizationSubscription.prototype['stackhawkOrgId'] = undefined;
/**
 * Start Date of this subscription, in seconds from epoch
 * @member {Number} startDate
 */

OrganizationSubscription.prototype['startDate'] = undefined;
/**
 * The status of the organization subscription
 * @member {module:model/OrganizationSubscription.StatusEnum} status
 */

OrganizationSubscription.prototype['status'] = undefined;
/**
 * SubscriptionId from billing provider
 * @member {String} subscriptionId
 */

OrganizationSubscription.prototype['subscriptionId'] = undefined;
/**
 * The number of units with this subscription
 * @member {Number} unitAmount
 */

OrganizationSubscription.prototype['unitAmount'] = undefined;
/**
 * Soft user limit for this organization
 * @member {Number} userCount
 */

OrganizationSubscription.prototype['userCount'] = undefined;
/**
 * Allowed values for the <code>recurringInterval</code> property.
 * @enum {String}
 * @readonly
 */

OrganizationSubscription['RecurringIntervalEnum'] = {
  /**
   * value: "RECURRING_INTERVAL_UNKNOWN"
   * @const
   */
  "RECURRING_INTERVAL_UNKNOWN": "RECURRING_INTERVAL_UNKNOWN",

  /**
   * value: "MONTH"
   * @const
   */
  "MONTH": "MONTH",

  /**
   * value: "YEAR"
   * @const
   */
  "YEAR": "YEAR"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

OrganizationSubscription['StatusEnum'] = {
  /**
   * value: "SUBSCRIPTION_UNKNOWN"
   * @const
   */
  "SUBSCRIPTION_UNKNOWN": "SUBSCRIPTION_UNKNOWN",

  /**
   * value: "TRIALING"
   * @const
   */
  "TRIALING": "TRIALING",

  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "INCOMPLETE"
   * @const
   */
  "INCOMPLETE": "INCOMPLETE",

  /**
   * value: "CANCELLED"
   * @const
   */
  "CANCELLED": "CANCELLED",

  /**
   * value: "FREE"
   * @const
   */
  "FREE": "FREE"
};
var _default = OrganizationSubscription;
exports["default"] = _default;