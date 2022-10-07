import React, { useState, FC } from 'react'
import * as S from './style'
import { PwErrorIcon, PwCheckIcon } from 'components/Icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, useFormik } from 'formik'
import * as Yup from 'yup'
import { postUserInfo, postUserCheck } from 'api/userApi'

interface SignUpForm {
  id: string
  password: string
  confirmPassword: string
}

export const SignUp: FC = () => {
  const navigate = useNavigate()
  //이메일 중복검사
  const [EmailCheck, setEmailCheck] = useState<boolean>(false)
  //이메일 중복검사 에러메세지
  const [EmailMsg, setEmailMsg] = useState<string>('')
  //중복확인 안할시 버튼 비활성화
  const [disabledBtn, setDisabledBtn] = useState(false)

  const formik = useFormik({
    //initialValues, onSubmit, yup유효성검사
    initialValues: {
      id: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .matches(
          /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          '올바른 이메일 형식을 입력해주세요'
        )
        .required('입력한 이메일이 없습니다.'),
      password: Yup.string(),
      // .matches(
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,
      //   '소문자,대문자,숫자,특수문자를 포함하여 최소8자로 입력해주세요.'
      // )
      // .required('입력한 비밀번호가 없습니다'),
      confirmPassword: Yup.string()
        //비밀번호 일치여부체크
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
        .required('입력한 비밀번호가 없습니다.')
    }),
    onSubmit: async (values) => {
      alert('test')
      console.log(values)
      try {
        const response = await postUserInfo({
          id: values.id,
          password: values.password
        })
        alert('회원가입완료')
        navigate('/sign-in')
      } catch (error) {
        console.log(error)
        alert('회원가입실패')
      }
    }
  })

  const EmailCheckHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault()
    console.log('이메일 중복검사')
    try {
      const response = await postUserCheck(id)
      setEmailCheck(true)
      setEmailMsg('')
    } catch (e) {
      console.log(e)
      setEmailMsg('중복된 이메일 주소가 있습니다.')
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.TopText>회원가입</S.TopText>
        <form onSubmit={formik.handleSubmit}>
          <S.EmailWrapper>
            <S.MidText htmlFor='id'>이메일</S.MidText>
            <S.EmailInput
              id='id'
              type='text'
              placeholder='이메일 주소를 입력해 주세요.'
              //이메일 중복검사 후 인풋 변경을 불가능하도록 disabled추가
              disabled={EmailCheck}
              {...formik.getFieldProps('id')}
            />
            {/* 이메일 중복, 에러메세지 */}
            {EmailMsg}
            {formik.touched.id && formik.errors.id ? (
              <S.ErrorSpan>{formik.errors.id}</S.ErrorSpan>
            ) : null}
            <S.IdCheckBtn
              disabled={disabledBtn}
              onClick={(e) => EmailCheckHandler(e, formik.values.id)}
            >
              중복 확인
            </S.IdCheckBtn>
          </S.EmailWrapper>
          <S.PwWrapper>
            <S.MidText htmlFor='password'>비밀번호</S.MidText>
            <S.PwInput
              id='password'
              type='password'
              placeholder='비밀번호를 입력해 주세요.'
              {...formik.getFieldProps('password')}
            />
            {/* 비밀번호 에러메세지 */}
            {formik.touched.password && formik.errors.password ? (
              <S.ErrorSpan>
                {formik.errors.password} <PwErrorIcon width='18' height='18' />
              </S.ErrorSpan>
            ) : // <PwCheckIcon width='18' height='18' />
            null}
          </S.PwWrapper>
          <S.PwWrapper>
            <S.MidText htmlFor='confirmPassword'>비밀번호 확인</S.MidText>
            <S.PwInput
              id='confirmPassword'
              type='password'
              placeholder='비밀번호를 확인해 주세요.'
              {...formik.getFieldProps('confirmPassword')}
            />
            {/* 비밀번호확인 에러메세지 */}
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <S.ErrorSpan>
                {formik.errors.confirmPassword}
                <PwErrorIcon width='18' height='18' />
              </S.ErrorSpan>
            ) : // <PwCheckIcon width='18' height='18' />
            null}
          </S.PwWrapper>
          <S.SignUpBtn
            // disabled={
            //   !(
            //     EmailCheck &&
            //     formik.values.id &&
            //     formik.values.password &&
            //     formik.values.confirmPassword
            //   )
            // }
            type='submit'
          >
            회원가입
          </S.SignUpBtn>
        </form>
      </S.Wrapper>
    </S.Container>
  )
}
