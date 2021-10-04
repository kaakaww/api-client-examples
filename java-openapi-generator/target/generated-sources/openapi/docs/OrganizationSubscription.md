

# OrganizationSubscription

Properties of the external billing subscription for entitled access to the StackHawk platform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appCount** | **Long** | Soft application limit for this organization |  [optional]
**customerId** | **String** | CustomerId from billing provider |  [optional]
**endDate** | **Long** | End Date of this subscription, in seconds from epoch |  [optional]
**isEnabled** | **Boolean** | If external billing is enabled |  [optional]
**productName** | **String** | The name of the purchased product subscription |  [optional]
**quantity** | **Long** | The quantity of units in this subscription |  [optional]
**recurringInterval** | [**RecurringIntervalEnum**](#RecurringIntervalEnum) | The billing recurring interval for this subscription |  [optional]
**recurringIntervalCount** | **Long** | How often in the recurring interval billing occurs |  [optional]
**stackhawkOrgId** | **String** | The organization UUID for this subscription |  [optional]
**startDate** | **Long** | Start Date of this subscription, in seconds from epoch |  [optional]
**status** | [**StatusEnum**](#StatusEnum) | The status of the organization subscription |  [optional]
**subscriptionId** | **String** | SubscriptionId from billing provider |  [optional]
**unitAmount** | **Long** | The number of units with this subscription |  [optional]
**userCount** | **Long** | Soft user limit for this organization |  [optional]



## Enum: RecurringIntervalEnum

Name | Value
---- | -----
RECURRING_INTERVAL_UNKNOWN | &quot;RECURRING_INTERVAL_UNKNOWN&quot;
MONTH | &quot;MONTH&quot;
YEAR | &quot;YEAR&quot;



## Enum: StatusEnum

Name | Value
---- | -----
SUBSCRIPTION_UNKNOWN | &quot;SUBSCRIPTION_UNKNOWN&quot;
TRIALING | &quot;TRIALING&quot;
ACTIVE | &quot;ACTIVE&quot;
INCOMPLETE | &quot;INCOMPLETE&quot;
CANCELLED | &quot;CANCELLED&quot;
FREE | &quot;FREE&quot;



