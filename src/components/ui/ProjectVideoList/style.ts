import styled from 'styled-components'

export const Container = styled.div`
  height: 28.2rem;
  padding: 1.65rem 0 0 2.4rem;
  margin-bottom: 3.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 2rem 0 ${({ theme }) => theme.palette.boxShadow};
`

export const Top = styled.div`
  display: flex;
  align-items: center;

  height: 1.9rem;
  margin-bottom: 1.6rem;
`

export const Title = styled.div`
  margin-left: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`

export const VideoContainer = styled.div`
  display: flex;

  width: 115.2rem;
  height: 21.4rem;
`

export const NoProject = styled.div`
  margin: auto;

  color: ${({ theme }) => theme.palette.gray30};
  font-size: 1.4rem;
  text-align: center;
`

export const Inner = styled.div`
  flex-shrink: 0;
  margin-right: 1.8rem;
`
