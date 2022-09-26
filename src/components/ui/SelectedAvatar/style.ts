import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 3.05rem;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 1.9rem;
  margin-bottom: 1.6rem;
`

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.8rem;
`

export const PreviewAvatar = styled.div`
  width: 15.6rem;
  height: 27.8rem;
  margin: 0 auto 0.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue10};
`
