# OrganizationsApi

All URIs are relative to *https://api.stackhawk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](OrganizationsApi.md#createApplication) | **POST** /api/v1/org/{orgId}/app | Create application
[**listApplications**](OrganizationsApi.md#listApplications) | **GET** /api/v1/app/{orgId}/list | List applications


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
import org.openapitools.client.api.OrganizationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
    UUID orgId = new UUID(); // UUID | UUID identifier for this StackHawk Organization
    ApplicationNewApplicationRequest applicationNewApplicationRequest = new ApplicationNewApplicationRequest(); // ApplicationNewApplicationRequest | 
    try {
      ApplicationApplication result = apiInstance.createApplication(orgId, applicationNewApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#createApplication");
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
import org.openapitools.client.api.OrganizationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stackhawk.com");
    
    // Configure HTTP bearer authorization: BearerAuth
    HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
    BearerAuth.setBearerToken("BEARER TOKEN");

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
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
      System.err.println("Exception when calling OrganizationsApi#listApplications");
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

