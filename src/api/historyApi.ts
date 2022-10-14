import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  Projects,
  Project,
  ProjectInfo,
  HistoryData,
  Video
} from 'history'

const url = import.meta.env.VITE_SERVICE_URL

export const historyApi = createApi({
  reducerPath: 'historyApi',
  tagTypes: ['History'],
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
    getHistory: builder.query<HistoryData[], void>({
      query: () => ({
        url: 'projects',
        method: 'GET'
      }),
      providesTags: [{ type: 'History', id: 'LIST' }],
      transformResponse: (responseData: Projects) => {
        return responseData['data']
      }
    }),
    createProject: builder.mutation<ProjectInfo, void>({
      query: () => ({
        url: 'projects',
        method: 'POST'
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'History', id: 'LIST' }] : [],
      transformResponse: (responseData: Project) => {
        return responseData['data']
      }
    }),
    createVideo: builder.mutation({
      query: ({ projectId, selectedValue }) => ({
        url: `projects/${projectId}/avatar`,
        method: 'POST',
        body: selectedValue
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'History', id: 'LIST' }] : [],
      transformResponse: (responseData: Video) => {
        return responseData['data']
      }
    }),
    editProject: builder.mutation({
      query: ({ userTitleInput, projectId }) => ({
        url: `/projects/${projectId}`,
        method: 'PATCH',
        body: userTitleInput
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'History', id: 'LIST' }] : [],
      transformResponse: (responseData: Project) => {
        console.log('응답값', responseData)
        return responseData['data']
      }
    })
  })
})

export const {
  useGetHistoryQuery,
  useCreateProjectMutation,
  useEditProjectMutation,
  useCreateVideoMutation
} = historyApi
