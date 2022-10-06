import React from 'react'
import * as S from './style'
import { EditIcon, LogoIcon } from '../../Icons'
import { Outlet, useLocation, useParams } from 'react-router-dom'

export const TheHeader = (propFunction: any) => {
  const location = useLocation()
  const { projectId } = useParams()

  console.log(location.pathname)
  // console.log(projectId)

  const rightRenderBtnList = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <S.BtnForm>회원가입</S.BtnForm>
          </>
        )
      case '/sign-up':
      case '/my-page':
      case '/project-history':
        return (
          <>
            <S.BtnForm onClick={propFunction.addProject}>+프로젝트</S.BtnForm>
            <S.BtnForm onClick={propFunction.myInfo}>내정보</S.BtnForm>
          </>
        )
      case `/project-text-edit/${projectId}`:
      case `/project-avatar/${projectId}`:
        return (
          <S.BtnForm onClick={propFunction.saveProject}>
            프로젝트 저장
          </S.BtnForm>
        )
    }
  }

  const leftRenderBtnList = () => {
    switch (location.pathname) {
      case `/project-text-edit/${projectId}`:
      case `/project-avatar/${projectId}`:
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
        <div>
          <a href='/'>
            <LogoIcon width='6rem' height='1.5rem' />
          </a>
        </div>
        <div>{leftRenderBtnList()}</div>
        <div>{rightRenderBtnList()}</div>
      </S.Inner>
      <Outlet />
    </S.Wrapper>
  )
}
