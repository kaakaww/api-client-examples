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


import ApiClient from './ApiClient';
import ApplicationAlertStatusStats from './model/ApplicationAlertStatusStats';
import ApplicationApplication from './model/ApplicationApplication';
import ApplicationEnvironment from './model/ApplicationEnvironment';
import ApplicationListApplicationsResponse from './model/ApplicationListApplicationsResponse';
import ApplicationListEnvironmentsResponse from './model/ApplicationListEnvironmentsResponse';
import ApplicationNewApplicationEnvRequest from './model/ApplicationNewApplicationEnvRequest';
import ApplicationNewApplicationRequest from './model/ApplicationNewApplicationRequest';
import ApplicationScanAlertStats from './model/ApplicationScanAlertStats';
import ApplicationScanSummary from './model/ApplicationScanSummary';
import ApplicationUpdateApplicationEnvRequest from './model/ApplicationUpdateApplicationEnvRequest';
import ApplicationUpdateApplicationRequest from './model/ApplicationUpdateApplicationRequest';
import FeatureFeature from './model/FeatureFeature';
import OrganizationOrganization from './model/OrganizationOrganization';
import OrganizationSubscription from './model/OrganizationSubscription';
import UserJWT from './model/UserJWT';
import UserProviderInfo from './model/UserProviderInfo';
import UserUser from './model/UserUser';
import UserUserExternal from './model/UserUserExternal';
import UserUserOrganization from './model/UserUserOrganization';
import UserUserPreferences from './model/UserUserPreferences';
import UserUserResponse from './model/UserUserResponse';
import ApiAuthenticationApi from './api/ApiAuthenticationApi';
import ApplicationsApi from './api/ApplicationsApi';
import OrganizationsApi from './api/OrganizationsApi';
import UserApi from './api/UserApi';


/**
* _STACKHAWK_https__images_ctfassets_net_nx13ojx82pll_1zPawvEGOq9zKX8PuVw0kB_e4a31b30fdb07b7e424277d7824d2ffe_stackhawk_long_png_StackHawk_APIThis_is_the_OpenAPI_specification_for_the__StackHawk_https__www_stackhawk_com_REST_API_affectionately_known_as__Falcon___KaakawwStackHawk_is_an_application_security_testing_tool_built_for_developers__With_powerful_automation_and_integration_capabilities_StackHawk_gives_engineers_the_ability_to_find_and_fix_security_vulnerabilities_on_every_merge__Getting_StartedTo_make_requests_to_the_StackHawk_API_you_will_first_need_an_API_Key_from_the_StackHawk_platform__That_will_be_used_to_request_an_access_token_which_is_used_to_authorize_requests_made_to_the_StackHawk_API_Use_of_the_StackHawk_API_will_require_a__StackHawk_account_https__auth_stackhawk_com_and_an_organization_with_sufficient_permissions_From_the_StackHawk_platform_under__Settings__API_Keys_https__app_stackhawk_com_settings_apikeys_create_a_new_API_Key__These_secrets_are_long_lived_so_store_this_value_in_a_secure_fashion__AuthorizationRequests_made_to_the_StackHawk_API_server_are_authorized_following_the__OAuth2_0_protocol_https__oauth_net_2_To_get_an_access_token_make_a_request_to_GET__api_v1_auth_login_and_provide_the_user_apikey_through_the_X_ApiKey_request_header__This_route_will_then_return_an_access_token_that_can_authenticate_further_API_requests_This_token_can_then_be_used_to_authenticate_subsequent_requests_using_the_authorization_Bearer_header_For_more_information_see_the_Api_Authentication_section__Rate_LimitingApi_calls_are_ratelimited_with_at_most_180_requests_per_minute__StackHawk_Api_Standards_Client_ErrorsAPI_Calls_that_fail_due_to_client_input_will_return_4xx_status_code__401_UnauthorizedThe_server_doesnt_think_you_should_be_making_this_request_This_error_is_intentionally_vague_for_security_purposes_but_any_of_the_following_could_cause_it__no_authorization_was_provided__authorization_has_expired__authorization_is_insufficient_for_the_requested_resource_404_Not_FoundThe_route_or_resource_does_not_exist__400_Bad_RequestThe_server_could_not_process_this_request_although_it_may_have_tried_The_JSON_reponse_body_message_will_include_details_on_what_input_was_invalid__Pagination_and_SortingListing_API_routes_will_return_resources_in_a_paginated_fashion_Paginated_requests_follow_a_pattern_of_taking_the_following_optional_path_parameters_pageToken_a_string_incrementing_count_of_pages_in_the_pagination_starting_from_0_pageSize_the_number_of_elements_to_request_in_the_page_defaults_to_10_sortField_sorts_the_listed_resource_by_an_approved_field_defaults_to_sorting_by_resource_name_sortDir_either_asc_or_desc_defaults_ascendingThe_responseBody_of_these_API_routes_will_additionally_include_two_fields_nextPageToken_a_string_indicating_the_next_pageToken_to_pass_in_for_the_next_page_of_results_with_this_request_totalCount_the_total_number_of_resources_the_query_can_paginate_through_Questions_Comments_Concerns_Kaa_KawwWe_are_always_making_advancements_and_improvements_to_our_Platform_Scanner_and_the_StackHawk_API_If_you_encounter_an_issue_you_cannot_solve_with_this_documentation_please_reach_out_to__supportstackhawk_com_mailtosupportstackhawk_com_with_your_questions_and_well_help_you_troubleshoot_any_issues_and_get_you_soaring_with_StackHawk_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var StackHawkPublicApi = require('index'); // See note below*.
* var xxxSvc = new StackHawkPublicApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new StackHawkPublicApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new StackHawkPublicApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new StackHawkPublicApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApplicationAlertStatusStats model constructor.
     * @property {module:model/ApplicationAlertStatusStats}
     */
    ApplicationAlertStatusStats,

    /**
     * The ApplicationApplication model constructor.
     * @property {module:model/ApplicationApplication}
     */
    ApplicationApplication,

    /**
     * The ApplicationEnvironment model constructor.
     * @property {module:model/ApplicationEnvironment}
     */
    ApplicationEnvironment,

    /**
     * The ApplicationListApplicationsResponse model constructor.
     * @property {module:model/ApplicationListApplicationsResponse}
     */
    ApplicationListApplicationsResponse,

    /**
     * The ApplicationListEnvironmentsResponse model constructor.
     * @property {module:model/ApplicationListEnvironmentsResponse}
     */
    ApplicationListEnvironmentsResponse,

    /**
     * The ApplicationNewApplicationEnvRequest model constructor.
     * @property {module:model/ApplicationNewApplicationEnvRequest}
     */
    ApplicationNewApplicationEnvRequest,

    /**
     * The ApplicationNewApplicationRequest model constructor.
     * @property {module:model/ApplicationNewApplicationRequest}
     */
    ApplicationNewApplicationRequest,

    /**
     * The ApplicationScanAlertStats model constructor.
     * @property {module:model/ApplicationScanAlertStats}
     */
    ApplicationScanAlertStats,

    /**
     * The ApplicationScanSummary model constructor.
     * @property {module:model/ApplicationScanSummary}
     */
    ApplicationScanSummary,

    /**
     * The ApplicationUpdateApplicationEnvRequest model constructor.
     * @property {module:model/ApplicationUpdateApplicationEnvRequest}
     */
    ApplicationUpdateApplicationEnvRequest,

    /**
     * The ApplicationUpdateApplicationRequest model constructor.
     * @property {module:model/ApplicationUpdateApplicationRequest}
     */
    ApplicationUpdateApplicationRequest,

    /**
     * The FeatureFeature model constructor.
     * @property {module:model/FeatureFeature}
     */
    FeatureFeature,

    /**
     * The OrganizationOrganization model constructor.
     * @property {module:model/OrganizationOrganization}
     */
    OrganizationOrganization,

    /**
     * The OrganizationSubscription model constructor.
     * @property {module:model/OrganizationSubscription}
     */
    OrganizationSubscription,

    /**
     * The UserJWT model constructor.
     * @property {module:model/UserJWT}
     */
    UserJWT,

    /**
     * The UserProviderInfo model constructor.
     * @property {module:model/UserProviderInfo}
     */
    UserProviderInfo,

    /**
     * The UserUser model constructor.
     * @property {module:model/UserUser}
     */
    UserUser,

    /**
     * The UserUserExternal model constructor.
     * @property {module:model/UserUserExternal}
     */
    UserUserExternal,

    /**
     * The UserUserOrganization model constructor.
     * @property {module:model/UserUserOrganization}
     */
    UserUserOrganization,

    /**
     * The UserUserPreferences model constructor.
     * @property {module:model/UserUserPreferences}
     */
    UserUserPreferences,

    /**
     * The UserUserResponse model constructor.
     * @property {module:model/UserUserResponse}
     */
    UserUserResponse,

    /**
    * The ApiAuthenticationApi service constructor.
    * @property {module:api/ApiAuthenticationApi}
    */
    ApiAuthenticationApi,

    /**
    * The ApplicationsApi service constructor.
    * @property {module:api/ApplicationsApi}
    */
    ApplicationsApi,

    /**
    * The OrganizationsApi service constructor.
    * @property {module:api/OrganizationsApi}
    */
    OrganizationsApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
