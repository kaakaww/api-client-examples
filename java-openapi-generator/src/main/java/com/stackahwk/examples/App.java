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
        ApiClient apiAuthClient = new ApiClient();

        ApiAuthenticationApi authApi = new ApiAuthenticationApi( apiAuthClient );
        UserJWT token = authApi.login( args[0] );
        System.out.println( "Hello World!" );
        System.out.println( "Jwt Token: " + token.getToken() );

        ApiClient apiClient = new ApiClient();
        apiClient.setBearerToken(token.getToken());

        UserApi userApi = new UserApi( apiClient );
        UserUserResponse userResponse = userApi.getUser();

        System.out.println( "User " + userResponse.getUser() );

        ApplicationNewApplicationRequest newAppReq = new ApplicationNewApplicationRequest();
        newAppReq.setName( "New Application" );
        newAppReq.setEnv( "New Env" );
        newAppReq.setDataType( ApplicationNewApplicationRequest.DataTypeEnum.FIN );
        newAppReq.setRiskLevel( ApplicationNewApplicationRequest.RiskLevelEnum.CRITICAL );

        ApplicationsApi applicationsApi = new ApplicationsApi( apiClient );
        ApplicationApplication app = applicationsApi.createApplication(
                UUID.fromString( userResponse.getUser().getExternal().getOrganizations().get(0).getOrganization().getId() ),
                newAppReq
        );

        System.out.println( "New Application " + app.getApplicationId() );

        apiClient.getHttpClient().connectionPool().evictAll();
        apiClient.getHttpClient().dispatcher().executorService().shutdown();

        apiAuthClient.getHttpClient().connectionPool().evictAll();
        apiAuthClient.getHttpClient().dispatcher().executorService().shutdown();
    }
}
