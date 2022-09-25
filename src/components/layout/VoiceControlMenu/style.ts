import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border-radius: 1rem;
  border: 1px solid blue;
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

export const VoiceControllerContainer = styled.div`
  div {
    margin-bottom: 1.6rem;

    &:nth-child(3) {
      margin-bottom: 17.2rem;
    }
  }
`
