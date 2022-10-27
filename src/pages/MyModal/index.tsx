import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export const MyModal = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('rt')
    navigate('/')
  }
  const link = () => {
    //약관페이지가 없어 임시 알람창으로 대신합니다.
    alert('약관페이지 준비중')
  }
  const saved = localStorage.getItem('user')

  return (
    <S.Container>
      <S.Wrap>
        <S.IdInfo>{localStorage.userid}</S.IdInfo>
        <S.MyBtn onClick={() => navigate('/my-page')}>내 계정 관리</S.MyBtn>
        <S.LogoutBtn onClick={logout}>로그아웃</S.LogoutBtn>
        <S.LinkWrap>
          <S.Link onClick={link}>개인정보처리방침</S.Link>
          <S.Link onClick={link}>서비스 약관</S.Link>
        </S.LinkWrap>
      </S.Wrap>
    </S.Container>
  )
}
