"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserUserResponse = _interopRequireDefault(require("../model/UserUserResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* User service.
* @module api/UserApi
* @version 0.0.1
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getUser operation.
   * @callback module:api/UserApi~getUserCallback
   * @param {String} error Error message, if any.
   * @param {module:model/UserUserResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the current user
   * ## User Details  This endpoint provides details about the requesting user. This information helps determine what access an authorized user has on the StackHawk platform, and how they are authenticated.  
   * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/UserUserResponse}
   */


  _createClass(UserApi, [{
    key: "getUser",
    value: function getUser(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserUserResponse["default"];
      return this.apiClient.callApi('/api/v1/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;