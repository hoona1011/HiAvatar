import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cookies } from 'react-cookie'
const url = import.meta.env.VITE_SERVICE_URL
const cookies = new Cookies()

export const optionApi = createApi({
  reducerPath: 'optionApi',
  tagTypes: ['Text'],
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
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
      invalidatesTags: (result) =>
        result ? [{ type: 'Text', id: 'LIST' }] : [],
      transformResponse: (response) => {
        return response
      }
    }),
    postVoice: builder.mutation({
      query: ({ voiceData, projectId }) => ({
        url: `/projects/${projectId}/audio-file`,
        method: 'POST',
        body: voiceData
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Text', id: 'LIST' }] : [],
      transformResponse: (response) => {
        return response
      }
    }),
    postText: builder.mutation({
      query: (data) => ({
        url: '/projects/save/text',
        method: 'POST',
        body: data
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Text', id: 'LIST' }] : []
    })
  })
})

export const {
  usePostOptionsMutation,
  usePostVoiceMutation,
  usePostTextMutation
} = optionApi
