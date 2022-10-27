import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { EditIcon } from 'components/Icons'
import { useEditProjectMutation, useGetHistoryQuery } from 'api/historyApi'
import { useParams } from 'react-router-dom'

export const ProjectTitleEdit = () => {
  const { data }: any = useGetHistoryQuery()
  const [editProject] = useEditProjectMutation()
  const { projectId } = useParams()

  const [projectName, setProjectName] = useState()
  const [userTitleInput, setUserTitleInput]: any = useState({ projectName: '' })
  const [isVisible, setIsVisible] = useState(true)
  const span: any = useRef()
  const [width, setWidth] = useState(0)
  const TitleEdit: any = useRef()

  useEffect(() => {
    const findProject = data?.projects.find((item: any) => {
      return item.projectId === Number(projectId)
    })
    if (findProject) {
      setProjectName(findProject.projectName)
      setUserTitleInput({ projectName: findProject.projectName })
    }
  }, [data])

  useEffect(() => {
    if (!isVisible) {
      TitleEdit.current.focus()
      setWidth(span.current?.offsetWidth)
    }
  }, [isVisible, userTitleInput.projectName])

  const userEditHandeler = () => {
    setIsVisible(!isVisible)
  }

  const userTitleEditHandeler: any = (e: any) => {
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
    editProject({ userTitleInput, projectId })
      .unwrap()
      .then((data: any) => {
        setProjectName(data.projectName)
      })
      .catch((error) => {
        alert(error)
      })

    editProject({ userTitleInput, projectId })
      .unwrap()
      .then((data: any) => {
        setProjectName(data.projectName)
      })
      .catch((error) => {
        alert(error)
      })
  }
  return (
    <div>
      <S.TitleEdit>
        {isVisible ? (
          <S.ProjectName>{projectName}</S.ProjectName>
        ) : (
          <>
            <span className='hide' ref={span} style={{ fontSize: '1.6rem' }}>
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
          <EditIcon width='12' height='12' fillColor='#4C7EFF' />
        </S.EditBtn>
      </S.TitleEdit>
    </div>
  )
}
