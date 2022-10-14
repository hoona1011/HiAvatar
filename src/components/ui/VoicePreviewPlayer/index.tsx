import { usePostOptionsMutation } from 'api/optionApi'
import {
  VoicePreForwardIcon,
  VoicePrePlayIcon,
  VoicePreRewindIcon,
  VoicePauseIcon,
  VoiceStopIcon,
  TooltipIcon
} from 'components/Icons'
import React, { useEffect, useRef, useState } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { textsCreatePreview } from 'store/slices/optionSlice'
import { TootipMessage } from 'components/ui/TootipMessage'
import * as S from './style'

// 타입스크립트 추가 예정

export const VoicePreviewPlayer = () => {
  const ProjectTextEditOption = useAppSelector((state) => state.option)
  const { textsPreviewData: previewData }: any = ProjectTextEditOption
  const dispatch = useAppDispatch()
  const [projectData, setProjectData] = useState()
  const player: any = useRef()
  const [textsPreviewUrl, setTextsPreviewUrl] = useState()
  // const textsPreviewUrl = useRef()
  const [postOptions] = usePostOptionsMutation()
  const { projectId } = useParams()

  useEffect(() => {
    const projectData = ProjectTextEditOption.textsPreviewData

    if (Object.keys(ProjectTextEditOption.textsPreviewData).length) {
      postOptions({ projectData, projectId })
        .unwrap()
        .then((data: any) => {
          setTextsPreviewUrl(data.data.totalAudioUrl)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [ProjectTextEditOption.textsPreviewData])

  const play = () => {
    const {
      userSelectedList,
      textPreviewData,
      textsPreviewData,
      audioFile,
      dummyData,
      totalAudioUrl,
      ...textData
    }: any = ProjectTextEditOption
    dispatch(textsCreatePreview(textData))
  }

  const stop = () => {
    const audio = player.current.audio.current
    audio.pause()
    audio.currentTime = 0
  }

  const test = () => {
    console.log(textsPreviewUrl)
  }

  return (
    <>
      <S.TitleGroup>
        <div className='title'>
          <S.Tooltip>
            <TooltipIcon width='1.6rem' height='1.6rem' />
            <div className='message'>
              <TootipMessage
                content='전체 스크립트를 미리 듣고 다운로드 할 수 있어요.'
                width='max-content;'
              />
            </div>
          </S.Tooltip>
          <span className='title'>합친 음성을 미리 들을 수 있어요</span>
        </div>
        <a
          className='download'
          href='#'
          onClick={test}
          download={textsPreviewUrl}
        >
          전체 음성 다운로드
        </a>
      </S.TitleGroup>
      <S.CustomStyle>
        <AudioPlayer
          customIcons={{
            play: (
              <div onClick={play}>
                <VoicePrePlayIcon width='25' height='24' fillColor='#336CFF' />
              </div>
            ),
            previous: (
              <VoicePreRewindIcon width='25' height='24' fillColor='#336CFF' />
            ),
            next: (
              <VoicePreForwardIcon width='25' height='24' fillColor='#336CFF' />
            ),
            pause: <VoicePauseIcon width='25' height='24' fillColor='#336CFF' />
          }}
          customAdditionalControls={[
            <S.StopBtn onClick={stop}>
              <VoiceStopIcon width='25' height='24' fillColor='#336CFF' />
            </S.StopBtn>
          ]}
          customVolumeControls={[]}
          showJumpControls={false}
          showSkipControls={false}
          layout='horizontal-reverse'
          src={textsPreviewUrl}
          ref={player}
        />
      </S.CustomStyle>
    </>
  )
}
