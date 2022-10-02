import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Projects } from 'index'

const url = import.meta.env.VITE_SERVICE_URL

export const historyApi = createApi({
  reducerPath: 'historyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
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
