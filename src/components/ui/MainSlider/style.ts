import styled from 'styled-components'
import type { StyledComponentsProps } from 'index'

export const Container = styled.div`
  position: relative;

  width: 74.4rem;
  .swiper {
    &-container {
      margin: 0.8rem 0 0;
    }
    &-slide {
      height: 12.2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const PrevBtnContainer = styled.button`
  z-index: 2;
  position: absolute;

  top: 3.4rem;
  left: -1.6rem;
`
export const NextBtnContainer = styled.button`
  z-index: 2;
  position: absolute;

  top: 3.4rem;
  right: -1.6rem;
`

export const Content = styled.div<StyledComponentsProps>`
  height: 10rem;

  border-radius: 1rem;
  border: 0.1rem solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.palette.blue50 : theme.palette.blue10};
  background-color: ${({ theme }) => theme.palette.blue10};
  background-image: url(${({ thumbnail }) => thumbnail});
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};
  &:hover {
    opacity: 1;
  }
`

export const Name = styled.div<StyledComponentsProps>`
  height: 1.4rem;
  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.432rem;
  text-align: center;

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};
`
