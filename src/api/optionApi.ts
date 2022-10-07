import { Cookies } from 'react-cookie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = import.meta.env.VITE_SERVICE_URL
const cookies = new Cookies()
//임시로 쿠키에 넣기 위해서 작성했습니다. 추후 삭제 예정
const tempToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTIwMjMxMX0.snE2B65owNTYREODn6UXt3KHF6sUlgpiNsQPdWJJyYgdSVfuJ7b4WqIo0iDtoV2Udwx7I1yJyrxj1d3t-iubpg'
cookies.set('accessToken', tempToken, { path: '/' })

const token = cookies.get('accessToken')
console.log('token2', token)
export const optionApi = createApi({
  reducerPath: 'optionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
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
