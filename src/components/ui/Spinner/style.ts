import styled from 'styled-components'

export const Spinner = styled.div`
  border: 0.6rem solid #fff;
  border-top: 0.6rem solid ${({ theme }) => theme.palette.blue70};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
