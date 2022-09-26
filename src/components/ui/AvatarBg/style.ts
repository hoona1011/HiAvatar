import styled from 'styled-components'

export const Container = styled.div`
  height: 18rem;

  padding: 1.6rem 0 0 2.4rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  margin-bottom: 2.4rem;
`

export const Title = styled.div`
  width: 13.7rem;
  height: 1.8rem;

  font-size: 1.5rem;
  font-weight: 600;
`

export const BgContainer = styled.div`
  display: flex;

  width: 74.4rem;
  margin-top: 0.8rem;
`

export const BgInner = styled.div`
  height: 12.2rem;
  margin-right: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`

export const Bg = styled.div`
  width: 18rem;
  height: 10rem;

  border-radius: 1rem;
  background-color: ${({ isSelected }) =>
    isSelected ? 'royalblue' : '#e7e7e7'};
`

export const BgName = styled.div`
  height: 1.4rem;
  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`
