import React, { useState, useEffect } from 'react'
import * as S from './style'
import { useNavigate } from 'react-router'
import { login, UserInfo } from 'api/userApi'
import { Formik, Form, useFormik } from 'formik'
import * as Yup from 'yup'
import { useCookies, Cookies } from 'react-cookie'
import axios from 'axios'
import { KakaoIcon, GoogleIcon } from 'components/Icons'
import { useDispatch } from 'react-redux'

interface SignInForm {
  id: string
  password: string
}

export const SignIn = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()

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
      password: Yup.string().required('입력한 비밀번호가 없습니다')
    }),
    onSubmit: async (values) => {
      console.log('로그인버튼클릭')
      try {
        const response = await login({
          id: formik.values.id,
          password: formik.values.password
        })
        if (response.data.code !== 200) {
          alert('아이디가 존재하지않거나 비밀번호가 올바르지않습니다.')
          return
        }
        console.log('응답값', response)
        const access_token = response.data.data.accessToken

        console.log('액세스 토큰', access_token)
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${access_token}`
        cookies.set('accessToken', access_token)
        localStorage.setItem('rt', response.data.data.refreshToken)
        // console.log('values: ', values)
        // console.log('response:', response)
        console.log(cookies)
        if (response.data.code === 200) {
          navigate('/project-history')
        }

        // axios
        // .post('https://hiavatar.minoflower.com/login', {id:formik.values.id, password:formik.values.password})
        // .then((res)=> {
        //   console.log(res.data)
        //   console.log('aT: ', res.data.data.accessToken)
        //   const token = localStorage.setItem("token", res.data.data.accessToken)
        //   console.log(token)
        //   setCookie('id', res.data.data.accessToken)
        // })
      } catch (e) {
        console.log(e)
      }
    }
  })

  const navigateSignUp = () => {
    navigate('/sign-up')
  }

  const k = async () => {
    console.log('카카오로그인')
    // window.location.href = 'https://hiavatar.minoflower.com/oauth2/authorization/kakao';
    window.open('https://hiavatar.minoflower.com/oauth2/authorization/kakao')
  }
  const g = async () => {
    console.log('google_login')

    window.location.href =
      'https://hiavatar.minoflower.com/oauth2/authorization/google'
    // console.log('구글간편로그인');
    let codeValue = new URL(window.location.href).searchParams.get('state')
    // console.log(codeValue);
    const dispatch = useDispatch()
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.TopText>로그인</S.TopText>
        <form onSubmit={formik.handleSubmit}>
          <S.EmailWrapper>
            <S.MidText htmlFor='id'>아이디</S.MidText>
            <S.EmailInput type='text' id='id' {...formik.getFieldProps('id')} />
            {formik.touched.id && formik.errors.id ? (
              <S.ErrorSpan>{formik.errors.id}</S.ErrorSpan>
            ) : null}
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
          <S.SignInBtn
            type='submit'
            // disabled={(!(formik.values.id &&formik.values.password))? alert('입력확인부탁') :'null'}
          >
            로그인
          </S.SignInBtn>
        </form>
        <S.SimpleText>간편로그인하기</S.SimpleText>
        <S.SimpleWrapper>
          <div onClick={k}>
            <KakaoIcon width='44' height='44' />
          </div>
          <div onClick={g}>
            <GoogleIcon width='44' height='44' />
          </div>
        </S.SimpleWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
