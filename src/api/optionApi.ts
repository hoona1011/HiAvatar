import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cookies } from 'react-cookie'
const url = import.meta.env.VITE_SERVICE_URL
const cookies = new Cookies()

// const token = cookies.get('accessToken')
// console.log('옵션api토큰', token)
export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = cookies.get('accessToken')
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
      transformResponse: (response: any) => {
        // 콘솔로그 삭제시 타입도 같이 삭제
        console.log('getOption 실행', response.data)
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
