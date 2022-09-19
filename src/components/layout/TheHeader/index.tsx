import React from 'react'
import * as S from './style'
import { EditIcon } from '../../Icons'
import { useLocation } from 'react-router-dom'

export const TheHeader = (propFunction: any) => {
  const location = useLocation()
  console.log(location.pathname)

  const rightRenderBtnList = () => {
    switch (location.pathname) {
      case '/':
      case '/sign-up':
      case '/my-page':
      case '/project-history':
        return (
          <>
            <S.BtnForm onClick={propFunction.addProject}>+프로젝트</S.BtnForm>
            <S.BtnForm onClick={propFunction.myInfo}>내정보</S.BtnForm>
          </>
        )
      case '/project-text-edit':
      case '/project-avatar':
        return (
          <S.BtnForm onClick={propFunction.saveProject}>
            프로젝트 저장
          </S.BtnForm>
        )
    }
  }

  const leftRenderBtnList = () => {
    switch (location.pathname) {
      case '/project-text-edit':
      case '/project-avatar':
        return (
          <>
            <S.ProjectName>프로젝트명</S.ProjectName>
            <S.EditBtn>
              <EditIcon width='17' height='17' />
            </S.EditBtn>
          </>
        )
    }
  }

  return (
    <S.Wrapper>
      <S.Inner>
        <div>로고</div>
        <div>{leftRenderBtnList()}</div>
        <div>{rightRenderBtnList()}</div>
      </S.Inner>
    </S.Wrapper>
  )
}
