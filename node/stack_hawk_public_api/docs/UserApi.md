# StackHawkPublicApi.UserApi

All URIs are relative to *https://api.stackhawk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUser**](UserApi.md#getUser) | **GET** /api/v1/user | Get the current user



## getUser

> UserUserResponse getUser()

Get the current user

## User Details  This endpoint provides details about the requesting user. This information helps determine what access an authorized user has on the StackHawk platform, and how they are authenticated.  

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.UserApi();
apiInstance.getUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserUserResponse**](UserUserResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

