import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NDk3NzQ1NH0.HillBNuvF2GNpPdT-mTGYW9xEryK5rCwrz0tHqAdO7jl6dzYa_PAa3kpJTMe9FMnXSr82oXKzhqFef_idlAzXg'
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: (builder) => ({
    postOptions: builder.mutation({
      query: ({ projectData, projectId }) => ({
        url: `/projects/${projectId}/save`,
        method: 'POST',
        body: projectData
      }),
      transformResponse: (response) => {
        console.log('응답값', response)
        return response
      }
    })
  })
})

export const { usePostOptionsMutation } = optionApi
