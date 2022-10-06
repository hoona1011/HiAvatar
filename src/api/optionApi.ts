import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NjUxMjg4ODl9.fjIYcCMaESAAAkXk3J-BEYc9CP4BLvP_-ikpzrDwHvflt1RFqXLTMMFOvgc-J5VdpGLe6UcbqypaFCv-_IFyPQ'
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
        return response.data
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
