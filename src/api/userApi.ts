import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useCookies } from 'react-cookie'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
// const [cookies,setCookie, removeCookie] = useCookies()

export interface UserInfo {
  id: string
  password: string
}
//회원가입
export const postUserInfo = async (info: UserInfo) => {
  const res = await axios.post('https://hiavatar.minoflower.com/sign-up', info)
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
  // cookies.set('accessToken', token, { path: '/' })
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
export const edit = async () => {
  const response = await axios.post('https://hiavatart.minoflower.com/my-page')
  return response
}
// const url = import.meta.env.VITE_SERVICE_URL

// export const signUpApi = createApi({
//   reducerPath: 'signUpApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: url
//   }),
//   endpoints: (builder) => ({
//     signUp: builder.mutation({
//       query: ({ info: UserInfo }) => ({
//         url: '/sign-up',
//         method: 'POST'
//       }),
//       transformResponse: (response) => {
//         return response
//       }
//     }),

//     postUserCheck: builder.mutation({
//       query: ({ info }) => ({
//         url: '/sign-up/check/duplicate-id',
//         method: 'POST'
//       }),
//       transformResponse: (response) => {
//         return response
//       }
//     }),

//     signIn: builder.mutation({
//       query: ({}) => ({
//         url: '/login',
//         method: 'POST'
//       }),
//       transformResponse: (response: any) => {
//         const [cookies, setCookie, removeCookie] = useCookies()
//         setCookie('accessToken', response.data['accessToken'])
//       }
//     }),

//     googleLogin: builder.mutation({
//       query: ({}) => ({
//         url: '/oauth2/authorization/google',
//         method: 'POST'
//       }),
//       transformResponse: (response) => {
//         return response
//       }
//     }),

//     kakaoLogin: builder.mutation({
//       query: ({}) => ({
//         url: '/oauth2/authorization/kakao',
//         method: 'POST'
//       }),
//       transformResponse: (response) => {
//         return response
//       }
//     })
//   })
// })

// export const {
//   useSignUpMutation,
//   usePostUserCheckMutation,
//   useSignInMutation,
//   useGoogleLoginMutation,
//   useKakaoLoginMutation
// } = signUpApi
