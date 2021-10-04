# StackHawkPublicApi.OrganizationsApi

All URIs are relative to *https://api.stackhawk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](OrganizationsApi.md#createApplication) | **POST** /api/v1/org/{orgId}/app | Create application
[**listApplications**](OrganizationsApi.md#listApplications) | **GET** /api/v1/app/{orgId}/list | List applications



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

let apiInstance = new StackHawkPublicApi.OrganizationsApi();
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

let apiInstance = new StackHawkPublicApi.OrganizationsApi();
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

