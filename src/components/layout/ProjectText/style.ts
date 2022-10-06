import styled from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

export const TextGroup = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: #f6f9ff;

  font-size: 1.6rem;
`

export const TextBox = styled.div`
  background-color: ${({ findData }) => (!findData ? 'none' : '#E6EDFF')};
  border-radius: 1rem;
  padding: 1rem;
  word-break: break-all;
`
