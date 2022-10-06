// import { usePostTextsMutation } from 'api/optionApi'
import {
  VoicePreForwardIcon,
  VoicePrePlayIcon,
  VoicePreRewindIcon,
  VoicePauseIcon,
  VoiceStopIcon
} from 'components/Icons'
import React, { useEffect, useRef, useState } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useAppDispatch, useAppSelector } from 'store'
import { textsCreatePreview } from 'store/slices/optionSlice'
import * as S from './style'

// 타입스크립트 추가 예정

export const VoicePreviewPlayer = React.memo(() => {
  // const ProjectTextEditOption = useAppSelector((state) => state.option)
  // const dispatch = useAppDispatch()
  // const player = useRef()
  // const [textsPreviewUrl, setTextsPreviewUrl] = useState()
  // const [postTexts] = usePostTextsMutation()
  // useEffect(() => {
  //   if (Object.keys(ProjectTextEditOption.textsPreviewData).length) {
  //     postTexts(ProjectTextEditOption.textsPreviewData)
  //       .unwrap()
  //       .then((data) => {
  //         setTextsPreviewUrl(data.data.totalAudioUrl)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }, [ProjectTextEditOption.textsPreviewData])
  // const play = () => {
  //   const {
  //     userSelectedList,
  //     textPreviewData,
  //     textsPreviewData,
  //     audioFile,
  //     ...textData
  //   } = ProjectTextEditOption
  //   dispatch(textsCreatePreview(textData))
  // }
  // const stop = () => {
  //   const audio = player.current.audio.current
  //   audio.pause()
  //   audio.currentTime = 0
  // }
  // return (
  //   <>
  //     <S.Title>합친 음성을 미리 들을 수 있어요</S.Title>
  //     <S.CustomStyle>
  //       <AudioPlayer
  //         customIcons={{
  //           play: (
  //             <div onClick={play}>
  //               <VoicePrePlayIcon width='25' height='24' />
  //             </div>
  //           ),
  //           previous: <VoicePreRewindIcon width='25' height='24' />,
  //           next: <VoicePreForwardIcon width='25' height='24' />,
  //           pause: <VoicePauseIcon width='25' height='24' />
  //         }}
  //         customAdditionalControls={[
  //           <S.StopBtn onClick={stop}>
  //             <VoiceStopIcon width='25' height='24' />
  //           </S.StopBtn>
  //         ]}
  //         customVolumeControls={[]}
  //         showJumpControls={false}
  //         showSkipControls={false}
  //         layout='horizontal-reverse'
  //         src={textsPreviewUrl}
  //         ref={player}
  //       />
  //     </S.CustomStyle>
  //   </>
  // )
})
