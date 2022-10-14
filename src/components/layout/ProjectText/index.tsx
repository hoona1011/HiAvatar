import React from 'react'
import { useAppSelector } from 'store'
import * as S from './style'
import { TootipMessage } from 'components/ui/TootipMessage'
import { TooltipIcon } from 'components/Icons'

export const ProjectText = () => {
  const { splitTextList, userSelectedList } = useAppSelector(
    (state) => state.option
  )

  const render = splitTextList.map((item) => {
    let orginData = item

    const findData: any = userSelectedList.find((item: any) => {
      return orginData.sentenceId === item.sentenceId
    })

    return (
      <div key={item.sentenceId}>
        <S.TextBox findData={findData?.focus}>{item.text}</S.TextBox>
      </div>
    )
  })

  return (
    <S.Wrapper>
      <S.Title>
        <S.Tooltip>
          <TooltipIcon width='1.6rem' height='1.6rem' />
          <div className='message'>
            <TootipMessage
              content='입력하신 전체 텍스트를 확인할 수 있어요.
              문장을 선택하면 좌측 영역에서 바로 수정할 수 있어요.'
              width='27.6rem'
            />
          </div>
        </S.Tooltip>
        <span className='title'>전체 텍스트를 확인해주세요</span>
      </S.Title>
      <S.TextGroup>{render}</S.TextGroup>
    </S.Wrapper>
  )
}
