import styled from 'styled-components'

export const LoadingContainer = styled.div`
  z-index: 3;
  ${({ theme }) => theme.common.flexCenter};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Spinner = styled.div`
  border: 0.8rem solid #f3f3f3;
  border-top: 0.8rem solid ${({ theme }) => theme.palette.blue70};
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
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
