import React, { useState } from 'react'
import * as S from './style'
import { PwCheckIcon, PwErrorIcon } from 'components/Icons'
import { edit } from 'api/userApi'
import { TheFooter, TheHeader } from 'components'

interface MyPageForm {
  password: string
  newPassword: string
  consfirmPassword: string
}

export const MyPage = () => {
  // 비밀번호 확인
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  // 오류메세지
  const [passwordMsg, setPasswordMsg] = useState<string>('')
  const [newPasswordMsg, setNewPasswordMsg] = useState<string>('')
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState<string>('')
  //유효성검사
  const [isPassword, setIsPassword] = useState<boolean>(false)
  const [isNewPassword, setIsNewPassword] = useState<boolean>(false)
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false)
  //에러 아이콘
  const [isIcon, setIsIcon] = useState<boolean>(false)
  //에러 색상
  const [pwColor, setPwColor] = useState({ borderColor: '#88888D' })
  const [newColor, setNewColor] = useState({ borderColor: '#88888D' })
  const [cfPwColor, setCfPwColor] = useState({ borderColor: '#88888D' })

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const passwordCurrent = e.target.value
    if (passwordCurrent === '') {
      setPasswordMsg('입력한 비밀번호가 없습니다.')
      setIsPassword(false)
      setPwColor({ borderColor: '#E47B00' })
    } else {
      setPasswordMsg('')
      setIsPassword(true)
      setPwColor({ borderColor: '#336CFF' })
    }
  }
  const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/
    const newPasswordCurrent = e.target.value
    setNewPassword(newPasswordCurrent)
    if (newPasswordCurrent === '') {
      setNewPasswordMsg('입력한 비밀번호가 없습니다.')
      setIsNewPassword(false)
      setNewColor({ borderColor: '#E47B00' })
    } else if (!pRegex.test(newPasswordCurrent)) {
      setNewPasswordMsg(
        '소문자,대문자,숫자,특수문자를 포함하여 최소8자로 입력해주세요.'
      )
      setIsNewPassword(false)
      setNewColor({ borderColor: '#E47B00' })
    } else if (pRegex.test(newPasswordCurrent)) {
      setNewPasswordMsg('')
      setIsNewPassword(true)
      setNewColor({ borderColor: '#336CFF' })
    }
  }
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const passwordConfirmCurrent = e.target.value
    setConfirmPassword(passwordConfirmCurrent)
    if (passwordConfirmCurrent === '') {
      setConfirmPasswordMsg('입력한 비밀번호가 없습니다.')
      setIsConfirmPassword(false)
      setCfPwColor({ borderColor: '#E47B00' })
    } else if (!(newPassword === passwordConfirmCurrent)) {
      setConfirmPasswordMsg('변경할 비밀번호가 일치하지않습니다.')
      setIsConfirmPassword(false)
      setCfPwColor({ borderColor: '#E47B00' })
    } else if (
      newPassword === passwordConfirmCurrent &&
      isNewPassword == true
    ) {
      setConfirmPasswordMsg('')
      setIsConfirmPassword(true)
      setIsIcon(true)
      setCfPwColor({ borderColor: '#336CFF' })
    }
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    console.log('비밀번호 변경하기')
    const response = await edit({
      newPassword: newPassword
    } as any)
    console.log(response)
  }
  return (
    <div>
      <TheHeader />
      <S.Container>
        <S.Wrapper>
          <form onSubmit={onSubmit as any}>
            <S.TopText>계정관리</S.TopText>
            <S.MyPwWrapper>
              <S.MidText>기존 비밀번호</S.MidText>
              <S.PositionWrap>
                <S.PwInput
                  id='password'
                  type='password'
                  placeholder='기존 비밀번호를 입력해주세요.'
                  onChange={onChangePassword}
                  style={pwColor}
                />
                <S.ErrorSpan>{passwordMsg}</S.ErrorSpan>
              </S.PositionWrap>
            </S.MyPwWrapper>
            <S.ChangePwWrapper>
              <S.MidText>변경할 비밀번호</S.MidText>
              <S.PositionWrap>
                <S.PwInput
                  id='newPassword'
                  type='password'
                  placeholder='변경할 비밀번호를 입력해주세요.'
                  onChange={onChangeNewPassword}
                  style={newColor}
                />
                <S.ErrorSpan>{newPasswordMsg}</S.ErrorSpan>
                {isIcon === true ? (
                  <S.PwCheckBtn>
                    <PwCheckIcon width='18' height='18' />
                  </S.PwCheckBtn>
                ) : (
                  ''
                )}
              </S.PositionWrap>
            </S.ChangePwWrapper>
            <S.NewPwWrapper>
              <S.MidText>새로운 비밀번호 확인</S.MidText>
              <S.PositionWrap>
                <S.PwInput
                  id='confirmPassword'
                  type='password'
                  placeholder='변경할 비밀번호를 확인해주세요.'
                  onChange={onChangeConfirmPassword}
                  style={cfPwColor}
                />
                <S.ErrorSpan>{confirmPasswordMsg}</S.ErrorSpan>
                {isIcon === true ? (
                  <S.PwCheckBtn>
                    <PwCheckIcon width='18' height='18' />
                  </S.PwCheckBtn>
                ) : (
                  ''
                )}
              </S.PositionWrap>
            </S.NewPwWrapper>
            <S.SubmitBtn
              disabled={!(isPassword && isNewPassword && isConfirmPassword)}
              style={{
                backgroundColor:
                  isPassword && isNewPassword && isConfirmPassword
                    ? '#336CFF'
                    : '#D0D0D1'
              }}
              type='submit'
            >
              비밀번호 변경하기
            </S.SubmitBtn>
          </form>
        </S.Wrapper>
      </S.Container>
      <TheFooter />
    </div>
  )
}
