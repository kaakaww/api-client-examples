package com.stackahwk.examples;

import java.util.UUID;
import org.openapitools.client.ApiClient;
import org.openapitools.client.api.ApiAuthenticationApi;
import org.openapitools.client.api.ApplicationsApi;
import org.openapitools.client.api.UserApi;
import org.openapitools.client.model.ApplicationApplication;
import org.openapitools.client.model.ApplicationNewApplicationRequest;
import org.openapitools.client.model.UserJWT;
import org.openapitools.client.model.UserUserResponse;

public class App
{
    public static void main( String[] args ) throws Exception
    {
        System.out.println( "KaaKaww!" );
        ApiClient apiAuthClient = new ApiClient();

        ApiAuthenticationApi authApi = new ApiAuthenticationApi( apiAuthClient );
        UserJWT token = authApi.login( args[0] );
        System.out.println( "JWT : " + token.getToken() );

        ApiClient apiClient = new ApiClient();
        apiClient.setBearerToken(token.getToken());

        UserApi userApi = new UserApi( apiClient );
        UserUserResponse userResponse = userApi.getUser();
        System.out.println( "User ID: " + userResponse.getUser().getExternal().getId() );

        String orgId = userResponse.getUser().getExternal().getOrganizations().get(0).getOrganization().getId();
        System.out.println( "Organization ID: " + orgId);

        ApplicationNewApplicationRequest newAppReq = new ApplicationNewApplicationRequest();
        newAppReq.setName( "New Application" );
        newAppReq.setEnv( "New Env" );
        newAppReq.setDataType( ApplicationNewApplicationRequest.DataTypeEnum.FIN );
        newAppReq.setRiskLevel( ApplicationNewApplicationRequest.RiskLevelEnum.CRITICAL );
        newAppReq.setOrganizationId(orgId);

        ApplicationsApi applicationsApi = new ApplicationsApi( apiClient );
        ApplicationApplication app = applicationsApi.createApplication(
                UUID.fromString( orgId ),
                newAppReq
        );

        System.out.println( "New Application ID: " + app.getApplicationId() );

        apiClient.getHttpClient().dispatcher().executorService().shutdownNow();
        apiAuthClient.getHttpClient().dispatcher().executorService().shutdownNow();

        apiClient.getHttpClient().connectionPool().evictAll();
        apiAuthClient.getHttpClient().connectionPool().evictAll();
    }
}
