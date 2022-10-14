import axios from 'axios'
import {
  createApi,
  fetchBaseQuery,
  skipToken
} from '@reduxjs/toolkit/query/react'

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

const url = import.meta.env.VITE_SERVICE_URL
//로그인
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
        const mat = localStorage.accessToken
        axios.defaults.headers.common['Authorization'] = `Bearer ${mat}`
        return response
      }
    }),
    edit: builder.mutation({
      query: (info) => ({
        url: '/my-page',
        method: 'POST',
        body: info.newPassword
      }),
      transformResponse: (response: any) => {
        console.log('editapi', response)
        return response
      }
    })
  })
})
export const { useSignInMutation, useEditMutation } = userApi

//비밀번호 변경
export const edit = async (newPassword: string) => {
  const token = localStorage.getItem('accessToken')
  const mat = localStorage.accessToken
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const response = await axios.post('https://hiavatar.minoflower.com/my-page', {
    newPassword: newPassword
  })
  console.log('api', response)
  return response
}
