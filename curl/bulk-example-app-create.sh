#!/usr/bin/env bash
#   StackHawk Bulk Application Creation Script
#   This script will create multiple applications and environments in the specified StackHawk organization
#   Usage: copy and modify this script to suit your needs. Change the appNames and envNames to match your needs
#   specify the $SH_ORG_ID with the organizationId that will receive the applications. If not provided it will use the first organization.
#   define a $SH_API_KEY with a API Key from StackHawk https://app.stackhawk.com/settings/apikeys
#   see https://docs.stackhawk.com/apidocs.html for more details

APP_NAMES=("LEMON" "CHERRY" "APPLE" "BERRY" "COCONUT")
ENV_NAMES=("dev" "test" "prod")

function createApp {
    token="$1"
    orgId="$2"
    appName="$3"
    envName="$4"

    appId=$(curl --request POST \
     --url https://api.stackhawk.com/api/v1/org/"$orgId"/app \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $token" \
     --header 'Content-Type: application/json' \
     --data "
{
     \"dataType\": \"NONE\",
     \"riskLevel\": \"MEDIUM\",
     \"env\": \"$envName\",
     \"name\": \"$appName\",
     \"organizationId\": \"$orgId\"
}
" \
    | jq -r .applicationId)

    echo "$appId"
}

function createAppEnv {
    token="$1"
    orgId="$2"
    appId="$3"
    envName="$4"

    envId=$(curl --request POST \
     --url https://api.stackhawk.com/api/v1/app/"$appId"/env \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $token" \
     --header 'Content-Type: application/json' \
     --data "
{
     \"env\": \"$envName\",
     \"applicationId\": \"$appId\"
}
" \
    | jq -r .envId)

    echo "$envId"
}

if [ -z "$SH_API_KEY" ]
then
echo "\$SH_API_KEY is not yet set"
exit 1
fi

echo "This will generate ${#APP_NAMES[@]} applications with ${#ENV_NAMES[@]} environments each in the $SH_ORG_ID organization"
echo "press any key to continue..."
read -r

if [ -z "$SH_ORG_ID" ]
then
orgId=$(curl --request GET \
    --url https://api.stackhawk.com/api/v1/user \
    --header 'Accept: application/json' \
    --header "Authorization: Bearer $token" \
    | jq -r '.user.external.organizations[0].organization.id')
else
orgId="$SH_ORG_ID"
fi

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

for a in "${!APP_NAMES[@]}"; do
    appName=${APP_NAMES[$a]}
    appId=""
    for e in "${!ENV_NAMES[@]}"; do
        envName=${ENV_NAMES[$e]}
        if [[ $envName == "${ENV_NAMES[0]}" ]]; then
            appId=$(createApp "$token" "$orgId" "$appName" "$envName")
            echo -e "created app $appId - $appName $envName"
        else
            envId=$(createAppEnv "$token" "$orgId" "$appId" "$envName")
            echo -e "created env $envId - $appName $envName"
        fi
    done
done
