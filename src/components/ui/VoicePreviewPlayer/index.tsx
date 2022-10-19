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
import test from 'node:test'

// 타입스크립트 추가 예정

export const VoicePreviewPlayer = () => {
  const audioElem: any = useRef(null)
  const ProjectTextEditOption: any = useAppSelector((state) => state.option)
  const dispatch = useAppDispatch()
  const [projectData, setProjectData] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioDuration, setAudioDuration] = useState(0)
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)
  const player: any = useRef()
  const [textsPreviewUrl, setTextsPreviewUrl]: any = useState()
  // const textsPreviewUrl = useRef()
  const [postOptions] = usePostOptionsMutation()
  const { projectId } = useParams()
  const renderCount: any = useRef(0)

  const [isLoading, setIsLoading] = useState(false)

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
    renderCount.current = 0
    // console.log(ProjectTextEditOption.textsPreviewData.texts)
  }, [ProjectTextEditOption.textsPreviewData.texts])

  // console.log(textsPreviewUrl)

  useEffect(() => {
    // console.log(renderCount.current)
    console.log('오디오 플레이', audioElem.current)
    if (isPlaying) {
      textsPreviewUrl && audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
    audioElem.current.onended = () => {
      audioElem.current.pause()
      audioElem.current.currentTime = 0
      setIsPlaying(false)
    }
  }, [textsPreviewUrl, isPlaying])

  const playPause = () => {
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
    setIsPlaying(!isPlaying)
  }

  const stop = () => {
    audioElem.current.pause()
    audioElem.current.currentTime = 0
    setIsPlaying(false)
  }

  const onPlaying = () => {
    setAudioDuration(parseInt(audioElem.current.duration))
    setAudioCurrentTime(parseInt(audioElem.current.currentTime))
    // console.log(audioDuration)
    // console.log(audioCurrentTime)
  }

  const userCurrentTimeHandeler = (e: any) => {
    audioElem.current.currentTime = e.target.value
  }

  // console.log('확인', textsPreviewUrl)

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
        <a className='download' href='#' download={textsPreviewUrl}>
          전체 음성 다운로드
        </a>
      </S.TitleGroup>
      <audio src={textsPreviewUrl} ref={audioElem} onTimeUpdate={onPlaying} />
      <div onClick={playPause}>
        {isPlaying ? (
          <VoicePauseIcon width='25' height='24' fillColor='#336CFF' />
        ) : (
          <VoicePrePlayIcon width='25' height='24' fillColor='#336CFF' />
        )}
      </div>
      <div onClick={stop}>
        <VoiceStopIcon width='25' height='24' fillColor='#336CFF' />
      </div>
      <input
        type='range'
        min={0}
        max={audioDuration}
        value={audioCurrentTime}
        onChange={userCurrentTimeHandeler}
      />
      {/* <S.CustomStyle>
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
      </S.CustomStyle> */}
    </>
  )
}
