import styled from 'styled-components'

export const Button = styled.button`
  width: 16.4rem;
  height: 5.6rem;
  margin-bottom: 2.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue70};
`

export const Top = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`

export const Content = styled.div`
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.palette.white};
  font-size: 1.5rem;
  font-weight: 500;
`
