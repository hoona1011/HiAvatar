import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTE1MjM5N30.XBYAANA5wILjYOqDkQDHF3eVJ8i-VIrvMQnQgQficyEKWpLlJZwFRxnNzP6F-DvKOxGG3G-3YnxvRjkEfToNlw'
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
        console.log('postOptions 응답값', response)
        return response
      }
    }),
    postVoice: builder.mutation({
      query: ({ voiceData, projectId }) => ({
        url: `/projects/${projectId}/audio-file`,
        method: 'POST',
        body: voiceData
      }),
      transformResponse: (response) => {
        console.log('postVoice 응답값', response)
        return response
      }
    }),
    getOption: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}/save`,
        method: 'GET'
      }),
      transformResponse: (response) => {
        return (response as any).data
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

export const {
  usePostOptionsMutation,
  usePostVoiceMutation,
  useGetOptionQuery,
  usePostTextMutation
} = optionApi
