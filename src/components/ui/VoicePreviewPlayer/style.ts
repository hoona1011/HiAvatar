import styled from 'styled-components'

export const TitleGroup = styled.div`
  & .title {
    font-size: 1.6rem;
    font-weight: 500;
    color: #0e1937;
    display: flex;
    & .title {
      margin-left: 0.8rem;
    }
  }
  & .download {
    font-size: 1.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    background-color: #6691ff;
    border-radius: 1rem;
    color: #fff;
    font-weight: 500;
  }
  height: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CustomStyle = styled.div`
  & .rhap_container {
    width: 64.1rem;
    box-shadow: none;
    padding: 0;
    background: none;
  }
  & rhap_main-controls {
    margin-right: 1.6rem;
  }
  & .rhap_controls-section {
    flex: none;
    flex-direction: row-reverse;
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
  & .rhap_download-progress {
    background-color: #ccdaff;
  }
  & .rhap_progress-filled {
    background: linear-gradient(to right, #7fa3ff, #4c7eff);
  }

  & .rhap_progress-indicator {
    background: #336cff;
  }

  display: flex;
  justify-content: center;
  width: 100%;
  height: 5.6rem;
  background-color: #f4f5f9;
  border-radius: 1rem;
`

export const StopBtn = styled.button`
  line-height: 0;
`
export const Tooltip = styled.div`
  position: relative;

  z-index: 1111;
  .message {
    display: none;
    width: max-content;
  }
  &:hover {
    .message {
      display: block;
    }
  }
`
