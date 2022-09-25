import styled from 'styled-components'

export const Container = styled.div`
  input {
    display: none;
  }
`

export const VoicePlayer = styled.label`
  width: 100%;
  height: 10.4rem;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.blue5 : '#FFFFFF'};
  border-radius: 1rem;
  display: flex;
  margin-bottom: 1.6rem;
`

export const TextContainer = styled.div`
  margin: 2.4rem 3.2rem 2.4rem 1.6rem;
`
export const AvatarName = styled.div`
  color: ${({ theme }) => theme.palette.txt};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`
export const Hashtag = styled.div`
  display: flex;
  div {
    background-color: #efefef;
    border-radius: 3rem;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.6rem 0.8rem;
    margin-right: 0.4rem;

    &:nth-child(1) {
      background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.palette.orange15 : theme.palette.orange1};
      color: ${({ theme }) => theme.palette.orange2};
    }

    &:nth-child(2) {
      background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.palette.purple10 : theme.palette.purple5};
      color: ${({ theme, isSelected }) => theme.palette.purple70};
    }
    &:nth-child(3) {
      background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.palette.blue10 : theme.palette.blue5};
      color: ${({ theme }) => theme.palette.blue60};
    }
  }
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`
export const PlayPauseBtn = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
`
export const StopBtn = styled.div`
  cursor: pointer;
`
