import React from 'react'
import * as S from './style'
import { EditIcon, LogoIcon } from '../../Icons'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSaveAvatarMutation } from 'api/avatarApi'
import { useAvatar } from 'store/slices/avatarSlice'

export const TheHeader = (propFunction: any) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { projectId } = useParams()
  // const { selectedValue } = useAvatar()
  // const [saveAvatar] = useSaveAvatarMutation()

  console.log(location.pathname)
  // console.log(projectId)

  const saveProject = () => {
    switch (location.pathname) {
      case `/project-text-edit/${projectId}`: {
        // 텍스트 저장 로직을 넣으시면 됩니다
        console.log('텍스트 저장')
        break
      }
      case `/project-avatar/${projectId}`: {
        console.log('아바타 저장')
        // saveAvatar({ projectId, selectedValue })
        navigate('/project-history')
        break
      }
    }
  }

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
        // 헤더를 전역화시켰기 때문에, prop로 함수를 내려주는게 불가능 합니다 따라서 로직을 수정했습니다
        return <S.BtnForm onClick={saveProject}>프로젝트 임시 저장</S.BtnForm>
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
