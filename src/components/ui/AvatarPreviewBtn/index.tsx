import React, { useEffect } from 'react'
import * as S from './style'
import { PreviewReload } from 'components/Icons'
import { useAvatar, changeIsAllSelected } from 'store/slices/avatarSlice'

export const AvatarPreviewBtn = () => {
  const { selectedValue, isAllSelected, dispatch } = useAvatar()

  //**selectedValue의 값이 모두 있는 경우에만 버튼을 활성화 시키기 위한 함수*/
  const disabledHandler = () => {
    dispatch(changeIsAllSelected({}))
  }
  useEffect(() => {
    selectedValue && disabledHandler()
  }, [selectedValue])

  return (
    <S.Container disabled={!isAllSelected}>
      <S.Inner>
        <S.Content>미리보기 재설정</S.Content>
        <PreviewReload width='1.3rem' height='1.2rem' />
      </S.Inner>
    </S.Container>
  )
}
