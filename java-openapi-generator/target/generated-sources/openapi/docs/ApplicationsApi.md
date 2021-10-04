# ApplicationsApi

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


<a name="createApplication"></a>
# **createApplication**
> ApplicationApplication createApplication(orgId, applicationNewApplicationRequest)

Create application

Creates a new application for this organization.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID orgId = new UUID(); // UUID | UUID identifier for this StackHawk Organization
    ApplicationNewApplicationRequest applicationNewApplicationRequest = new ApplicationNewApplicationRequest(); // ApplicationNewApplicationRequest | 
    try {
      ApplicationApplication result = apiInstance.createApplication(orgId, applicationNewApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#createApplication");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | [**UUID**](.md)| UUID identifier for this StackHawk Organization |
 **applicationNewApplicationRequest** | [**ApplicationNewApplicationRequest**](ApplicationNewApplicationRequest.md)|  |

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html). |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

<a name="createEnvironment"></a>
# **createEnvironment**
> ApplicationApplication createEnvironment(appId, applicationNewApplicationEnvRequest)

Create environment

Creates a new environment under this application.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    ApplicationNewApplicationEnvRequest applicationNewApplicationEnvRequest = new ApplicationNewApplicationEnvRequest(); // ApplicationNewApplicationEnvRequest | 
    try {
      ApplicationApplication result = apiInstance.createEnvironment(appId, applicationNewApplicationEnvRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#createEnvironment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |
 **applicationNewApplicationEnvRequest** | [**ApplicationNewApplicationEnvRequest**](ApplicationNewApplicationEnvRequest.md)|  |

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html). |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

<a name="deleteApplication"></a>
# **deleteApplication**
> deleteApplication(appId)

Delete application

Deletes this application.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    try {
      apiInstance.deleteApplication(appId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#deleteApplication");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

<a name="deleteEnvironment"></a>
# **deleteEnvironment**
> deleteEnvironment(appId, envId)

Delete environment

Deletes this environment.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    UUID envId = new UUID(); // UUID | UUID identifier for this StackHawk Environment
    try {
      apiInstance.deleteEnvironment(appId, envId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#deleteEnvironment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |
 **envId** | [**UUID**](.md)| UUID identifier for this StackHawk Environment |

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

<a name="getApplication"></a>
# **getApplication**
> ApplicationApplication getApplication(appId)

Get application

Gets this application.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    try {
      ApplicationApplication result = apiInstance.getApplication(appId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#getApplication");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html). |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

<a name="listApplications"></a>
# **listApplications**
> ApplicationListApplicationsResponse listApplications(orgId, appIds, envs, ignoreEnvs, pageSize, pageToken, sortField, sortDir)

List applications

Lists applications that belong to this organization.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    String orgId = "orgId_example"; // String | UUID identifier for this StackHawk Organization
    List<String> appIds = Arrays.asList(); // List<String> | A comma-deliminated list of UUID identifiers of StackHawk Applications.
    List<String> envs = Arrays.asList(); // List<String> | Names of environments to filter results by
    Boolean ignoreEnvs = false; // Boolean | If enabled returns a shortened list of applications, omiting environment entries
    BigDecimal pageSize = new BigDecimal(78); // BigDecimal | Pagination response size limit
    String pageToken = ""; // String | Pagination request page increment
    String sortField = "name"; // String | Resource field to sort paginated response by
    String sortDir = "asc"; // String | Paginated results are sorted 'asc' or 'desc'
    try {
      ApplicationListApplicationsResponse result = apiInstance.listApplications(orgId, appIds, envs, ignoreEnvs, pageSize, pageToken, sortField, sortDir);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#listApplications");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **String**| UUID identifier for this StackHawk Organization |
 **appIds** | [**List&lt;String&gt;**](String.md)| A comma-deliminated list of UUID identifiers of StackHawk Applications. | [optional]
 **envs** | [**List&lt;String&gt;**](String.md)| Names of environments to filter results by | [optional]
 **ignoreEnvs** | **Boolean**| If enabled returns a shortened list of applications, omiting environment entries | [optional] [default to false]
 **pageSize** | **BigDecimal**| Pagination response size limit | [optional] [default to 10]
 **pageToken** | **String**| Pagination request page increment | [optional] [default to ]
 **sortField** | **String**| Resource field to sort paginated response by | [optional] [default to name] [enum: id, name]
 **sortDir** | **String**| Paginated results are sorted &#39;asc&#39; or &#39;desc&#39; | [optional] [default to asc] [enum: asc, desc]

### Return type

[**ApplicationListApplicationsResponse**](ApplicationListApplicationsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated response of applications. |  -  |
**401** | Unauthorized |  -  |

<a name="listEnvironments"></a>
# **listEnvironments**
> ApplicationListEnvironmentsResponse listEnvironments(appId, envs, pageSize, pageToken, sortField, sortDir)

List environments

List environments that belong to this application.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    List<String> envs = Arrays.asList(); // List<String> | Names of environments to filter results by
    BigDecimal pageSize = new BigDecimal(78); // BigDecimal | Pagination response size limit
    String pageToken = ""; // String | Pagination request page increment
    String sortField = "name"; // String | Resource field to sort paginated response by
    String sortDir = "asc"; // String | Paginated results are sorted 'asc' or 'desc'
    try {
      ApplicationListEnvironmentsResponse result = apiInstance.listEnvironments(appId, envs, pageSize, pageToken, sortField, sortDir);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#listEnvironments");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |
 **envs** | [**List&lt;String&gt;**](String.md)| Names of environments to filter results by | [optional]
 **pageSize** | **BigDecimal**| Pagination response size limit | [optional] [default to 10]
 **pageToken** | **String**| Pagination request page increment | [optional] [default to ]
 **sortField** | **String**| Resource field to sort paginated response by | [optional] [default to name] [enum: id, name]
 **sortDir** | **String**| Paginated results are sorted &#39;asc&#39; or &#39;desc&#39; | [optional] [default to asc] [enum: asc, desc]

### Return type

[**ApplicationListEnvironmentsResponse**](ApplicationListEnvironmentsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated response of environments. |  -  |
**401** | Unauthorized |  -  |

<a name="updateApplication"></a>
# **updateApplication**
> ApplicationApplication updateApplication(appId, applicationUpdateApplicationRequest)

Update application

Updates this application.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    ApplicationUpdateApplicationRequest applicationUpdateApplicationRequest = new ApplicationUpdateApplicationRequest(); // ApplicationUpdateApplicationRequest | 
    try {
      ApplicationApplication result = apiInstance.updateApplication(appId, applicationUpdateApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#updateApplication");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |
 **applicationUpdateApplicationRequest** | [**ApplicationUpdateApplicationRequest**](ApplicationUpdateApplicationRequest.md)|  |

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html). |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

<a name="updateEnvironment"></a>
# **updateEnvironment**
> ApplicationApplication updateEnvironment(appId, envId, applicationUpdateApplicationEnvRequest)

Update environment

Updates this environment.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    UUID appId = new UUID(); // UUID | UUID identifier for this StackHawk Application
    UUID envId = new UUID(); // UUID | UUID identifier for this StackHawk Environment
    ApplicationUpdateApplicationEnvRequest applicationUpdateApplicationEnvRequest = new ApplicationUpdateApplicationEnvRequest(); // ApplicationUpdateApplicationEnvRequest | 
    try {
      ApplicationApplication result = apiInstance.updateEnvironment(appId, envId, applicationUpdateApplicationEnvRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#updateEnvironment");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**UUID**](.md)| UUID identifier for this StackHawk Application |
 **envId** | [**UUID**](.md)| UUID identifier for this StackHawk Environment |
 **applicationUpdateApplicationEnvRequest** | [**ApplicationUpdateApplicationEnvRequest**](ApplicationUpdateApplicationEnvRequest.md)|  |

### Return type

[**ApplicationApplication**](ApplicationApplication.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html). |  -  |
**401** | Unauthorized |  -  |
**400** | Bad Request |  -  |

