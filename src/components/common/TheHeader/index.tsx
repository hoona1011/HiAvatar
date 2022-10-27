import React, { useState } from 'react'
import * as S from './style'
import { CreateProjectButtonIcon, LogoIcon } from 'components/Icons'
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import {
  ProjectTitleEdit,
  ProjectSaveButton,
  ProjectAvatarSaveButton
} from 'components'

export const TheHeader = (propFunction: any) => {
  const location = useLocation()
  const { projectId } = useParams()
  const token = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  const rightRenderBtnList = () => {
    const signOut = () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userid')
      navigate('/')
      navigate(0)
    }
    const userHoverHandler = () => {
      setIsVisible(!isVisible)
    }

    switch (location.pathname) {
      case '/':
        return (
          <nav>
            {!token || token === 'undefined' ? (
              <S.AuthBtnGroup>
                <Link to='/sign-in'>
                  <S.BtnForm>로그인</S.BtnForm>
                </Link>
                <Link to='/sign-up'>
                  <S.BtnForm>회원가입</S.BtnForm>
                </Link>
              </S.AuthBtnGroup>
            ) : (
              <S.AuthBtnGroup>
                <S.BtnFormV1
                  onClick={() => {
                    navigate('/project-history')
                  }}
                >
                  <div className='icon'>
                    <CreateProjectButtonIcon width='1.2rem' height='1.8rem' />
                  </div>
                  히스토리
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
                      <div className='title'>{localStorage.userid}</div>
                      <Link to='/my-page'>
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
              </S.AuthBtnGroup>
            )}
          </nav>
        )
      case '/sign-up':
        return (
          <nav>
            {
              <S.AuthBtnGroup>
                <Link to='/sign-in'>
                  <S.BtnForm>로그인</S.BtnForm>
                </Link>
              </S.AuthBtnGroup>
            }
          </nav>
        )
      case '/sign-in':
        return (
          <nav>
            {
              <S.AuthBtnGroup>
                <Link to='/sign-up'>
                  <S.BtnForm>회원가입</S.BtnForm>
                </Link>
              </S.AuthBtnGroup>
            }
          </nav>
        )
      case '/my-page':
      case '/project-history':
        return (
          <>
            <S.BtnFormV1
              onClick={() => {
                navigate('/project-history')
              }}
            >
              <div className='icon'>
                <CreateProjectButtonIcon width='1.2rem' height='1.8rem' />
              </div>
              히스토리
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
                  <div className='title'>{localStorage.userid}</div>
                  <Link to='/my-page'>
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
      case `/project-avatar/${projectId}`:
        return (
          <>
            <ProjectAvatarSaveButton />
          </>
        )
      case `/project-text-edit/${projectId}`:
        return (
          <>
            <ProjectSaveButton />
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
