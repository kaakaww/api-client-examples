# StackHawkPublicApi.OrganizationSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appCount** | **Number** | Soft application limit for this organization | [optional] 
**customerId** | **String** | CustomerId from billing provider | [optional] 
**endDate** | **Number** | End Date of this subscription, in seconds from epoch | [optional] 
**isEnabled** | **Boolean** | If external billing is enabled | [optional] 
**productName** | **String** | The name of the purchased product subscription | [optional] 
**quantity** | **Number** | The quantity of units in this subscription | [optional] 
**recurringInterval** | **String** | The billing recurring interval for this subscription | [optional] 
**recurringIntervalCount** | **Number** | How often in the recurring interval billing occurs | [optional] 
**stackhawkOrgId** | **String** | The organization UUID for this subscription | [optional] 
**startDate** | **Number** | Start Date of this subscription, in seconds from epoch | [optional] 
**status** | **String** | The status of the organization subscription | [optional] 
**subscriptionId** | **String** | SubscriptionId from billing provider | [optional] 
**unitAmount** | **Number** | The number of units with this subscription | [optional] 
**userCount** | **Number** | Soft user limit for this organization | [optional] 



## Enum: RecurringIntervalEnum


* `RECURRING_INTERVAL_UNKNOWN` (value: `"RECURRING_INTERVAL_UNKNOWN"`)

* `MONTH` (value: `"MONTH"`)

* `YEAR` (value: `"YEAR"`)





## Enum: StatusEnum


* `SUBSCRIPTION_UNKNOWN` (value: `"SUBSCRIPTION_UNKNOWN"`)

* `TRIALING` (value: `"TRIALING"`)

* `ACTIVE` (value: `"ACTIVE"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `FREE` (value: `"FREE"`)




