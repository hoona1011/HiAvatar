import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

export const TextGroup = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: #fff;
  padding: 1.6rem;
  font-size: 1.6rem;
`

export const TextBox = styled.div`
  background-color: ${({ findData }) => (!findData ? 'none' : 'red')};
  padding: 1rem;
`
