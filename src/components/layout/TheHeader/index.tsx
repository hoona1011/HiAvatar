import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { EditIcon, LogoIcon } from '../../Icons'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import {
  useCreateProjectMutation,
  useEditProjectMutation,
  useGetHistoryQuery
} from 'api/historyApi'
import { useAvatar } from 'hooks'

export const TheHeader = (propFunction: any) => {
  // const [createProject] = useCreateProjectMutation()
  const { data, isLoading, isError }: any = useGetHistoryQuery()
  const [editProject] = useEditProjectMutation()
  const location = useLocation()
  const { projectId } = useParams()
  const [projectName, setProjectName] = useState()
  const [userTitleInput, setUserTitleInput]: any = useState({ projectName: '' })
  const [isVisible, setIsVisible] = useState(true)
  const span: any = useRef()
  const [width, setWidth] = useState(0)
  const TitleEdit: any = useRef()

  const { selectedValue } = useAvatar()

  useEffect(() => {
    const findProject = data?.projects.find((item: any) => {
      return item.projectId === Number(projectId)
    })
    if (findProject) {
      setProjectName(findProject.projectName)
      setUserTitleInput({ projectName: findProject.projectName })
      // setWidth(findProject.projectName)
      // console.log(width)
    }
  }, [data])

  useEffect(() => {
    if (!isVisible) {
      TitleEdit.current.focus()
      setWidth(span.current?.offsetWidth)
    }
  }, [isVisible, userTitleInput.projectName])

  // console.log('userTitleInput.projectName', userTitleInput.projectName)

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

  const userEditHandeler = () => {
    setIsVisible(!isVisible)
  }

  const userTitleEditHandeler: any = (e: any) => {
    // console.log(e.key)
    const { name, value } = e.target
    setUserTitleInput({ ...userTitleInput, [name]: value })
    if (e.key === 'Enter') {
      requestModifyTitle()
      setIsVisible(!isVisible)
    }
  }

  const userOnBlurHandeler = () => {
    requestModifyTitle()
    setIsVisible(!isVisible)
  }

  const requestModifyTitle = () => {
    let test
    editProject({ userTitleInput, projectId })
      .unwrap()
      .then((data: any) => {
        setProjectName(data.projectName)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const leftRenderBtnList = () => {
    // console.log('projectName', width)
    let test
    // if (userTitleInput.projectName.length) {
    //   test = userTitleInput.projectName.length
    // }

    switch (location.pathname) {
      case `/project-text-edit/${projectId}`:
      case `/project-avatar/${projectId}`:
        return (
          <S.TitleEdit>
            {isVisible ? (
              <S.ProjectName>{projectName}</S.ProjectName>
            ) : (
              <>
                <span
                  className='hide'
                  ref={span}
                  style={{ fontSize: '1.6rem' }}
                >
                  {userTitleInput.projectName}
                </span>
                <input
                  name='projectName'
                  defaultValue={projectName}
                  onChange={userTitleEditHandeler}
                  onKeyPress={userTitleEditHandeler}
                  onBlur={userOnBlurHandeler}
                  style={{ width }}
                  ref={TitleEdit}
                />
              </>
            )}
            <S.EditBtn onClick={userEditHandeler}>
              <EditIcon width='17' height='17' />
            </S.EditBtn>
          </S.TitleEdit>
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
