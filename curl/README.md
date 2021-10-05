# StackHawk API `curl` Scripts

Example bash scripts for interaction with the [StackHawk Public API](https://apidocs.stackhawk.com)

## Usage

Usage: specify your `SH_API_KEY` with your [StackHawk API Key](https://app.stackhawk.com/settings/apikeys) and the `SH_ORG_ID` with the StackHawk organization UUID you want the api scripts to interact with.

## Scripts

* `stackhawk-user-details.sh` - formatted details about the authorized stackhawk user, including organization ids
* `bulk-example-app-create.sh` - script to bulk create stackhawk applications striped with envs
* `organization-application-details.sh` - details about the applications in the specified organization

## Details

These bash scripts use [`curl`](https://curl.se/) to talk to the StackHawk API and use [`jq`](https://stedolan.github.io/jq/) to parse the results. Your system will need both of these libraries on the path to work as intended.
 
see https://docs.stackhawk.com/apidocs.html for more details.
