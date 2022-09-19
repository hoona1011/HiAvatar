import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  endpoints: (builder) => ({
    postOptions: builder.mutation({
      query: ({ data }) => ({
        url: '/test-api', // 명세서: `/projects/${data에서 뽑아서 사용할 projectId}/save`
        method: 'POST',
        body: data
      }),
      transformResponse: (response) => {
        return response
      }
    })
  })
})

export const { usePostOptionsMutation } = optionApi
