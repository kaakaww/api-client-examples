"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserJWT = _interopRequireDefault(require("../model/UserJWT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ApiAuthentication service.
* @module api/ApiAuthenticationApi
* @version 0.0.1
*/
var ApiAuthenticationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApiAuthenticationApi. 
  * @alias module:api/ApiAuthenticationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApiAuthenticationApi(apiClient) {
    _classCallCheck(this, ApiAuthenticationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the login operation.
   * @callback module:api/ApiAuthenticationApi~loginCallback
   * @param {String} error Error message, if any.
   * @param {module:model/UserJWT} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Login with API Key
   * ## Access Login  Using a [StackHawk API Key](https://app.stackhawk.com/settings/apikeys), this endpoint returns an *access token* which can then be used in the `authorization` header of subsequent API requests. The access token returned is an [RFC-7519](https://datatracker.ietf.org/doc/html/rfc7519) compliant [jwt access token](https://jwt.io/).  Access tokens have an expiration of *30 minutes* and are issued on behalf of the requesting user.  An access token can only be used to interact with StackHawk resources that belong to the user, or to organizations that user is a part of and permissioned for.  For best practices, use the `/login` route only when starting a new access session to the StackHawk API, and use the `/refresh` route to request a fresh token to extend an API session.   
   * @param {String} xApiKey Specialized request header to supply your **StackHawk API Key** which authorizes further requests.
   * @param {module:api/ApiAuthenticationApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/UserJWT}
   */


  _createClass(ApiAuthenticationApi, [{
    key: "login",
    value: function login(xApiKey, callback) {
      var postBody = null; // verify the required parameter 'xApiKey' is set

      if (xApiKey === undefined || xApiKey === null) {
        throw new Error("Missing the required parameter 'xApiKey' when calling login");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-ApiKey': xApiKey
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserJWT["default"];
      return this.apiClient.callApi('/api/v1/auth/login', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the refreshToken operation.
     * @callback module:api/ApiAuthenticationApi~refreshTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserJWT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh existing authentication
     * ## Access Refresh  Once authenticated, an issued API Access Token has a will expire after 30 minutes.  This authenticated endpoint will \"refresh\" the access token by issuing a new jwt token with an extended expiration.  For best practices, use the `/refresh` route for refreshing authentication access to extend the API session. 
     * @param {module:api/ApiAuthenticationApi~refreshTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserJWT}
     */

  }, {
    key: "refreshToken",
    value: function refreshToken(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserJWT["default"];
      return this.apiClient.callApi('/api/v1/auth/refresh-token', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ApiAuthenticationApi;
}();

exports["default"] = ApiAuthenticationApi;