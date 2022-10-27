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
