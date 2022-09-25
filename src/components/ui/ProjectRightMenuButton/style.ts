import styled from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;

  input {
    display: none;
  }

  input:checked + label {
    color: ${({ theme }) => theme.palette.blue50};
    background-color: ${({ theme }) => theme.palette.blue3};
    border-bottom: 0.2rem solid ${({ theme }) => theme.palette.blue50};
  }

  label {
    color: #b2b2b4;
    padding: 2.2rem 3.2rem;
    background-color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.palette.blue5};
    white-space: nowrap;

    &:hover {
      background-color: ${({ theme }) => theme.palette.blue3};
    }

    .icon {
      margin-bottom: 0.8rem;
    }
  }
`
