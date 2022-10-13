import styled from 'styled-components'

export const Wrapper = styled.div`
  /* width: 91.2rem; */
  width: 100%;
  flex-grow: 1;
  overflow: auto;
  padding: 1.6rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  position: relative;
  margin-bottom: 2.4rem;
`
export const Title = styled.p`
  font-size: 1.5rem;
`

export const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.2rem;
  margin-bottom: 1.6rem;
  & .button-group {
    & button {
      margin-left: 1rem;
    }
  }
`

export const StartPage = styled.div`
  & button {
    margin: 2rem;
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
