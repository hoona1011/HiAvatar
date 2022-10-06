import styled from 'styled-components'

export const Button = styled.button`
  width: calc(50% - 0.8rem);
  height: 4.8rem;

  border-radius: 1rem;
  background-color: ${({ disabled, theme }) =>
    disabled ? '#D9D9D9' : theme.palette.blue70}; // '#D9D9D9'해당 색상은 임시
  cursor: ${({ disabled }) => (disabled ? 'default !important' : 'pointer')};
  span {
    color: ${({ theme }) => theme.palette.white};
    font-size: 1.5rem;
    font-weight: 600;
  }
`
