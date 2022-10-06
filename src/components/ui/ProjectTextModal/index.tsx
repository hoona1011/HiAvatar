import React, { useRef } from 'react'
import { useAppDispatch } from 'store'
import { Modalprops } from 'index'
import { changeOption } from 'store/slices/optionSlice'
import * as S from './style'
import { ModalCloseIcon, TooltipIcon } from 'components/Icons'

export const ProjectTextModal = ({
  setModal,
  modalText,
  setModalText
}: Modalprops) => {
  // 전역상태의 texts를 수정하면 모달 뒤편으로 텍스트가 보일 수 있으므로 useState로 임시저장소 구성
  const textRef = useRef(null)
  const dispatch = useAppDispatch()

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
  const isEmpty = textRef.current?.value.length === 0

  return (
    <S.Background>
      <S.Modal>
        <S.Top>
          <S.Label>
            <TooltipIcon width='1.6rem' height='1.6rem' />
            <label>텍스트를 입력해주세요</label>
          </S.Label>
          <S.CloseBtn onClick={onCloseHandler}>
            <ModalCloseIcon width='3.2rem' height='3.2rem' />
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
          <S.EnterBtn disabled={isEmpty} onClick={onCompleteHandler}>
            확인
          </S.EnterBtn>
        </S.Bottom>
      </S.Modal>
    </S.Background>
  )
}
