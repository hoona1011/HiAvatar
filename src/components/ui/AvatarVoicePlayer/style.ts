import styled from 'styled-components'

export const Container = styled.div`
  input {
    display: none;
  }
  /* input:checked + label {
    border: 0.2rem solid #808eff;
  } */
`

export const VoicePlayer = styled.label`
  width: 100%;
  height: 12rem;
  background-color: #ffffff;
  border-radius: 1rem;
  display: flex;
  margin-bottom: 1.6rem;
  border: 0.08rem solid ${({ isSelected }) => (isSelected ? 'red' : '#d2d2d2')};
`

export const TextContainer = styled.div`
  margin: auto;
`
export const AvatarName = styled.div`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`
export const Hashtag = styled.button`
  background-color: #efefef;
  border-radius: 3rem;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
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
