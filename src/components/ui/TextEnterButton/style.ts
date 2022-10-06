import styled from 'styled-components'

export const Button = styled.button`
  width: 23.852rem;
  height: 11.9rem;
  padding: 3.5rem 5.7rem;
  border-radius: 1rem;
  border: 1px dashed ${({ theme }) => theme.palette.blue20};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue3};
  }

  .button-label {
    color: ${({ theme }) => theme.palette.blue50};
    margin-top: 0.8rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
  }
`
