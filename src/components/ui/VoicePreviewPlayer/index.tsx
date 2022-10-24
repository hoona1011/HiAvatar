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
  const audioElem: any = useRef(null)
  const ProjectTextEditOption: any = useAppSelector((state) => state.option)
  const dispatch = useAppDispatch()
  const [projectData, setProjectData] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioDurationTime, setAudioDurationTime] = useState(0)
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)
  const player: any = useRef()
  const [textsPreviewUrl, setTextsPreviewUrl]: any = useState()
  // const textsPreviewUrl = useRef()
  const [postOptions] = usePostOptionsMutation()
  const { projectId } = useParams()

  const changeFlag: any = useRef(false)

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
    changeFlag.current = true
    // console.log(ProjectTextEditOption.textsPreviewData.texts)
  }, [ProjectTextEditOption.textsPreviewData.texts])

  // console.log(textsPreviewUrl)

  useEffect(() => {
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
  }, [textsPreviewUrl])

  useEffect(() => {
    if (!changeFlag.current) {
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
    }
    console.log(changeFlag.current)
  }, [isPlaying])

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
    changeFlag.current = false
  }

  const stop = () => {
    audioElem.current.pause()
    audioElem.current.currentTime = 0
    setIsPlaying(false)
  }

  const onPlaying = () => {
    setAudioDurationTime(parseInt(audioElem.current.duration))
    setAudioCurrentTime(parseInt(audioElem.current.currentTime))
  }

  const userCurrentTimeHandeler = (e: any) => {
    audioElem.current.currentTime = e.target.value
  }

  const RenderTime = (time: any) => {
    let seconds: any = Object.values(time)

    // let min = parseInt((seconds[0] % 3600) / 60)
    let min = Math.floor((seconds[0] % 3600) / 60)
    let sec = seconds[0] % 60
    return (
      <S.RenderTime>{`${min > 9 ? '' : '0'}${min}:${
        sec > 9 ? '' : '0'
      }${sec}`}</S.RenderTime>
    )
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
        <a className='download' href='#' download={textsPreviewUrl}>
          전체 음성 다운로드
        </a>
      </S.TitleGroup>
      <audio src={textsPreviewUrl} ref={audioElem} onTimeUpdate={onPlaying} />
      <S.AudioPlayer>
        <S.Inner>
          <S.PlayPauseButton onClick={playPause}>
            {isPlaying ? (
              <VoicePauseIcon width='25' height='24' fillColor='#336CFF' />
            ) : (
              <VoicePrePlayIcon width='25' height='24' fillColor='#336CFF' />
            )}
          </S.PlayPauseButton>
          <S.PlayPauseButton onClick={stop}>
            <VoiceStopIcon width='25' height='24' fillColor='#336CFF' />
          </S.PlayPauseButton>

          <S.ProgressBarGroup>
            <RenderTime audioDurationTime={audioCurrentTime} />
            {/* {audioCurrentTime} */}
            <S.ProgressBar
              type='range'
              min={0}
              max={audioDurationTime}
              value={audioCurrentTime}
              onChange={userCurrentTimeHandeler}
            />
            <RenderTime audioDurationTime={audioDurationTime} />
          </S.ProgressBarGroup>
        </S.Inner>
      </S.AudioPlayer>
    </>
  )
}
