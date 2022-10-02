import styled from 'styled-components'

export const Container = styled.div`
  height: 71.2rem;
  padding: 2.6rem 2.4rem 2.4rem;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 2rem 0 ${({ theme }) => theme.palette.boxShadow};
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Inner = styled.div`
  width: 33.6rem;
  margin-bottom: 2.4rem;
`

export const BtnContainer = styled.div`
  height: 4.8rem;
  position: sticky;
  width: 33.6rem;
  bottom: 0;
`
