import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Projects, Project } from 'index'

const url = import.meta.env.VITE_SERVICE_URL
const accessToken = import.meta.env.VITE_TOKEN

export const historyApi = createApi({
  reducerPath: 'historyApi',
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
    getHistory: builder.query({
      query: () => ({
        url: 'projects',
        method: 'GET'
      }),
      transformResponse: (responseData: Projects) => {
        return responseData['data']
      }
    }),
    createProject: builder.mutation({
      query: () => ({
        url: 'projects',
        method: 'POST'
      }),
      transformResponse: (responseData: Project) => {
        return responseData['data']
      }
    })
  })
})

export const { useGetHistoryQuery, useCreateProjectMutation } = historyApi
