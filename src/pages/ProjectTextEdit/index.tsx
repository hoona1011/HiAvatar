import { useState, useEffect } from 'react'
import {
  TextEnterButton,
  ProjectText,
  ProjectRightNav,
  ProjectTextModal,
  VoiceUploadButton,
  TextEditList,
  ProjectNav,
  VoicePreviewPlayer,
  ProjectRightMenu,
  TheHeader
} from 'components'
import * as S from './style'
import { useGetOptionQuery } from 'api/avatarApi'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOption } from 'store/slices/optionSlice'
import { useAppSelector } from 'store'

export const ProjectTextEdit = () => {
  //현재

  // 지훈
  const dispatch = useDispatch()
  const { projectId } = useParams()
  const { data: optionData, isLoading, isError } = useGetOptionQuery(projectId)

  // <<<<<<< HEAD
  // const optionState = useAppSelector((state) => state.option) // 일단 리렌더링을 위해 다시 살렸습니다. 추후 리팩토링

  //   // console.log('splitTextList', splitTextList)

  //   useEffect(() => {
  //     optionData && dispatch(getOption(optionData))
  //     // console.log('유즈이펙트 렌더링', optionData)
  // =======

  useEffect(() => {
    console.log('optionData', optionData)
    optionData && dispatch(getOption(optionData))

    // >>>>>>> 4c622e95a7d3331ef28fd92034ecf8506e59a45d
  }, [optionData])

  const [modalText, setModalText] = useState('')
  const [modal, setModal] = useState(false)
  const [renderType, setRenderType] = useState('ProjectText')
  return (
    <>
      <div>
        <TheHeader />
        <S.Wrapper>
          <S.Inner>
            <S.Left>
              <S.StepNavigator>
                <ProjectNav renderType='ProjectTextEdit' />
              </S.StepNavigator>
              <TextEditList />
              <S.VoicePlayer>
                <VoicePreviewPlayer />
              </S.VoicePlayer>
            </S.Left>
            <S.Right>
              <ProjectRightMenu
                renderType={renderType}
                setRenderType={setRenderType}
              />
              <ProjectRightNav renderType={renderType} />
              {/* <VoiceUploadButton />
              <TextEnterButton setModal={setModal} /> */}
              {modal && (
                <ProjectTextModal
                  setModal={setModal}
                  modalText={modalText}
                  setModalText={setModalText}
                />
              )}
            </S.Right>
          </S.Inner>
        </S.Wrapper>
      </div>
    </>
  )
}
