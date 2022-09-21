import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modalprops } from 'index'
import { changeOption } from 'store/slices/optionSlice'
import * as S from './style'
import { ModalCloseIcon } from 'components/Icons'

export const ProjectTextModal = ({
  setModal,
  modalText,
  setModalText
}: Modalprops) => {
  // 전역상태의 texts를 수정하면 모달 뒤편으로 텍스트가 보일 수 있으므로 useState로 임시저장소 구성
  const textRef = useRef(null)
  const dispatch = useDispatch()

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setModalText!(value)
  }
  const onCompleteHandler = () => {
    const { name, value } = textRef.current!

    dispatch(changeOption({ name, value }))
    setModal(false)
  }
  const onCloseHandler = () => {
    setModal(false)
  }

  return (
    <S.Background>
      <S.Modal>
        <S.Top>
          <label>텍스트를 입력해주세요</label>
          <S.CloseBtn onClick={onCloseHandler}>
            <ModalCloseIcon width='32' height='32' />
          </S.CloseBtn>
        </S.Top>

        <S.TextArea
          placeholder='텍스트를 입력해주세요'
          name='texts'
          ref={textRef}
          value={modalText}
          onChange={onChangeHandler}
        />
        <S.Bottom>
          <S.CancelBtn onClick={onCloseHandler}>취소</S.CancelBtn>
          <S.EnterBtn onClick={onCompleteHandler}>텍스트 입력</S.EnterBtn>
        </S.Bottom>
      </S.Modal>
    </S.Background>
  )
}
