import styled from 'styled-components'

interface AvatarSortProps {
  selected?: boolean
}

export const Container = styled.div`
  height: 53.8rem;
  margin-bottom: 2.4rem;

  border-radius: 1rem;
  background-color: #f3f3f3;
`

export const Title = styled.div`
  height: 1.8rem;
  padding: 1.6rem 0 1.6rem 2.4rem;

  font-size: 1.5rem;
  font-weight: 600;
`

export const SortContainer = styled.div`
  width: 77.6rem;
  height: 16rem;
  margin: 0.8rem;
  padding: 0.8rem 1.6rem;

  border-radius: 1rem;
  background-color: ${({ selected }: AvatarSortProps) =>
    selected ? '#fff' : '#F3F3F3'};
`

export const SortTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`

export const SortInner = styled.div`
  display: flex;

  height: 12.2rem;

  overflow-y: hidden;
`

export const Sort = styled.div`
  flex-shrink: 0;

  width: 18rem;
  height: 12.2rem;
  margin-right: 0.8rem;
`

export const SortItem = styled.div`
  height: 10rem;

  border-radius: 1rem;
  background-color: #e7e7e7;
`

export const ItemName = styled.div`
  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.432rem;
  text-align: center;
`
