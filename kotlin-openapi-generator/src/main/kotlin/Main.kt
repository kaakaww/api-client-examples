import com.stackhawk.api.ApiAuthenticationApi
import com.stackhawk.api.ApplicationsApi
import com.stackhawk.api.UserApi

suspend fun main(args: Array<String>) {
    println("KaaKaww!")
    val apiAuthenticationApi = ApiAuthenticationApi()
    val jwt = apiAuthenticationApi.login(args[0]).body().token ?: throw RuntimeException("No token")
    println("JWT: $jwt")

    val userApi = UserApi()
    userApi.setBearerToken(jwt)

    val userResp = userApi.getUser()
    val user = userResp.body()
    println("User ID: ${user.user?.external?.id}")

    val orgId = user.user!!.external!!.organizations!!.first().organization!!.id ?: ""
    println("Org ID: $orgId")

    val applicationsApi = ApplicationsApi()
    applicationsApi.setBearerToken(jwt)

    val listResp = applicationsApi.listApplications(orgId, null, null, null, null, null, null, null).body()
    listResp.applications?.forEach {
        println("New Application ID: ${it.applicationId}")
    }
}
