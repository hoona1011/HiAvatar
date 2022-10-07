import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useCookies } from 'react-cookie'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
export interface UserInfo {
  id: string
  password: string
}

export const postUserInfo = async (info: UserInfo) => {
  const res = await axios.post('https://hiavatar.minoflower.com/sign-up', info)
}

export const postUserCheck = async (id: string) =>
  await axios.post(
    'https://hiavatar.minoflower.com/sign-up/check/duplicate-id',
    id
  )

export const login = async (info: UserInfo) => {
  const res = await axios.post('https://hiavatar.minoflower.com/login', info)

  console.log('asdasdasdsadasdasd: ', res.data.data.accessToken)

  const token = res.data.data.accessToken

  cookies.set('accessToken', token, { path: '/' })
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
