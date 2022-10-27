import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.blue50};
  height: 3.2rem;
  padding: 0 1.6rem;
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue70};
  }

  .button-label {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
  }
`
