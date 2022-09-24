import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid red;
  margin-bottom: 3.4rem;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.palette.txt};
  font-weight: 500;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  display: flex;

  span {
    margin-left: 0.8rem;
  }
`

export const OptionContainer = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
`
export const OptionButton = styled.div``

export const Sex = styled.div`
  display: flex;
  padding-right: 7.9rem;
`
export const Language = styled.div`
  display: flex;
`
export const VoicePlayerContainer = styled.div`
  border: 1px solid blue;
`
