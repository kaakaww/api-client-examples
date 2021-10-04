

# ApplicationNewApplicationRequest

Request to create a new StackHawk Application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataType** | [**DataTypeEnum**](#DataTypeEnum) | a specified dataType for this new application. |  [optional]
**env** | **String** | the initial environment for this new application. |  [optional]
**name** | **String** | the name of this new application. |  [optional]
**organizationId** | **String** | the UUID identifier of the organization that will own this application. |  [optional]
**riskLevel** | [**RiskLevelEnum**](#RiskLevelEnum) | a specified riskLevel for this new application. |  [optional]



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



