/*
 * StackHawk Public API
 *  ![STACKHAWK](https://images.ctfassets.net/nx13ojx82pll/1zPawvEGOq9zKX8PuVw0kB/e4a31b30fdb07b7e424277d7824d2ffe/stackhawk-long.png) # StackHawk API  This is the OpenAPI specification for the [StackHawk](https://www.stackhawk.com) REST API, affectionately known as _Falcon_ 🦅 #Kaakaww!  StackHawk is an application security testing tool built for developers. With powerful automation and integration capabilities, StackHawk gives engineers the ability to find and fix security vulnerabilities on every merge.  ## Getting Started  To make requests to the StackHawk API, you will first need an **API Key** from the StackHawk platform. That will be used to request an **access token**, which is used to authorize requests made to the StackHawk API.  Use of the StackHawk API will require a [StackHawk account](https://auth.stackhawk.com) and an organization with sufficient permissions.  From the StackHawk platform, under [Settings > API Keys](https://app.stackhawk.com/settings/apikeys) create a new API Key. These secrets are long-lived, so store this value in a secure fashion.  ### Authorization  Requests made to the StackHawk API server are authorized following the [OAuth2.0 protocol](https://oauth.net/2/)  To get an access token, make a request to `GET /api/v1/auth/login` and provide the user apikey through the `X-ApiKey` request header. This route will then return an access token that can authenticate further API requests. This token can then be used to authenticate subsequent requests, using the `authorization: Bearer` header.  For more information, see the **Api Authentication** section.  ### Rate Limiting  Api calls are ratelimited, with at most 180 requests per minute.  ## StackHawk Api Standards  ### Client Errors  API Calls that fail due to client input will return 4xx status code.  #### `401 Unauthorized` The server doesn't think you should be making this request.  This error is intentionally vague for security purposes, but any of the following could cause it:  - no authorization was provided - authorization has expired - authorization is insufficient for the requested resource  #### `404 Not Found`  The route or resource does not exist.  #### `400 Bad Request` The server could not process this request, although it may have tried. The JSON reponse body `message` will include details on what input was invalid.  ### Pagination and Sorting  Listing API routes will return resources in a paginated fashion. Paginated requests follow a pattern of taking the following optional path parameters:  * `pageToken`: a string incrementing count of pages in the pagination, starting from '0' * `pageSize`: the number of elements to request in the page, defaults to 10 * `sortField`: sorts the listed resource by an approved field, defaults to sorting by resource name * `sortDir`: either 'asc' or 'desc', defaults ascending  The responseBody of these API routes will additionally include two fields:  * `nextPageToken`: a string indicating the next `pageToken` to pass in for the next page of results with this request * `totalCount`: the total number of resources the query can paginate through  ## Questions? Comments? Concerns? Kaa-Kaww?  We are always making advancements and improvements to our Platform, Scanner and the StackHawk API. If you encounter an issue you cannot solve with this documentation, please reach out to [support@stackhawk.com](mailto:support@stackhawk.com) with your questions, and we’ll help you troubleshoot any issues and get you soaring with StackHawk.   
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: hello@stackhawk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.FeatureFeature;
import org.openapitools.client.model.OrganizationOrganization;

/**
 * Represents the relationship between a User and an Organization they belong to.
 */
@ApiModel(description = "Represents the relationship between a User and an Organization they belong to.")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-10-04T12:28:48.411362-06:00[America/Denver]")
public class UserUserOrganization {
  public static final String SERIALIZED_NAME_FEATURES = "features";
  @SerializedName(SERIALIZED_NAME_FEATURES)
  private List<FeatureFeature> features = null;

  public static final String SERIALIZED_NAME_ORGANIZATION = "organization";
  @SerializedName(SERIALIZED_NAME_ORGANIZATION)
  private OrganizationOrganization organization;

  /**
   * The organization role the user belongs to within this organization
   */
  @JsonAdapter(RoleEnum.Adapter.class)
  public enum RoleEnum {
    UNKNOWN("UNKNOWN"),
    
    OWNER("OWNER"),
    
    ADMIN("ADMIN");

    private String value;

    RoleEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RoleEnum fromValue(String value) {
      for (RoleEnum b : RoleEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<RoleEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RoleEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RoleEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return RoleEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private RoleEnum role;


  public UserUserOrganization features(List<FeatureFeature> features) {
    
    this.features = features;
    return this;
  }

  public UserUserOrganization addFeaturesItem(FeatureFeature featuresItem) {
    if (this.features == null) {
      this.features = new ArrayList<FeatureFeature>();
    }
    this.features.add(featuresItem);
    return this;
  }

   /**
   * Specific features available to this organization
   * @return features
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Specific features available to this organization")

  public List<FeatureFeature> getFeatures() {
    return features;
  }


  public void setFeatures(List<FeatureFeature> features) {
    this.features = features;
  }


  public UserUserOrganization organization(OrganizationOrganization organization) {
    
    this.organization = organization;
    return this;
  }

   /**
   * Get organization
   * @return organization
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OrganizationOrganization getOrganization() {
    return organization;
  }


  public void setOrganization(OrganizationOrganization organization) {
    this.organization = organization;
  }


  public UserUserOrganization role(RoleEnum role) {
    
    this.role = role;
    return this;
  }

   /**
   * The organization role the user belongs to within this organization
   * @return role
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The organization role the user belongs to within this organization")

  public RoleEnum getRole() {
    return role;
  }


  public void setRole(RoleEnum role) {
    this.role = role;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserUserOrganization userUserOrganization = (UserUserOrganization) o;
    return Objects.equals(this.features, userUserOrganization.features) &&
        Objects.equals(this.organization, userUserOrganization.organization) &&
        Objects.equals(this.role, userUserOrganization.role);
  }

  @Override
  public int hashCode() {
    return Objects.hash(features, organization, role);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserUserOrganization {\n");
    sb.append("    features: ").append(toIndentedString(features)).append("\n");
    sb.append("    organization: ").append(toIndentedString(organization)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
