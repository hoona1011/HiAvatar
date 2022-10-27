import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;

  height: 3.6rem;
  padding: 0 1.6rem;
  margin-left: 0.8rem;

  font-size: 1.2rem;
  color: #fff;

  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.blue50};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue70};
  }
  span {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
  }
`
