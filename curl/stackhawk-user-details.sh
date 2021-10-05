#!/usr/bin/env bash
#   Get StackHawk User Details
#   This script will report the details of the authorized StackHawk user, and organizations they are members of
#   define a $SH_API_KEY with a API Key from StackHawk https://app.stackhawk.com/settings/apikeys
#   see https://docs.stackhawk.com/apidocs.html for more details

function getUserDetails {
    token="$1"
    userDetails=$(curl --request GET \
     --url "https://api.stackhawk.com/api/v1/user" \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $token")
    echo "$userDetails"
}

if [ -z "$SH_API_KEY" ]
then
echo "\$SH_API_KEY is not yet set"
exit 1
fi

echo "This will report the StackHawk user details"
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

userDetails=$( getUserDetails $token )
provider=$(echo $userDetails | jq -r '.user.provider.slug' )
fullName=$(echo $userDetails | jq -r '.user.external.fullName' )
email=$(echo $userDetails | jq -r '.user.external.email' )
echo "$fullName ($email) - login: $provider"
echo " Org Id                                 Role    Org Name"
echo $userDetails | jq -r '.user.external.organizations[] | [.organization.id, .role, .organization.name] | @csv'
