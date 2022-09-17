import styled from 'styled-components'

export const Wrapper = styled.div`
  & > div {
    height: calc(100vh - 5.6rem);
  }

  width: 100%;
  background-color: white;
`

export const Inner = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: flex;
`
export const Left = styled.div`
  background-color: red;
  padding-right: 2.4rem;
  width: calc(100% - 38.4rem);
  background-color: #ccc;
`

export const Right = styled.div`
  width: 38.4rem;
  background-color: #eee;
  overflow: scroll;
`

export const VoicePlayer = styled.div`
  position: fixed;
  bottom: 0;
  width: 79.2rem;
  height: 13rem;
  border: 2px solid red;
`

export const StepNavigator = styled.div`
  width: 100%;
  height: 6.4rem;
  border: 2px solid green;
`
