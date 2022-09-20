import styled from 'styled-components'

export const Title = styled.div`
  font-size: 1.6rem;
  padding: 1.6rem 0;
`

export const CustomStyle = styled.div`
  & .rhap_container {
    width: 64.1rem;
    box-shadow: none;
  }
  & rhap_main-controls {
    margin-right: 1.6rem;
  }
  & .rhap_controls-section {
    flex: none;
  }
  & .rhap_container {
    padding: 0;
  }
  & .rhap_main-controls-button {
    width: auto;
    height: auto;
    line-height: 0;
  }
  & .rhap_main-controls-button {
    margin: 0 0.8rem;
  }
  & .rhap_time {
    font-size: 1.2rem;
  }
  & .rhap_progress-indicator {
    width: 1rem;
    height: 1rem;
    top: -0.3rem;
    margin-left: -0.3rem;
  }

  display: flex;
  justify-content: center;
  width: 100%;
  height: 5.6rem;
  background-color: #fff;
  border-radius: 1rem;
`
