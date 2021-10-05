#!/usr/bin/env bash
#   List StackHawk Organization Application Names
#   This script will report the application names (or ids) that belong to the orgnization
#   define a $SH_API_KEY with a API Key from StackHawk https://app.stackhawk.com/settings/apikeys
#   specify the $SH_ORG_ID with the organizationId that will receive the applications
#   see https://docs.stackhawk.com/apidocs.html for more details

function listOrgAppDetails {
    token="$1"
    orgId="$2"
    appIds=$(curl --request GET \
     --url "https://api.stackhawk.com/api/v1/app/$orgId/list?ignoreEnvs=true&pageSize=50" \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $token" \
     | jq -r '.applications[] | .name, .applicationId')
    echo "$appIds"
}

if [ -z "$SH_API_KEY" ]
then
echo "\$SH_API_KEY is not yet set"
exit 1
fi

if [ -z "$SH_ORG_ID" ]
then
echo "\$SH_ORG_ID is not yet set"
exit 1
fi

echo "This will list out the application names and ids that belong to the $SH_ORG_ID organization"
echo "press any key to continue..."
read -r

token=$(curl -f --request GET \
    --url https://api.stackhawk.com/api/v1/auth/login \
    --header 'Accept: application/json' \
    --header "X-ApiKey: $SH_API_KEY" \
    | jq -r '.token')
if [ -z "$token" ]
then
echo "API Token could not be requested"
exit 1
else
echo "$token"
fi

appNames=$( listOrgAppDetails $token $SH_ORG_ID )

for appName in $appNames
do
echo $appName
done

