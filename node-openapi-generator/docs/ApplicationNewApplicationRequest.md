# StackHawkPublicApi.ApplicationNewApplicationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataType** | **String** | a specified dataType for this new application. | [optional] 
**env** | **String** | the initial environment for this new application. | [optional] 
**name** | **String** | the name of this new application. | [optional] 
**organizationId** | **String** | the UUID identifier of the organization that will own this application. | [optional] 
**riskLevel** | **String** | a specified riskLevel for this new application. | [optional] 



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




