import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  height: 6.4rem;
  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 20 0 ${({ theme }) => theme.palette.boxShadow};
`
