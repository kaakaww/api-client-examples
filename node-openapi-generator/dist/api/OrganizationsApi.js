"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationApplication = _interopRequireDefault(require("../model/ApplicationApplication"));

var _ApplicationListApplicationsResponse = _interopRequireDefault(require("../model/ApplicationListApplicationsResponse"));

var _ApplicationNewApplicationRequest = _interopRequireDefault(require("../model/ApplicationNewApplicationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Organizations service.
* @module api/OrganizationsApi
* @version 0.0.1
*/
var OrganizationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrganizationsApi. 
  * @alias module:api/OrganizationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrganizationsApi(apiClient) {
    _classCallCheck(this, OrganizationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createApplication operation.
   * @callback module:api/OrganizationsApi~createApplicationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ApplicationApplication} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create application
   * Creates a new application for this organization.
   * @param {String} orgId UUID identifier for this StackHawk Organization
   * @param {module:model/ApplicationNewApplicationRequest} applicationNewApplicationRequest 
   * @param {module:api/OrganizationsApi~createApplicationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ApplicationApplication}
   */


  _createClass(OrganizationsApi, [{
    key: "createApplication",
    value: function createApplication(orgId, applicationNewApplicationRequest, callback) {
      var postBody = applicationNewApplicationRequest; // verify the required parameter 'orgId' is set

      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling createApplication");
      } // verify the required parameter 'applicationNewApplicationRequest' is set


      if (applicationNewApplicationRequest === undefined || applicationNewApplicationRequest === null) {
        throw new Error("Missing the required parameter 'applicationNewApplicationRequest' when calling createApplication");
      }

      var pathParams = {
        'orgId': orgId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplicationApplication["default"];
      return this.apiClient.callApi('/api/v1/org/{orgId}/app', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listApplications operation.
     * @callback module:api/OrganizationsApi~listApplicationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationListApplicationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List applications
     * Lists applications that belong to this organization.
     * @param {String} orgId UUID identifier for this StackHawk Organization
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.appIds A comma-deliminated list of UUID identifiers of StackHawk Applications.
     * @param {Array.<String>} opts.envs Names of environments to filter results by
     * @param {Boolean} opts.ignoreEnvs If enabled returns a shortened list of applications, omiting environment entries (default to false)
     * @param {Number} opts.pageSize Pagination response size limit (default to 10)
     * @param {String} opts.pageToken Pagination request page increment (default to '')
     * @param {module:model/String} opts.sortField Resource field to sort paginated response by (default to 'name')
     * @param {module:model/String} opts.sortDir Paginated results are sorted 'asc' or 'desc' (default to 'asc')
     * @param {module:api/OrganizationsApi~listApplicationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationListApplicationsResponse}
     */

  }, {
    key: "listApplications",
    value: function listApplications(orgId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'orgId' is set

      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling listApplications");
      }

      var pathParams = {
        'orgId': orgId
      };
      var queryParams = {
        'appIds': this.apiClient.buildCollectionParam(opts['appIds'], 'multi'),
        'envs': this.apiClient.buildCollectionParam(opts['envs'], 'multi'),
        'ignoreEnvs': opts['ignoreEnvs'],
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken'],
        'sortField': opts['sortField'],
        'sortDir': opts['sortDir']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationListApplicationsResponse["default"];
      return this.apiClient.callApi('/api/v1/app/{orgId}/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OrganizationsApi;
}();

exports["default"] = OrganizationsApi;