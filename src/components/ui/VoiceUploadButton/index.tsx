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
      <span>+ 음성 업로드</span>
      <input
        type='file'
        accept='audio/*'
        ref={inputRef}
        onChange={onUploadHandler}
      />
    </S.Button>
  )
}
