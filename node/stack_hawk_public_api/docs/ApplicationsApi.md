# StackHawkPublicApi.ApplicationsApi

All URIs are relative to *https://api.stackhawk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](ApplicationsApi.md#createApplication) | **POST** /api/v1/org/{orgId}/app | Create application
[**createEnvironment**](ApplicationsApi.md#createEnvironment) | **POST** /api/v1/app/{appId}/env | Create environment
[**deleteApplication**](ApplicationsApi.md#deleteApplication) | **DELETE** /api/v1/app/{appId} | Delete application
[**deleteEnvironment**](ApplicationsApi.md#deleteEnvironment) | **DELETE** /api/v1/app/{appId}/env/{envId} | Delete environment
[**getApplication**](ApplicationsApi.md#getApplication) | **GET** /api/v1/app/{appId} | Get application
[**listApplications**](ApplicationsApi.md#listApplications) | **GET** /api/v1/app/{orgId}/list | List applications
[**listEnvironments**](ApplicationsApi.md#listEnvironments) | **GET** /api/v1/app/{appId}/env/list | List environments
[**updateApplication**](ApplicationsApi.md#updateApplication) | **POST** /api/v1/app/{appId} | Update application
[**updateEnvironment**](ApplicationsApi.md#updateEnvironment) | **POST** /api/v1/app/{appId}/env/{envId} | Update environment



## createApplication

> ApplicationApplication createApplication(orgId, applicationNewApplicationRequest)

Create application

Creates a new application for this organization.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let orgId = null; // String | UUID identifier for this StackHawk Organization
let applicationNewApplicationRequest = new StackHawkPublicApi.ApplicationNewApplicationRequest(); // ApplicationNewApplicationRequest | 
apiInstance.createApplication(orgId, applicationNewApplicationRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**String**](.md)| UUID identifier for this StackHawk Organization | 
 **applicationNewApplicationRequest** | [**ApplicationNewApplicationRequest**](ApplicationNewApplicationRequest.md)|  | 

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEnvironment

> ApplicationApplication createEnvironment(appId, applicationNewApplicationEnvRequest)

Create environment

Creates a new environment under this application.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
let applicationNewApplicationEnvRequest = new StackHawkPublicApi.ApplicationNewApplicationEnvRequest(); // ApplicationNewApplicationEnvRequest | 
apiInstance.createEnvironment(appId, applicationNewApplicationEnvRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 
 **applicationNewApplicationEnvRequest** | [**ApplicationNewApplicationEnvRequest**](ApplicationNewApplicationEnvRequest.md)|  | 

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplication

> deleteApplication(appId)

Delete application

Deletes this application.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
apiInstance.deleteApplication(appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteEnvironment

> deleteEnvironment(appId, envId)

Delete environment

Deletes this environment.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
let envId = null; // String | UUID identifier for this StackHawk Environment
apiInstance.deleteEnvironment(appId, envId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 
 **envId** | [**String**](.md)| UUID identifier for this StackHawk Environment | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getApplication

> ApplicationApplication getApplication(appId)

Get application

Gets this application.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
apiInstance.getApplication(appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listApplications

> ApplicationListApplicationsResponse listApplications(orgId, opts)

List applications

Lists applications that belong to this organization.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let orgId = "orgId_example"; // String | UUID identifier for this StackHawk Organization
let opts = {
  'appIds': ["null"], // [String] | A comma-deliminated list of UUID identifiers of StackHawk Applications.
  'envs': ["null"], // [String] | Names of environments to filter results by
  'ignoreEnvs': false, // Boolean | If enabled returns a shortened list of applications, omiting environment entries
  'pageSize': 10, // Number | Pagination response size limit
  'pageToken': "''", // String | Pagination request page increment
  'sortField': "'name'", // String | Resource field to sort paginated response by
  'sortDir': "'asc'" // String | Paginated results are sorted 'asc' or 'desc'
};
apiInstance.listApplications(orgId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **String**| UUID identifier for this StackHawk Organization | 
 **appIds** | [**[String]**](String.md)| A comma-deliminated list of UUID identifiers of StackHawk Applications. | [optional] 
 **envs** | [**[String]**](String.md)| Names of environments to filter results by | [optional] 
 **ignoreEnvs** | **Boolean**| If enabled returns a shortened list of applications, omiting environment entries | [optional] [default to false]
 **pageSize** | **Number**| Pagination response size limit | [optional] [default to 10]
 **pageToken** | **String**| Pagination request page increment | [optional] [default to &#39;&#39;]
 **sortField** | **String**| Resource field to sort paginated response by | [optional] [default to &#39;name&#39;]
 **sortDir** | **String**| Paginated results are sorted &#39;asc&#39; or &#39;desc&#39; | [optional] [default to &#39;asc&#39;]

### Return type

[**ApplicationListApplicationsResponse**](ApplicationListApplicationsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEnvironments

> ApplicationListEnvironmentsResponse listEnvironments(appId, opts)

List environments

List environments that belong to this application.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
let opts = {
  'envs': ["null"], // [String] | Names of environments to filter results by
  'pageSize': 10, // Number | Pagination response size limit
  'pageToken': "''", // String | Pagination request page increment
  'sortField': "'name'", // String | Resource field to sort paginated response by
  'sortDir': "'asc'" // String | Paginated results are sorted 'asc' or 'desc'
};
apiInstance.listEnvironments(appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 
 **envs** | [**[String]**](String.md)| Names of environments to filter results by | [optional] 
 **pageSize** | **Number**| Pagination response size limit | [optional] [default to 10]
 **pageToken** | **String**| Pagination request page increment | [optional] [default to &#39;&#39;]
 **sortField** | **String**| Resource field to sort paginated response by | [optional] [default to &#39;name&#39;]
 **sortDir** | **String**| Paginated results are sorted &#39;asc&#39; or &#39;desc&#39; | [optional] [default to &#39;asc&#39;]

### Return type

[**ApplicationListEnvironmentsResponse**](ApplicationListEnvironmentsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApplication

> ApplicationApplication updateApplication(appId, applicationUpdateApplicationRequest)

Update application

Updates this application.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
let applicationUpdateApplicationRequest = new StackHawkPublicApi.ApplicationUpdateApplicationRequest(); // ApplicationUpdateApplicationRequest | 
apiInstance.updateApplication(appId, applicationUpdateApplicationRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 
 **applicationUpdateApplicationRequest** | [**ApplicationUpdateApplicationRequest**](ApplicationUpdateApplicationRequest.md)|  | 

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEnvironment

> ApplicationApplication updateEnvironment(appId, envId, applicationUpdateApplicationEnvRequest)

Update environment

Updates this environment.

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApplicationsApi();
let appId = null; // String | UUID identifier for this StackHawk Application
let envId = null; // String | UUID identifier for this StackHawk Environment
let applicationUpdateApplicationEnvRequest = new StackHawkPublicApi.ApplicationUpdateApplicationEnvRequest(); // ApplicationUpdateApplicationEnvRequest | 
apiInstance.updateEnvironment(appId, envId, applicationUpdateApplicationEnvRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**String**](.md)| UUID identifier for this StackHawk Application | 
 **envId** | [**String**](.md)| UUID identifier for this StackHawk Environment | 
 **applicationUpdateApplicationEnvRequest** | [**ApplicationUpdateApplicationEnvRequest**](ApplicationUpdateApplicationEnvRequest.md)|  | 

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

