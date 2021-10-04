import com.stackhawk.api.ApiAuthenticationApi
import com.stackhawk.api.ApplicationsApi
import com.stackhawk.api.UserApi

suspend fun main(args: Array<String>) {
    val baseUrl = "https://api.prod.stackhawk.com"

    val apiAuthenticationApi = ApiAuthenticationApi(baseUrl = baseUrl)
    val jwt = apiAuthenticationApi.login(args[0]).body().token ?: throw RuntimeException("No token")

    val userApi = UserApi(baseUrl = baseUrl)
    userApi.setBearerToken(jwt)

    val userResp = userApi.getUser()
    val user = userResp.body()
    println(user)

    val orgId = user.user!!.external!!.organizations!!.first().organization!!.id ?: ""

    val applicationsApi = ApplicationsApi(baseUrl = baseUrl)
    applicationsApi.setBearerToken(jwt)

    val listResp = applicationsApi.listApplications(orgId, null, null, null, null, null, null, null).body()
    listResp.applications?.forEach {
        println(it)
    }
}
