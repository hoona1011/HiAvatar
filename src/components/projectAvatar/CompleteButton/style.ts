import styled from 'styled-components'

export const Button = styled.button`
  width: calc(50% - 0.8rem);
  height: 4.8rem;

  border-radius: 1rem;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray20 : theme.palette.blue70};
  cursor: ${({ disabled }) => (disabled ? 'default !important' : 'pointer')};
  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.palette.gray20 : theme.palette.blue90};
  }
  span {
    color: ${({ theme }) => theme.palette.white};
    font-size: 1.5rem;
    font-weight: 600;
  }
`
