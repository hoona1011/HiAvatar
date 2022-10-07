import React, { useState } from 'react'
import * as S from './style'
import axios from 'axios'
import { useNavigate } from 'react-router'
// import GoogleLogin from 'react-google-login'
// import { GoogleButton } from './GoogleButton'
// import { KakaoButton } from './KakaoButton'
import { login, UserInfo } from 'api/userApi'
import { Formik, Form, useFormik } from 'formik'
import * as Yup from 'yup'
import { useCookies } from 'react-cookie'

export const SignIn = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const formik = useFormik({
    initialValues: {
      id: '',
      password: ''
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .matches(
          /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          '올바른 이메일 형식을 입력해주세요'
        )
        .required('입력한 이메일이 없습니다.'),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,
          '소문자,대문자,숫자,특수문자를 포함하여 최소8자로 입력해주세요.'
        )
        .required('입력한 비밀번호가 없습니다')
    }),
    onSubmit: async (value) => {
      console.log(value)
      console.log('로그인')
      try {
        const response = await login(value)
        const [cookies, setCookie, removeCookie] = useCookies()
        setCookie('accessToken', (response as any).data['accessToken'])
        setCookie('refreshToken', (response as any).data['refreshToken'])
        alert('로그인성공')
        navigate('/')
      } catch (e) {
        console.log(e)
      }
    }
  })

  const navigateSignUp = () => {
    navigate('/sign-up')
  }

  const test = async (e: any) => {
    e.preventDefault()
    const value = {
      id: 'qkrwlgns@gmail.com',
      password: 'qkrwlgns'
    }
    const res = await login(value)
    // console.log('로그인성공', res)
    navigate('/project-history')
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.TopText>로그인</S.TopText>
        <form onSubmit={test}>
          <S.EmailWrapper>
            <S.MidText htmlFor='id'>아이디</S.MidText>
            <S.EmailInput type='text' id='id' {...formik.getFieldProps('id')} />
          </S.EmailWrapper>
          <S.PwWrapper>
            <S.MidText htmlFor='password'>패스워드</S.MidText>
            <S.PwInput
              type='password'
              id='password'
              {...formik.getFieldProps('password')}
            />
          </S.PwWrapper>
          <S.BotText>
            회원이 아니신가요?{' '}
            <S.SignUpSpan onClick={navigateSignUp}>가입하기</S.SignUpSpan>
          </S.BotText>
          <S.SignInBtn type='submit'>로그인</S.SignInBtn>
        </form>
        {/* <S.SimpleText>간편로그인하기</S.SimpleText> */}
        <S.SimpleWrapper>
          {/* <KakaoButton />
          <GoogleButton /> */}
        </S.SimpleWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
