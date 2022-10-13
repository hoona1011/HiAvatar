import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserInfo {
  id: string
  password: string
  newPassword?: string
}
//회원가입
export const postUserInfo = async (info: UserInfo) => {
  const res = await axios.post('https://hiavatar.minoflower.com/sign-up', info)
  return res
}
//아이디중복체크
export const idCheck = async (id: string) => {
  const response = await axios.post(
    'https://hiavatar.minoflower.com/sign-up/check/duplicate-id',
    { id: id }
  )
  console.log(id)
  console.log(response)
  return response
}
//로그인
export const login = async (info: UserInfo) => {
  // const res = await axios.post('https://hiavatar.minoflower.com/login', info)
  // console.log('userApi.ts: ', res.data.data.accessToken)
  // const token = res.data.data.accessToken
  const response = await axios.post(
    'https://hiavatar.minoflower.com/login',
    info
  )
  return response
}
//간편로그인
// export const kakao = async () => {
//   await axios.post('https://hiavatar.minoflower.com/oauth2/authorization/kakao')
// }
export const google = async () => {}
//비밀번호 변경
//비밀번호 변경
export const edit = async (info: UserInfo['newPassword']) => {
  const response = await axios.post(
    'https://hiavatart.minoflower.com/my-page',
    'newPassword'
  )
  return response
}

const url = import.meta.env.VITE_SERVICE_URL

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (info) => ({
        url: '/login',
        method: 'POST',
        body: info
      }),
      transformResponse: (response: any) => {
        localStorage.setItem('accessToken', response.data['accessToken'])
        return response
      }
    })
  })
})

export const { useSignInMutation } = userApi

// signUp: builder.mutation({
//   query: ({ info: UserInfo }) => ({
//     url: '/sign-up',
//     method: 'POST'
//   }),
//   transformResponse: (response) => {
//     return response
//   }
// }),

// postUserCheck: builder.mutation({
//   query: ({ info }) => ({
//     url: '/sign-up/check/duplicate-id',
//     method: 'POST'
//   }),
//   transformResponse: (response) => {
//     return response
//   }
// }),

// googleLogin: builder.mutation({
//   query: ({}) => ({
//     url: '/oauth2/authorization/google',
//     method: 'POST'
//   }),
//   transformResponse: (response) => {
//     return response
//   }
// }),

// kakaoLogin: builder.mutation({
//   query: ({}) => ({
//     url: '/oauth2/authorization/kakao',
//     method: 'POST'
//   }),
//   transformResponse: (response) => {
//     return response
//   }
// })
