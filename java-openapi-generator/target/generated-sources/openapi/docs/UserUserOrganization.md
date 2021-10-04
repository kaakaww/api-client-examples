

# UserUserOrganization

Represents the relationship between a User and an Organization they belong to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List&lt;FeatureFeature&gt;**](FeatureFeature.md) | Specific features available to this organization |  [optional]
**organization** | [**OrganizationOrganization**](OrganizationOrganization.md) |  |  [optional]
**role** | [**RoleEnum**](#RoleEnum) | The organization role the user belongs to within this organization |  [optional]



## Enum: RoleEnum

Name | Value
---- | -----
UNKNOWN | &quot;UNKNOWN&quot;
OWNER | &quot;OWNER&quot;
ADMIN | &quot;ADMIN&quot;



