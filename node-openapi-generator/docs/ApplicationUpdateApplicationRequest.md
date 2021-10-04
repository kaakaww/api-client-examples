# StackHawkPublicApi.ApplicationUpdateApplicationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | the UUID identifier of this application. | [optional] 
**dataType** | **String** | updated dataType for this application. | [optional] 
**name** | **String** | updated name for this application. | [optional] 
**riskLevel** | **String** | updated riskLevel for this application. | [optional] 



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




