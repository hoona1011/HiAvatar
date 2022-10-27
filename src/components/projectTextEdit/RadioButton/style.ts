import styled from 'styled-components'

export const Container = styled.div`
  label {
    height: 3.2rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.txt};
    background-color: #ffffff;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    padding: 0.75rem 1.2rem;
    opacity: 0.5;
    &:hover {
      background-color: ${({ theme }) => theme.palette.blue5};
    }
  }

  input {
    display: none;
  }
  input:checked + label {
    color: ${({ theme }) => theme.palette.txt};
    background-color: ${({ theme }) => theme.palette.blue5};
    opacity: 1;
  }
`
