import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NjUxMTYyMzV9.DQYNFIr1dSOOsN7JFiGuEmrnDPQfU7tABDsx80FaDjbX5hj3Tr71CGnMIJxhyy3M-6awN9GrGBmVJ4Kx_8lfew'
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
