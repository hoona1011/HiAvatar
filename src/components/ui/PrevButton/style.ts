import styled from 'styled-components'

export const Button = styled.button`
  width: calc(50% - 0.8rem);

  height: 4.8rem;
  background-color: ${({ theme }) => theme.palette.blue5};
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 1.6rem;

  span {
    color: ${({ theme }) => theme.palette.blue70};
    font-size: 1.5rem;
    font-weight: 600;
  }
`
