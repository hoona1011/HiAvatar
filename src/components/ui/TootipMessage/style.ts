import styled from 'styled-components'
import type { StyledComponentsProps } from 'index'

export const Container = styled.div<StyledComponentsProps>`
  width: ${({ width }) => width};
  position: absolute;
  padding: 1.2rem;

  top: 4rem;
  left: -1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.palette.blue3};
  box-shadow: 0 1.2rem 1.6rem -0.4rem rgba(16, 24, 40, 0.08),
    0 0.4rem 0.6rem -0.2rem rgba(16, 24, 40, 0.03);
`

export const Content = styled.div`
  color: ${({ theme }) => theme.palette.txt};
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.8rem;
`

export const Point = styled.div`
  position: absolute;
  top: -0.2rem;
  width: 1.2rem;
  height: 1.2rem;
  left: 1rem;

  background-color: ${({ theme }) => theme.palette.blue3};
  transform: matrix(-0.71, -0.71, 0.71, -0.71, 0, 0);
`
