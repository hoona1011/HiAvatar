import React from 'react'
import * as S from './style'
import { changeSelectedValue, useAvatar } from 'store/slices/avatarSlice'
import { TooltipIcon } from 'components/Icons'
import type { SelectedValue } from 'index'
export const AvatarBg = () => {
  const { backgroundList, selectedValue, dispatch } = useAvatar()

  const selectedValueHandler = (selectedValue: SelectedValue) => {
    dispatch(changeSelectedValue({ diff: selectedValue }))
  }

  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>배경을 선택해주세요</S.Title>
      </S.Top>
      <S.BgContainer>
        {backgroundList &&
          backgroundList.map((background, index: number) => {
            return (
              <S.BgInner
                key={background.position}
                onClick={() => {
                  selectedValueHandler({ bgName: background.position })
                }}
              >
                <S.Bg
                  isSelected={selectedValue.bgName === background.position}
                />
                <S.BgName
                  isSelected={selectedValue.bgName === background.position}
                >
                  배경 {index + 1}
                </S.BgName>
              </S.BgInner>
            )
          })}
      </S.BgContainer>
    </S.Container>
  )
}
