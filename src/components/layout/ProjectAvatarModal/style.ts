import styled from 'styled-components'
import type { StyledComponentsProps } from 'index'

export const Container = styled.div`
  z-index: 2;

  display: ${({ isShowModal }: StyledComponentsProps) =>
    isShowModal ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  position: fixed;

  top: 0;
  width: 100%;
  height: 100%;

  // opacity는 상속되므로 rgba로 투명도 설정
  background-color: rgba(0, 0, 0, 0.6);
`

export const Inner = styled.div`
  width: 30.3rem;
  height: 18.984rem;
  padding: 1.8rem 1.8rem 0;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.white};
`

export const Icon = styled.div`
  width: min-content;
  margin-left: auto;
  margin-bottom: 3.9rem;

  text-align: end;
  cursor: pointer;
`

export const Content = styled.div`
  margin-bottom: 4.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.9rem;
`

export const BtnContainer = styled.div`
  text-align: center;
`

export const CancelButton = styled.button`
  width: 9.2rem;
  height: 3.2rem;
  margin-right: 1.6rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue3};

  color: ${({ theme }) => theme.palette.blue70};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
`
export const CompleteButton = styled.button`
  width: 9.2rem;
  height: 3.2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue70};

  color: ${({ theme }) => theme.palette.white};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
`
