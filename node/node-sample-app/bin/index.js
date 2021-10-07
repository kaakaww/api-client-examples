const { ApiAuthenticationApi, UserApi, ApiClient, ApplicationsApi, ApplicationNewApplicationRequest} = require("stack_hawk_public_api");

let apiKey = process.argv[2];

console.log( "Hello!" );

let authApi = new ApiAuthenticationApi();

authApi.login(apiKey, (error, data, response) => {
    if (error) {
        console.log("Error getting Token : " + error);
    } else {
        console.log("Token : " + data.token);

        let BearerAuth = ApiClient.instance.authentications['BearerAuth'];
        BearerAuth.accessToken = data.token

        let userApi = new UserApi();

        userApi.getUser((error, data, response) => {
            let orgId = data.user.external.organizations[0].organization.id
            console.log("Org ID " + orgId)

            let req = new ApplicationNewApplicationRequest();
            req.name = "New App";
            req.dataType = "FIN";
            req.env = "New Env";
            req.riskLevel = "CRITICAL";
            req.organizationId = orgId;

            let appApi = new ApplicationsApi();
            appApi.createApplication(orgId, req, (error, data, response) => {
                if (error) {
                    console.log("Error creating app : " + error);
                } else {
                    console.log("New app id " + data.applicationId);
                }
            })
        })
    }
});
