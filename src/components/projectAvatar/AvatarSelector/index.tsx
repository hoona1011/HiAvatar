import React from 'react'
import * as S from './style'
import { MainSlider, TootipMessage } from 'components'
import { TooltipIcon } from 'components/Icons'

export const AvatarSelector = () => {
  return (
    <S.Container>
      <S.Top>
        <S.Tooltip>
          <TooltipIcon width='1.6rem' height='1.6rem' />
          <div className='message'>
            <TootipMessage
              content='원하시는 아바타의 얼굴을 선택할 수 있어요.'
              width='22.9rem'
            />
          </div>
        </S.Tooltip>
        <S.Title>아바타를 선택해주세요</S.Title>
      </S.Top>
      <MainSlider renderType='AvatarSelector' />
    </S.Container>
  )
}
