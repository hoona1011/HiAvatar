import React from 'react'
import * as S from './style'
import { PlayIcon, StopIcon, CloseIcon } from '../../Icons'

export const TextPlayer = () => {
  return (
    <S.Wrapper>
      <S.PlayerBar>
        <li>
          <S.ItemNum>01</S.ItemNum>
          <S.TextEdit placeholder='영상기술과 인공지능기술의 융합을 추구하며,' />
        </li>
        <li>
          <div>
            <PlayIcon width='32' height='32' />
          </div>
          <div>
            <StopIcon width='32' height='32' />
            <S.CloseButton>
              <CloseIcon width='24' height='24' />
            </S.CloseButton>
          </div>
        </li>
      </S.PlayerBar>
      <S.SetUpBtnList>
        <li>
          <button>+ 문장 추가</button>
        </li>
        <li>
          <button>간격설정</button>
        </li>
      </S.SetUpBtnList>
    </S.Wrapper>
  )
}
