import React from 'react'
import * as S from './style'
import { changeSelectedValue } from 'store/slices/avatarSlice'
import { TooltipIcon } from 'components/Icons'
import { useAvatar } from 'hooks'
import { TootipMessage } from 'components'
import type { SelectedValue } from 'avatar'
export const AvatarBg = () => {
  const { backgroundList, selectedValue, dispatch } = useAvatar()

  const selectedValueHandler = (selectedValue: SelectedValue) => {
    dispatch(changeSelectedValue(selectedValue))
  }

  return (
    <S.Container>
      <S.Top>
        <S.Tooltip>
          <TooltipIcon width='1.6rem' height='1.6rem' />
          <div className='message'>
            <TootipMessage
              content='영상의 배경을 선택할 수 있어요.'
              width='17.4rem'
            />
          </div>
        </S.Tooltip>
        <S.Title>배경을 선택해주세요</S.Title>
      </S.Top>
      <S.BgContainer>
        {backgroundList &&
          backgroundList.map(({ position, thumbnail }, index: number) => {
            return (
              <S.BgInner
                key={position}
                onClick={() => {
                  selectedValueHandler({ bgName: position })
                }}
              >
                <S.Bg
                  thumbnail={thumbnail}
                  isSelected={selectedValue.bgName === position}
                />
                <S.BgName isSelected={selectedValue.bgName === position}>
                  배경 {index + 1}
                </S.BgName>
              </S.BgInner>
            )
          })}
      </S.BgContainer>
    </S.Container>
  )
}
