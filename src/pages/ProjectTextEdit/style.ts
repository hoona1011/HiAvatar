import styled from 'styled-components'

export const Wrapper = styled.div`
  & > div {
    height: calc(100vh - 5.6rem);
  }

  width: 100%;
  background-color: '#F4F6F9';
`

export const Inner = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: flex;
`
export const Left = styled.div`
  padding-right: 2.4rem;
  display: flex;
  flex-direction: column;
  width: calc(100% - 38.4rem);
`

export const Right = styled.div`
  width: 38.4rem;
  background-color: #eee;
  /* overflow: scroll; */
`

export const VoicePlayer = styled.div`
  background-color: #f3f3f3;
  border-radius: 1rem;
  width: 79.2rem;
  padding: 0 1.6rem 2.4rem;
`

export const StepNavigator = styled.div`
  width: 100%;
  padding: 2.4rem 0;
`
