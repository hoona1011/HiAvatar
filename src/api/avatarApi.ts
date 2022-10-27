import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Avatar, AvatarPreview } from 'avatar'

const url = import.meta.env.VITE_SERVICE_URL

export const avatarApi = createApi({
  reducerPath: 'avatarApi',
  tagTypes: ['Avatar'],
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
    getAvatar: builder.query({
      query: (projectId) => ({
        url: `projects/${projectId}/avatar`,
        method: 'GET'
      }),
      providesTags: [{ type: 'Avatar', id: 'LIST' }],
      transformResponse: (responseData: Avatar) => {
        return responseData['data']
      }
    }),
    saveAvatar: builder.mutation({
      query: ({ projectId, selectedValue }) => ({
        url: `projects/${projectId}/avatar`,
        method: 'PATCH',
        body: selectedValue
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Avatar', id: 'OPTION' }] : []
    }),
    createAvatarPreview: builder.mutation({
      query: (selectedValue) => ({
        url: 'projects/avatar-preview',
        method: 'POST',
        body: selectedValue
      }),
      transformResponse: (responseData: AvatarPreview) => {
        return responseData['data']
      }
    }),
    postOptions: builder.mutation({
      query: ({ projectData, projectId }) => ({
        url: `/projects/${projectId}/save`,
        method: 'POST',
        body: projectData
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Avatar', id: 'OPTION' }] : []
    }),
    getOption: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}/save`,
        method: 'GET'
      }),
      providesTags: [{ type: 'Avatar', id: 'OPTION' }],
      transformResponse: (response: any) => {
        return response.data
      }
    })
  })
})

export const {
  useGetAvatarQuery,
  useSaveAvatarMutation,
  useCreateAvatarPreviewMutation,
  usePostOptionsMutation,
  useGetOptionQuery
} = avatarApi
