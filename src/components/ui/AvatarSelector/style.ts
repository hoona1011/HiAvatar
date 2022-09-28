import styled from 'styled-components'

export const Container = styled.div`
  height: 18rem;
  padding: 1.6rem 2.4rem 0;
  margin: 2.4rem 0 2.4rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.palette.white};

  box-shadow: 0 0 20rem 0 ${({ theme }) => theme.palette.boxShadow};
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 1.9rem;
`

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.8rem;
`
