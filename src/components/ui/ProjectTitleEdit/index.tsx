import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { EditIcon } from '../../Icons'
import { useEditProjectMutation, useGetHistoryQuery } from 'api/historyApi'
import { useParams } from 'react-router-dom'
// import { useHistory } from 'store/slices/historySlice'

export const ProjectTitleEdit = () => {
  const { data, isLoading, isError }: any = useGetHistoryQuery()
  const [editProject] = useEditProjectMutation()
  const { projectId } = useParams()
  const [projectName, setProjectName] = useState()
  const [userTitleInput, setUserTitleInput]: any = useState({ projectName: '' })
  const [isVisible, setIsVisible] = useState(true)
  const span: any = useRef()
  const [width, setWidth] = useState(0)
  const TitleEdit: any = useRef()

  // const { projects } = useHistory()
  // console.log(projects)

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
          <EditIcon width='17' height='17' />
        </S.EditBtn>
      </S.TitleEdit>
    </div>
  )
}
