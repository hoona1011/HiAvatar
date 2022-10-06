import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5IiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTA2NzQyMn0.89xXrTPIAvaV-JxEPb74jOnh1y7uN1PdIF8Xjeac3QAbxe-RUVl0KtFS10Rzkeusm-sfD2hKnMT5cVFFaZqv4w'
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: (builder) => ({
    postTexts: builder.mutation({
      query: (data) => ({
        url: '/projects/3/save', // 명세서: `/projects/${data에서 뽑아서 사용할 projectId}/save`
        method: 'POST',
        body: data
      }),
      transformResponse: (response) => {
        return response
      }
    }),
    postText: builder.mutation({
      query: (data) => ({
        url: '/projects/save/text',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { usePostTextsMutation, usePostTextMutation } = optionApi
