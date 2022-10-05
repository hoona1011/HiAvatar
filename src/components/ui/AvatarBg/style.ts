import styled from 'styled-components'
import type { StyledComponentsProps } from 'index'

export const Container = styled.div`
  height: 18rem;
  padding: 1.6rem 2.4rem 0;
  margin: 2.4rem 0 2.4rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.palette.white};

  box-shadow: 0 0 20rem 0 ${({ theme }) => theme.palette.boxShadow};
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 1.9rem;
`

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.8rem;
`

export const BgContainer = styled.div`
  display: flex;

  width: 74.4rem;
  margin-top: 0.8rem;
`

export const BgInner = styled.div`
  height: 12.2rem;
  margin-right: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`

export const Bg = styled.div<StyledComponentsProps>`
  width: 18rem;
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

export const BgName = styled.div<StyledComponentsProps>`
  height: 1.4rem;
  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.432rem;
  text-align: center;

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};
`
