import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Projects } from 'index'

const url = import.meta.env.VITE_SERVICE_URL
const accessToken = import.meta.env.VITE_TOKEN

export const historyApi = createApi({
  reducerPath: 'historyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    credentials: 'omit',
    prepareHeaders: (headers, { getState }) => {
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
    })
  })
})

export const { useGetHistoryQuery } = historyApi
