import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL

export const avatarApi = createApi({
  reducerPath: 'avatarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  endpoints: (builder) => ({
    getAvatar: builder.query({
      query: () => ({
        url: 'avatar',
        method: 'GET'
      }),
      transformResponse: (responseData) => {
        return responseData[0]['data']
      }
    })
  })
})

export const { useGetAvatarQuery } = avatarApi
