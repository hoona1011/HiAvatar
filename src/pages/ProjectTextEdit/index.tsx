import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  TextEnterButton,
  TheHeader,
  ProjectText,
  ProjectRightNav,
  ProjectTextModal,
  VoiceUploadButton,
  TextEditList,
  ProjectNav,
  VoicePreviewPlayer
} from 'components'

import * as S from './style'

export const ProjectTextEdit = () => {
  //현재

  // 지훈
  const ProjectTextEditOption = useSelector((state) => state.option)

  console.log(ProjectTextEditOption)

  const [modalText, setModalText] = useState('')
  const [modal, setModal] = useState(false)
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
              <ProjectRightNav renderType='ProjectText' />
              <ProjectRightNav renderType='AvatarVoicePlayersMenu' />
              <ProjectRightNav renderType='VoiceControllerMenu' />
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
