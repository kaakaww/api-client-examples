# StackHawkPublicApi.ApplicationApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | the UUID identifier of this application. | [optional] 
**dataType** | **String** | the perceived dataType of this application. | [optional] 
**env** | **String** | the name of this environment. | [optional] 
**envId** | **String** | the UUID identifier of this environment. | [optional] 
**name** | **String** | the name of this application. | [optional] 
**riskLevel** | **String** | the perceived riskLevel of this application. | [optional] 



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




