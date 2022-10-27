import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.palette.blue70};
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.blue90};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.gray20};
  }

  span {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
  }
`
