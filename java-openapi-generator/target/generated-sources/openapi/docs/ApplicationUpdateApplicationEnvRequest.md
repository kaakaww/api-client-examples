

# ApplicationUpdateApplicationEnvRequest

Request to update an existing StackHawk Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | the UUID identifier of this application. |  [optional]
**dataType** | [**DataTypeEnum**](#DataTypeEnum) | updated riskLevel for this environment. |  [optional]
**envId** | **String** | the UUID identifier of this environment. |  [optional]
**name** | **String** | updated name for this environment. |  [optional]
**riskLevel** | [**RiskLevelEnum**](#RiskLevelEnum) | updated riskLevel for this environment. |  [optional]



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



