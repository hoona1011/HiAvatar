import styled from 'styled-components'

export const Container = styled.div`
  input {
    display: none;
  }
`

export const VoicePlayer = styled.label`
  width: 100%;
  padding: 2.4rem 1.6rem;
  height: 10.4rem;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.palette.blue5 : theme.palette.white};
  border-radius: 1rem;
  display: flex;
  margin-bottom: 1.6rem;
  box-shadow: 0 0 2rem 0 rgba(231, 234, 244, 1);
`

export const TextContainer = styled.div`
  margin-right: 3.2rem;
`
export const AvatarName = styled.div`
  color: ${({ theme }) => theme.palette.txt};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`
export const Hashtag = styled.div`
  display: flex;
  .hashtag {
    border-radius: 3rem;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    white-space: nowrap;

    &:nth-child(1) {
      background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.palette.orange15 : theme.palette.orange1};
      color: ${({ theme }) => theme.palette.orange2};
      margin-right: 0.4rem;
    }

    &:nth-child(2) {
      background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.palette.purple10 : theme.palette.purple5};
      color: ${({ theme, isSelected }) => theme.palette.purple70};
      margin-right: 0.4rem;
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
  justify-content: center;
  align-items: center;
`
export const PlayBtn = styled.div`
  cursor: pointer;
  margin-right: 0.8rem;
`
export const PauseBtn = PlayBtn

export const StopBtn = styled.div`
  cursor: pointer;
`
