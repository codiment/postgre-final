import * as sdk from './generated-sdk'

const organizationApi = new sdk.OrganizationApi(new sdk.Configuration({
    basePath: 'http://localhost:3000',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmOGI1OWFmLWU5ZGMtNGE5NC1iZDI3LWJiMDM5NTEzMTcyZiIsImVtYWlsIjoiamFuZS5kb2VAZW1haWwuY29tIiwidHlwZSI6IlVTRVIiLCJpYXQiOjE3NDc1MTkwMjEsImV4cCI6MTc0NzYwNTQyMX0.yQT3Ilg8L2KKMa2UTpk-RNZW3KB0DftxP10Eb37oWac'
}))

organizationApi.organizationControllerCreate({
    name: 'Organization created from SDK'
}).then((res) => {
    console.log(res.data)
})