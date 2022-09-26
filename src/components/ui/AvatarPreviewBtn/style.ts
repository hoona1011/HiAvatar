import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 15.6rem;
  height: 3.2rem;
  margin: 0 auto;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue50};
  &:hover {
    cursor: pointer;
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  margin-right: 0.917rem;

  color: ${({ theme }) => theme.palette.white};
  font-size: 1.2rem;
  font-weight: 500;
`
