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

export const ProjectTextEdit = () => {
  const dispatch = useDispatch()
  const { projectId } = useParams()
  const { data: optionData } = useGetOptionQuery(projectId)

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
