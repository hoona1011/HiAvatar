import exp from 'node:constants'
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
export const AudioPlayer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  background: #f4f5f9;
`

export const Inner = styled.div`
  width: 50rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProgressBarGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ProgressBar = styled.input`
  -webkit-appearance: none;
  height: 0.4rem;
  width: inherit;
  border-radius: 5rem;
  margin: 0 0.8rem;
  background: #ccdaff;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #336cff;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
  }
`

export const PlayPauseButton = styled.button`
  margin-right: 1.6rem;
  color: #0e1937;
`

export const RenderTime = styled.span`
  font-size: 1.2rem;
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
