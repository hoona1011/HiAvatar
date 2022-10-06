import { useState, useEffect } from 'react'
import { useAppSelector } from 'store'
import {
  TextEnterButton,
  TheHeader,
  ProjectText,
  ProjectRightNav,
  ProjectTextModal,
  VoiceUploadButton,
  TextEditList,
  ProjectNav,
  VoicePreviewPlayer,
  ProjectRightMenu
} from 'components'
import * as S from './style'
import { useGetOptionQuery } from 'api/optionApi'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOption } from 'store/slices/optionSlice'

export const ProjectTextEdit = () => {
  //현재

  // 지훈
  const dispatch = useDispatch()
  const { projectId } = useParams()
  const { data: optionData, isLoading, isError } = useGetOptionQuery(projectId)
  const { dummyData } = useAppSelector((state) => state.option)

  useEffect(() => {
    optionData && dispatch(getOption(optionData))
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
                <ProjectNav />
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
              <VoiceUploadButton />
              <TextEnterButton setModal={setModal} />
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
