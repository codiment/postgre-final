# CreateUserDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**telephone** | **string** |  | [optional] [default to undefined]
**firstname** | **string** |  | [default to undefined]
**lastname** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [default to undefined]
**type** | **string** |  | [optional] [default to 'USER']

## Example

```typescript
import { CreateUserDto } from './api';

const instance: CreateUserDto = {
    email,
    telephone,
    firstname,
    lastname,
    password,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
