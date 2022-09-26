import styled from 'styled-components'

export const Container = styled.div`
  height: 52.6rem;
  margin-bottom: 2.4rem;
  padding: 1.6rem 0 0 2.4rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.palette.white};
`

export const Top = styled.div`
  display: flex;
  align-items: center;

  height: 1.9rem;
  margin-bottom: 0.85rem;
`

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.8rem;
`
export const Sort = styled.div`
  margin-bottom: 1.4rem;
`

export const SortTitle = styled.div`
  margin-bottom: 0.8rem;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.432rem;
`
