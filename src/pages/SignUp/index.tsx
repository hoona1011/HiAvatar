import React, { useState, FC } from 'react'
import * as S from './style'
import { PwErrorIcon, PwCheckIcon } from 'components/Icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { postUserInfo, idCheck, UserInfo } from 'api/userApi'
import { TheFooter, TheHeader } from 'components'

interface SignUpForm {
  id: string
  password: string
  confirmPassword: string
}

export const SignUp: FC = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  // 오류메세지
  const [idMsg, setIdMsg] = useState<string>('')
  const [passwordMsg, setPasswordMsg] = useState<string>('')
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState<string>('')
  //유효성검사
  const [isId, setIsId] = useState<boolean>(false)
  const [isPassword, setIsPassword] = useState<boolean>(false)
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false)
  //에러 아이콘
  const [isIcon, setIsIcon] = useState<boolean>(false)
  //에러 색상
  const [idColor, setIdColor] = useState({ borderColor: '#88888D' })
  const [pwColor, setPwColor] = useState({ borderColor: '#88888D' })
  const [cfPwColor, setCfPwColor] = useState({ borderColor: '#88888D' })
  //이메일 중복검사
  const [EmailCheck, setEmailCheck] = useState<boolean>(false)
  //이메일 중복검사 에러메세지
  const [EmailMsg, setEmailMsg] = useState<string>('')
  //중복확인 안할시 버튼 비활성화
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
  const navigate = useNavigate()

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idCurrent = e.target.value
    setId(idCurrent)
    const iRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/

    if (idCurrent === '') {
      setIdMsg('입력한 아이디가 없습니다.')
      setIsId(false)
      setIdColor({ borderColor: '#E47B00' })
    } else if (!iRegex.test(idCurrent)) {
      setIdMsg('소문자,대문자,숫자,특수문자를 포함하여 최소8자로 입력해주세요.')
      setIsId(false)
      setIdColor({ borderColor: '#E47B00' })
    } else if (iRegex.test(idCurrent)) {
      setIdMsg('')
      setIsId(true)
      setIdColor({ borderColor: '#336CFF' })
    }
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)
    const pRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/
    if (passwordCurrent === '') {
      setPasswordMsg('입력한 비밀번호가 없습니다.')
      setIsPassword(false)
      setPwColor({ borderColor: '#E47B00' })
    }
    // else if (!pRegex.test(passwordCurrent)) {
    //   setPasswordMsg(
    //     '소문자,대문자,숫자,특수문자를 포함하여 최소8자로 입력해주세요.'
    //   )
    //   setIsPassword(false)
    //   setPwColor({ borderColor: '#E47B00' })}
    else if (pRegex.test(passwordCurrent)) {
      setPasswordMsg('')
      setIsPassword(true)
      setPwColor({ borderColor: '#336CFF' })
    }
  }

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordConfirmCurrent = e.target.value
    setConfirmPassword(passwordConfirmCurrent)
    if (passwordConfirmCurrent === '') {
      setConfirmPasswordMsg('입력한 비밀번호가 없습니다.')
      setIsConfirmPassword(false)
      setCfPwColor({ borderColor: '#E47B00' })
    } else if (!(password === passwordConfirmCurrent)) {
      setConfirmPasswordMsg('변경할 비밀번호가 일치하지않습니다.')
      setIsConfirmPassword(false)
      setCfPwColor({ borderColor: '#E47B00' })
    } else if (password === passwordConfirmCurrent) {
      setConfirmPasswordMsg('')
      setIsConfirmPassword(true)
      setIsIcon(true)
      setCfPwColor({ borderColor: '#336CFF' })
    }
  }
  const EmailCheckHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault()
    try {
      const response = await idCheck(id)
      console.log(id)
      if (response.data.data.idAvailable == false) {
        setEmailCheck(false)
        setEmailMsg('중복된 이메일 주소가 있습니다.')
        alert('중복된 이메일 주소가 있습니다.')
      } else if (id == '') {
        setEmailCheck(false)
        setEmailMsg('이메일 입력을 입력해주세요.')
        alert('이메일을 입력해주세요.')
      } else if (response.data.data.idAvailable == true) {
        setEmailCheck(true)
        setEmailMsg('사용가능한 이메일입니다.')
        alert('사용가능한 이메일입니다.')
      }
    } catch (e) {
      console.log(e)
    }
  }
  const onSubmit = async (info: UserInfo) => {
    console.log(info)
    try {
      const response = await postUserInfo({
        id: info.id,
        password: info.password
      })
      alert('회원가입완료')
      navigate('/sign-in')
    } catch (error) {
      console.log(error)
      alert('회원가입실패')
    }
  }

  return (
    <div>
      <TheHeader />
      <S.Container>
        <S.Wrapper>
          <S.TopText>회원가입</S.TopText>
          <form onSubmit={() => onSubmit}>
            <S.EmailWrapper>
              <S.MidText htmlFor='id'>이메일</S.MidText>
              <S.PositionWrap>
                <S.EmailInput
                  id='id'
                  type='text'
                  placeholder='이메일 주소를 입력해 주세요.'
                  //이메일 중복검사 후 인풋 변경을 불가능하도록 disabled추가
                  // disabled={EmailCheck}
                  onChange={onChangeId}
                  style={idColor}
                />
                <S.ErrorSpan>{idMsg}</S.ErrorSpan>
                <S.IdCheckBtn
                  disabled={disabledBtn}
                  style={{
                    backgroundColor: EmailCheck ? '#D0D0D1' : '#6691FF'
                  }}
                  onClick={(e) => EmailCheckHandler(e, id)}
                >
                  중복 확인
                </S.IdCheckBtn>
              </S.PositionWrap>
            </S.EmailWrapper>
            <S.PwWrapper>
              <S.MidText htmlFor='password'>비밀번호</S.MidText>
              <S.PositionWrap>
                <S.PwInput
                  id='password'
                  type='password'
                  placeholder='비밀번호를 입력해주세요.'
                  onChange={onChangePassword}
                  style={pwColor}
                />
                <S.ErrorSpan>{passwordMsg}</S.ErrorSpan>
                {isIcon === true ? (
                  <S.PwCheckBtn>
                    <PwCheckIcon width='18' height='18' />
                  </S.PwCheckBtn>
                ) : (
                  // (<S.PwCheckBtn>
                  //   <PwErrorIcon width='18' height='18' />
                  // </S.PwCheckBtn> )
                  ''
                )}
              </S.PositionWrap>
            </S.PwWrapper>
            <S.PwWrapper>
              <S.MidText htmlFor='confirmPassword'>비밀번호 확인</S.MidText>
              <S.PositionWrap>
                <S.PwInput
                  id='confirmPassword'
                  type='password'
                  placeholder='비밀번호를 확인해주세요.'
                  onChange={onChangeConfirmPassword}
                  style={cfPwColor}
                />
                <S.ErrorSpan>{confirmPasswordMsg}</S.ErrorSpan>
                {isIcon === true ? (
                  <S.PwCheckBtn>
                    <PwCheckIcon width='18' height='18' />
                  </S.PwCheckBtn>
                ) : (
                  // (<S.PwCheckBtn>
                  //     <PwErrorIcon width='18' height='18' />
                  //   </S.PwCheckBtn>)
                  ''
                )}

                {/* <S.PwCheckBtn>
              <PwCheckIcon width='18' height='18' />
            </S.PwCheckBtn> */}
              </S.PositionWrap>
            </S.PwWrapper>
            <S.SignUpBtn
              disabled={!(isId && isPassword && isConfirmPassword)}
              style={{
                backgroundColor:
                  isId && isPassword && isConfirmPassword
                    ? '#336CFF'
                    : '#D0D0D1'
              }}
              type='submit'
            >
              회원가입
            </S.SignUpBtn>
          </form>
        </S.Wrapper>
      </S.Container>
      <TheFooter />
    </div>
  )
}
