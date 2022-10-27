import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  width: 15.6rem;
  height: 3.2rem;
  margin: 0 auto;

  border-radius: 1rem;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray20 : theme.palette.blue50};
  cursor: ${({ disabled }) => (disabled ? 'default !important' : 'pointer')};
  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.palette.gray20 : theme.palette.blue60};
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  margin-right: 0.917rem;

  color: ${({ theme }) => theme.palette.white};
  font-size: 1.2rem;
  font-weight: 500;
`
