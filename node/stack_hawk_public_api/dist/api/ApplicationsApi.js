"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationApplication = _interopRequireDefault(require("../model/ApplicationApplication"));

var _ApplicationListApplicationsResponse = _interopRequireDefault(require("../model/ApplicationListApplicationsResponse"));

var _ApplicationListEnvironmentsResponse = _interopRequireDefault(require("../model/ApplicationListEnvironmentsResponse"));

var _ApplicationNewApplicationEnvRequest = _interopRequireDefault(require("../model/ApplicationNewApplicationEnvRequest"));

var _ApplicationNewApplicationRequest = _interopRequireDefault(require("../model/ApplicationNewApplicationRequest"));

var _ApplicationUpdateApplicationEnvRequest = _interopRequireDefault(require("../model/ApplicationUpdateApplicationEnvRequest"));

var _ApplicationUpdateApplicationRequest = _interopRequireDefault(require("../model/ApplicationUpdateApplicationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Applications service.
* @module api/ApplicationsApi
* @version 0.0.1
*/
var ApplicationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicationsApi. 
  * @alias module:api/ApplicationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicationsApi(apiClient) {
    _classCallCheck(this, ApplicationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createApplication operation.
   * @callback module:api/ApplicationsApi~createApplicationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ApplicationApplication} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create application
   * Creates a new application for this organization.
   * @param {String} orgId UUID identifier for this StackHawk Organization
   * @param {module:model/ApplicationNewApplicationRequest} applicationNewApplicationRequest 
   * @param {module:api/ApplicationsApi~createApplicationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ApplicationApplication}
   */


  _createClass(ApplicationsApi, [{
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
     * Callback function to receive the result of the createEnvironment operation.
     * @callback module:api/ApplicationsApi~createEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationApplication} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create environment
     * Creates a new environment under this application.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {module:model/ApplicationNewApplicationEnvRequest} applicationNewApplicationEnvRequest 
     * @param {module:api/ApplicationsApi~createEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationApplication}
     */

  }, {
    key: "createEnvironment",
    value: function createEnvironment(appId, applicationNewApplicationEnvRequest, callback) {
      var postBody = applicationNewApplicationEnvRequest; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createEnvironment");
      } // verify the required parameter 'applicationNewApplicationEnvRequest' is set


      if (applicationNewApplicationEnvRequest === undefined || applicationNewApplicationEnvRequest === null) {
        throw new Error("Missing the required parameter 'applicationNewApplicationEnvRequest' when calling createEnvironment");
      }

      var pathParams = {
        'appId': appId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplicationApplication["default"];
      return this.apiClient.callApi('/api/v1/app/{appId}/env', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteApplication operation.
     * @callback module:api/ApplicationsApi~deleteApplicationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete application
     * Deletes this application.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {module:api/ApplicationsApi~deleteApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteApplication",
    value: function deleteApplication(appId, callback) {
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteApplication");
      }

      var pathParams = {
        'appId': appId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/app/{appId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEnvironment operation.
     * @callback module:api/ApplicationsApi~deleteEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete environment
     * Deletes this environment.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {String} envId UUID identifier for this StackHawk Environment
     * @param {module:api/ApplicationsApi~deleteEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEnvironment",
    value: function deleteEnvironment(appId, envId, callback) {
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteEnvironment");
      } // verify the required parameter 'envId' is set


      if (envId === undefined || envId === null) {
        throw new Error("Missing the required parameter 'envId' when calling deleteEnvironment");
      }

      var pathParams = {
        'appId': appId,
        'envId': envId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/app/{appId}/env/{envId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getApplication operation.
     * @callback module:api/ApplicationsApi~getApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationApplication} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application
     * Gets this application.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {module:api/ApplicationsApi~getApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationApplication}
     */

  }, {
    key: "getApplication",
    value: function getApplication(appId, callback) {
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getApplication");
      }

      var pathParams = {
        'appId': appId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationApplication["default"];
      return this.apiClient.callApi('/api/v1/app/{appId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listApplications operation.
     * @callback module:api/ApplicationsApi~listApplicationsCallback
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
     * @param {module:api/ApplicationsApi~listApplicationsCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the listEnvironments operation.
     * @callback module:api/ApplicationsApi~listEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationListEnvironmentsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List environments
     * List environments that belong to this application.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.envs Names of environments to filter results by
     * @param {Number} opts.pageSize Pagination response size limit (default to 10)
     * @param {String} opts.pageToken Pagination request page increment (default to '')
     * @param {module:model/String} opts.sortField Resource field to sort paginated response by (default to 'name')
     * @param {module:model/String} opts.sortDir Paginated results are sorted 'asc' or 'desc' (default to 'asc')
     * @param {module:api/ApplicationsApi~listEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationListEnvironmentsResponse}
     */

  }, {
    key: "listEnvironments",
    value: function listEnvironments(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listEnvironments");
      }

      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'envs': this.apiClient.buildCollectionParam(opts['envs'], 'multi'),
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
      var returnType = _ApplicationListEnvironmentsResponse["default"];
      return this.apiClient.callApi('/api/v1/app/{appId}/env/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateApplication operation.
     * @callback module:api/ApplicationsApi~updateApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationApplication} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update application
     * Updates this application.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {module:model/ApplicationUpdateApplicationRequest} applicationUpdateApplicationRequest 
     * @param {module:api/ApplicationsApi~updateApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationApplication}
     */

  }, {
    key: "updateApplication",
    value: function updateApplication(appId, applicationUpdateApplicationRequest, callback) {
      var postBody = applicationUpdateApplicationRequest; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateApplication");
      } // verify the required parameter 'applicationUpdateApplicationRequest' is set


      if (applicationUpdateApplicationRequest === undefined || applicationUpdateApplicationRequest === null) {
        throw new Error("Missing the required parameter 'applicationUpdateApplicationRequest' when calling updateApplication");
      }

      var pathParams = {
        'appId': appId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplicationApplication["default"];
      return this.apiClient.callApi('/api/v1/app/{appId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateEnvironment operation.
     * @callback module:api/ApplicationsApi~updateEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationApplication} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update environment
     * Updates this environment.
     * @param {String} appId UUID identifier for this StackHawk Application
     * @param {String} envId UUID identifier for this StackHawk Environment
     * @param {module:model/ApplicationUpdateApplicationEnvRequest} applicationUpdateApplicationEnvRequest 
     * @param {module:api/ApplicationsApi~updateEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationApplication}
     */

  }, {
    key: "updateEnvironment",
    value: function updateEnvironment(appId, envId, applicationUpdateApplicationEnvRequest, callback) {
      var postBody = applicationUpdateApplicationEnvRequest; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateEnvironment");
      } // verify the required parameter 'envId' is set


      if (envId === undefined || envId === null) {
        throw new Error("Missing the required parameter 'envId' when calling updateEnvironment");
      } // verify the required parameter 'applicationUpdateApplicationEnvRequest' is set


      if (applicationUpdateApplicationEnvRequest === undefined || applicationUpdateApplicationEnvRequest === null) {
        throw new Error("Missing the required parameter 'applicationUpdateApplicationEnvRequest' when calling updateEnvironment");
      }

      var pathParams = {
        'appId': appId,
        'envId': envId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplicationApplication["default"];
      return this.apiClient.callApi('/api/v1/app/{appId}/env/{envId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ApplicationsApi;
}();

exports["default"] = ApplicationsApi;