import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modalprops } from 'index'
import { changeOption } from 'store/slices/optionSlice'
import * as S from './style'
export const ProjectTextModal = ({
  setModal,
  modalText,
  setModalText
}: Modalprops) => {
  // 전역상태의 texts를 수정하면 모달 뒤편으로 텍스트가 보일 수 있으므로 useState로 임시저장소 구성
  const textRef = useRef(null)
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    const { value } = e.target
    setModalText!(value)
  }
  const onCompleteHandler = () => {
    const { name, value } = textRef.current

    dispatch(changeOption({ name, value }))
    setModal(false)
  }
  const onCloseHandler = () => {
    setModal(false)
  }
  return (
    <S.Container>
      <S.TextArea
        placeholder='텍스트를 입력해주세요'
        name='texts'
        ref={textRef}
        value={modalText}
        onChange={onChangeHandler}
      />
      <button onClick={onCompleteHandler}>완료|</button>
      <button onClick={onCloseHandler}>닫기</button>
    </S.Container>
  )
}
