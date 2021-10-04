

# ApplicationApplication

StackHawk Applications will namespace scanResults from HawkScan, and can manage scan settings that can be configured to influence HawkScan behavior. For more information, see [Applications](https://docs.stackhawk.com/web-app/applications.html).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | the UUID identifier of this application. |  [optional]
**dataType** | [**DataTypeEnum**](#DataTypeEnum) | the perceived dataType of this application. |  [optional]
**env** | **String** | the name of this environment. |  [optional]
**envId** | **String** | the UUID identifier of this environment. |  [optional]
**name** | **String** | the name of this application. |  [optional]
**riskLevel** | [**RiskLevelEnum**](#RiskLevelEnum) | the perceived riskLevel of this application. |  [optional]



## Enum: DataTypeEnum

Name | Value
---- | -----
NONE | &quot;NONE&quot;
PII | &quot;PII&quot;
PCI | &quot;PCI&quot;
FIN | &quot;FIN&quot;
PKI | &quot;PKI&quot;
HIPAA | &quot;HIPAA&quot;
FERPA | &quot;FERPA&quot;



## Enum: RiskLevelEnum

Name | Value
---- | -----
LOW | &quot;LOW&quot;
MEDIUM | &quot;MEDIUM&quot;
HIGH | &quot;HIGH&quot;
CRITICAL | &quot;CRITICAL&quot;



