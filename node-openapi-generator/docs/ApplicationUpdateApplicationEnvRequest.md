# StackHawkPublicApi.ApplicationUpdateApplicationEnvRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | the UUID identifier of this application. | [optional] 
**dataType** | **String** | updated riskLevel for this environment. | [optional] 
**envId** | **String** | the UUID identifier of this environment. | [optional] 
**name** | **String** | updated name for this environment. | [optional] 
**riskLevel** | **String** | updated riskLevel for this environment. | [optional] 



## Enum: DataTypeEnum


* `NONE` (value: `"NONE"`)

* `PII` (value: `"PII"`)

* `PCI` (value: `"PCI"`)

* `FIN` (value: `"FIN"`)

* `PKI` (value: `"PKI"`)

* `HIPAA` (value: `"HIPAA"`)

* `FERPA` (value: `"FERPA"`)





## Enum: RiskLevelEnum


* `LOW` (value: `"LOW"`)

* `MEDIUM` (value: `"MEDIUM"`)

* `HIGH` (value: `"HIGH"`)

* `CRITICAL` (value: `"CRITICAL"`)




