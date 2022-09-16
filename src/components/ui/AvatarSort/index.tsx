import React from 'react'
import * as S from './style'

export const AvatarSort = () => {
  return (
    <S.Container>
      <S.Title>분류를 선택해 주세요.</S.Title>
      <S.SortContainer>
        <S.SortTitle>분류 1</S.SortTitle>
        <S.SortInner>
          <S.Sort>
            <S.SortItem />
            <S.ItemName>1-1-1</S.ItemName>
          </S.Sort>
          <S.Sort>
            <S.SortItem />
            <S.ItemName>1-1-2</S.ItemName>
          </S.Sort>
        </S.SortInner>
      </S.SortContainer>
      <S.SortContainer>
        <S.SortTitle>분류 2</S.SortTitle>
        <S.SortInner>
          <S.Sort>
            <S.SortItem />
            <S.ItemName>1-2-1</S.ItemName>
          </S.Sort>
          <S.Sort>
            <S.SortItem />
            <S.ItemName>1-2-2</S.ItemName>
          </S.Sort>
        </S.SortInner>
      </S.SortContainer>
      <S.SortContainer>
        <S.SortTitle>분류 3</S.SortTitle>
        <S.SortInner>
          <S.Sort>
            <S.SortItem />
            <S.ItemName>1-3-1</S.ItemName>
          </S.Sort>
          <S.Sort>
            <S.SortItem />
            <S.ItemName>1-3-2</S.ItemName>
          </S.Sort>
        </S.SortInner>
      </S.SortContainer>
    </S.Container>
  )
}
