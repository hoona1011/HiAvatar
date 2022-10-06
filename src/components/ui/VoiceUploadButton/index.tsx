import React, { useRef } from 'react'
import { VoiceIcon } from 'components/Icons'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import { usePostVoiceMutation } from 'api/optionApi'

export const VoiceUploadButton = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [postVoice] = usePostVoiceMutation()

  const onClickHandler = () => {
    confirm(
      '음성 업로드 기능은 상세 설정을 할 수 없습니다. 계속하시겠습니까?'
    ) && inputRef.current!.click()
  }
  const onUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioFile = e.target.files![0]
    console.log('업로드된 파일 정보: ', audioFile)
    const fileReader = new FileReader()
    //Temporary code to be modified later

    fileReader.onload = async (e) => {
      const audioBase64 = e.target!.result
      const voiceData = {
        audioFileName: audioFile.name,
        audioFile: (audioBase64 as string).split(',')[1]
      }
      const res = await postVoice({
        voiceData,
        projectId
      })

      console.log('res', res)
      const confirmMessage = `
      파일명: ${audioFile.name}
      아바타 선택 페이지로 넘어갑니다.
    `

      // if() {} 413에러 때문에 보류.. 어떤 에러 없이 무난히 진행되면 navigate 하도록 수정
      alert(confirmMessage)
      navigate(`/project-avatar/${projectId}`)
    }

    fileReader.readAsDataURL(audioFile)
  }

  return (
    <S.Button onClick={onClickHandler}>
      <VoiceIcon width='2.4rem' height='2.4rem' />
      <div className='button-label'>음성파일로 업로드하기</div>
      <input
        type='file'
        accept='audio/*'
        ref={inputRef}
        onChange={onUploadHandler}
      />
    </S.Button>
  )
}
