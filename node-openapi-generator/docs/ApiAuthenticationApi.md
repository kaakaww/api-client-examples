# StackHawkPublicApi.ApiAuthenticationApi

All URIs are relative to *https://api.stackhawk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](ApiAuthenticationApi.md#login) | **GET** /api/v1/auth/login | Login with API Key
[**refreshToken**](ApiAuthenticationApi.md#refreshToken) | **GET** /api/v1/auth/refresh-token | Refresh existing authentication



## login

> UserJWT login(xApiKey)

Login with API Key

## Access Login  Using a [StackHawk API Key](https://app.stackhawk.com/settings/apikeys), this endpoint returns an *access token* which can then be used in the &#x60;authorization&#x60; header of subsequent API requests. The access token returned is an [RFC-7519](https://datatracker.ietf.org/doc/html/rfc7519) compliant [jwt access token](https://jwt.io/).  Access tokens have an expiration of *30 minutes* and are issued on behalf of the requesting user.  An access token can only be used to interact with StackHawk resources that belong to the user, or to organizations that user is a part of and permissioned for.  For best practices, use the &#x60;/login&#x60; route only when starting a new access session to the StackHawk API, and use the &#x60;/refresh&#x60; route to request a fresh token to extend an API session.   

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';

let apiInstance = new StackHawkPublicApi.ApiAuthenticationApi();
let xApiKey = "xApiKey_example"; // String | Specialized request header to supply your **StackHawk API Key** which authorizes further requests.
apiInstance.login(xApiKey, (error, data, response) => {
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
 **xApiKey** | **String**| Specialized request header to supply your **StackHawk API Key** which authorizes further requests. | 

### Return type

[**UserJWT**](UserJWT.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshToken

> UserJWT refreshToken()

Refresh existing authentication

## Access Refresh  Once authenticated, an issued API Access Token has a will expire after 30 minutes.  This authenticated endpoint will \&quot;refresh\&quot; the access token by issuing a new jwt token with an extended expiration.  For best practices, use the &#x60;/refresh&#x60; route for refreshing authentication access to extend the API session. 

### Example

```javascript
import StackHawkPublicApi from 'stack_hawk_public_api';
let defaultClient = StackHawkPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new StackHawkPublicApi.ApiAuthenticationApi();
apiInstance.refreshToken((error, data, response) => {
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

[**UserJWT**](UserJWT.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

