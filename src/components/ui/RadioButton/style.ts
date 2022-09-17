import styled from 'styled-components'

export const Container = styled.div`
  label {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    color: white;
    background-color: #d2d2d2;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    padding: 1.1rem 1.6rem;

    &:hover {
      background-color: red;
    }
  }

  input {
    display: none;
  }
  input:checked + label {
    color: white;
    background-color: green;
  }
`
