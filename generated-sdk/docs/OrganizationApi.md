# OrganizationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**organizationControllerCreate**](#organizationcontrollercreate) | **POST** /organization | |

# **organizationControllerCreate**
> OrganizationDto organizationControllerCreate(createOrganizationDto)


### Example

```typescript
import {
    OrganizationApi,
    Configuration,
    CreateOrganizationDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let createOrganizationDto: CreateOrganizationDto; //

const { status, data } = await apiInstance.organizationControllerCreate(
    createOrganizationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrganizationDto** | **CreateOrganizationDto**|  | |


### Return type

**OrganizationDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

