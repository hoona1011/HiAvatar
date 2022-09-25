import { VoiceIcon } from 'components/Icons'
import React, { useRef } from 'react'
import * as S from './style'

export const VoiceUploadButton = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onClickHandler = () => {
    inputRef.current!.click()
  }
  const onUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0])
  }
  return (
    <S.Button onClick={onClickHandler}>
      <VoiceIcon width='2.4rem' height='2.4rem' />
      <div>음성파일로 업로드하기</div>
      <input
        type='file'
        accept='audio/*'
        ref={inputRef}
        onChange={onUploadHandler}
      />
    </S.Button>
  )
}
