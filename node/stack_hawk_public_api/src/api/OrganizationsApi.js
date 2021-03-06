/**
 * StackHawk Public API
 *  ![STACKHAWK](https://images.ctfassets.net/nx13ojx82pll/1zPawvEGOq9zKX8PuVw0kB/e4a31b30fdb07b7e424277d7824d2ffe/stackhawk-long.png) # StackHawk API  This is the OpenAPI specification for the [StackHawk](https://www.stackhawk.com) REST API, affectionately known as _Falcon_ 🦅 #Kaakaww!  StackHawk is an application security testing tool built for developers. With powerful automation and integration capabilities, StackHawk gives engineers the ability to find and fix security vulnerabilities on every merge.  ## Getting Started  To make requests to the StackHawk API, you will first need an **API Key** from the StackHawk platform. That will be used to request an **access token**, which is used to authorize requests made to the StackHawk API.  Use of the StackHawk API will require a [StackHawk account](https://auth.stackhawk.com) and an organization with sufficient permissions.  From the StackHawk platform, under [Settings > API Keys](https://app.stackhawk.com/settings/apikeys) create a new API Key. These secrets are long-lived, so store this value in a secure fashion.  ### Authorization  Requests made to the StackHawk API server are authorized following the [OAuth2.0 protocol](https://oauth.net/2/)  To get an access token, make a request to `GET /api/v1/auth/login` and provide the user apikey through the `X-ApiKey` request header. This route will then return an access token that can authenticate further API requests. This token can then be used to authenticate subsequent requests, using the `authorization: Bearer` header.  For more information, see the **Api Authentication** section.  ### Rate Limiting  Api calls are ratelimited, with at most 180 requests per minute.  ## StackHawk Api Standards  ### Client Errors  API Calls that fail due to client input will return 4xx status code.  #### `401 Unauthorized` The server doesn't think you should be making this request.  This error is intentionally vague for security purposes, but any of the following could cause it:  - no authorization was provided - authorization has expired - authorization is insufficient for the requested resource  #### `404 Not Found`  The route or resource does not exist.  #### `400 Bad Request` The server could not process this request, although it may have tried. The JSON reponse body `message` will include details on what input was invalid.  ### Pagination and Sorting  Listing API routes will return resources in a paginated fashion. Paginated requests follow a pattern of taking the following optional path parameters:  * `pageToken`: a string incrementing count of pages in the pagination, starting from '0' * `pageSize`: the number of elements to request in the page, defaults to 10 * `sortField`: sorts the listed resource by an approved field, defaults to sorting by resource name * `sortDir`: either 'asc' or 'desc', defaults ascending  The responseBody of these API routes will additionally include two fields:  * `nextPageToken`: a string indicating the next `pageToken` to pass in for the next page of results with this request * `totalCount`: the total number of resources the query can paginate through  ## Questions? Comments? Concerns? Kaa-Kaww?  We are always making advancements and improvements to our Platform, Scanner and the StackHawk API. If you encounter an issue you cannot solve with this documentation, please reach out to [support@stackhawk.com](mailto:support@stackhawk.com) with your questions, and we’ll help you troubleshoot any issues and get you soaring with StackHawk.   
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: hello@stackhawk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApplicationApplication from '../model/ApplicationApplication';
import ApplicationListApplicationsResponse from '../model/ApplicationListApplicationsResponse';
import ApplicationNewApplicationRequest from '../model/ApplicationNewApplicationRequest';

/**
* Organizations service.
* @module api/OrganizationsApi
* @version 0.0.1
*/
export default class OrganizationsApi {

    /**
    * Constructs a new OrganizationsApi. 
    * @alias module:api/OrganizationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    createApplication(orgId, applicationNewApplicationRequest, callback) {
      let postBody = applicationNewApplicationRequest;
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling createApplication");
      }
      // verify the required parameter 'applicationNewApplicationRequest' is set
      if (applicationNewApplicationRequest === undefined || applicationNewApplicationRequest === null) {
        throw new Error("Missing the required parameter 'applicationNewApplicationRequest' when calling createApplication");
      }

      let pathParams = {
        'orgId': orgId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApplicationApplication;
      return this.apiClient.callApi(
        '/api/v1/org/{orgId}/app', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    listApplications(orgId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling listApplications");
      }

      let pathParams = {
        'orgId': orgId
      };
      let queryParams = {
        'appIds': this.apiClient.buildCollectionParam(opts['appIds'], 'multi'),
        'envs': this.apiClient.buildCollectionParam(opts['envs'], 'multi'),
        'ignoreEnvs': opts['ignoreEnvs'],
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken'],
        'sortField': opts['sortField'],
        'sortDir': opts['sortDir']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApplicationListApplicationsResponse;
      return this.apiClient.callApi(
        '/api/v1/app/{orgId}/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
