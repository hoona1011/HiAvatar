import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Avatar, AvatarPreview, Video } from 'index'

const url = import.meta.env.VITE_SERVICE_URL
const accessToken = import.meta.env.VITE_TOKEN

export const avatarApi = createApi({
  reducerPath: 'avatarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const accessTokenCookies = accessToken
      if (accessTokenCookies) {
        headers.set('Authorization', `Bearer ${accessTokenCookies}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getAvatar: builder.query({
      query: (id) => ({
        url: `projects/${id}/avatar`,
        method: 'GET'
      }),
      transformResponse: (responseData: Avatar) => {
        return responseData['data']
      }
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
    createVideo: builder.mutation({
      query: ({ projectId, selectedValue }) => ({
        url: `projects/${projectId}/avatar`,
        method: 'POST',
        body: selectedValue
      }),
      transformResponse: (responseData: Video) => {
        return responseData['data']
      }
    })
  })
})

export const {
  useGetAvatarQuery,
  useCreateAvatarPreviewMutation,
  useCreateVideoMutation
} = avatarApi
