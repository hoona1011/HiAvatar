import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { CreateProjectButtonIcon, LogoIcon } from '../../Icons'
import {
  Link,
  Outlet,
  Route,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import { ProjectTitleEdit } from 'components/ui/ProjectTitleEdit'
import { useCookies } from 'react-cookie'
import test from 'node:test'
import { ProjectSaveButton } from 'components/ui/ProjectSaveButton'
// import { CreateProjectButtonHeader } from 'components'

export const TheHeader = (propFunction: any) => {
  const location = useLocation()
  const { projectId } = useParams()
  const [cookies, removeCookie] = useCookies()
  const token = cookies.accessToken
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  const rightRenderBtnList = () => {
    const signOut = () => {
      removeCookie('accessToken', undefined)
      console.log('test')
      navigate(0)
      // window.localStorage.removeItem('rt')
    }
    const userHoverHandler = () => {
      setIsVisible(!isVisible)
    }

    switch (location.pathname) {
      case '/':
        return (
          <nav>
            {token === undefined || token === 'undefined' ? (
              <S.AuthBtnGroup>
                <Link to='sign-in'>
                  <S.BtnForm>로그인</S.BtnForm>
                </Link>
                <Link to='sign-up'>
                  <S.BtnForm>회원가입</S.BtnForm>
                </Link>
              </S.AuthBtnGroup>
            ) : (
              <div>
                <S.BtnForm onClick={signOut}>로그아웃</S.BtnForm>
              </div>
            )}
          </nav>
        )
      case '/sign-up':
      case '/my-page':
      case '/project-history':
        return (
          <>
            <S.BtnFormV1 onClick={propFunction.addProject}>
              <div className='icon'>
                <CreateProjectButtonIcon width='1.2rem' height='1.8rem' />
              </div>
              프로젝트
            </S.BtnFormV1>
            <S.MyInfo>
              <button
                className='my-info-button'
                onClick={propFunction.myInfo}
                onMouseOver={userHoverHandler}
                onMouseOut={userHoverHandler}
              >
                내정보
              </button>

              <div className='my-info-con'>
                <div className='my-info-con__inner'>
                  <div className='title'>userId</div>
                  <Link to='my-page'>
                    <div className='my-account-btn'>내 계정 관리</div>
                  </Link>
                  <div className='sign-out-btn' onClick={signOut}>
                    로그아웃
                  </div>
                  <div className='service'>
                    <Link to='#'>
                      <span>개인정보처리방침</span>
                    </Link>
                    <Link to='#'>
                      <span>서비스 약관</span>
                    </Link>
                  </div>
                </div>
              </div>
            </S.MyInfo>
          </>
        )
      case `/project-text-edit/${projectId}`:
      case `/project-avatar/${projectId}`:
        return (
          <>
            <ProjectSaveButton requestFunc={() => console.log('요청 완료')} />
          </>
        )
    }
  }

  const leftRenderBtnList = () => {
    switch (location.pathname) {
      case `/project-text-edit/${projectId}`:
      case `/project-avatar/${projectId}`:
        return <ProjectTitleEdit />
    }
  }

  return (
    <S.Wrapper>
      <S.Inner>
        <div>
          <Link to='/'>
            <LogoIcon width='6rem' height='1.5rem' />
          </Link>
        </div>
        <div>{leftRenderBtnList()}</div>
        <div>{rightRenderBtnList()}</div>
      </S.Inner>
      <Outlet />
    </S.Wrapper>
  )
}
