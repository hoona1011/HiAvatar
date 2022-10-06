import styled from 'styled-components'

export const Container = styled.div`
  width: 21.6rem;
`

export const VideoWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 16rem;
  border-radius: 1rem;
  position: relative;
  margin-bottom: 1.4rem;
  video {
    width: 100%;
    height: 100%;
  }
`
export const PlayPauseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  margin-top: 6.4rem;
`

export const FullscreenBtn = styled.div`
  position: absolute;
  top: 12.7rem;
  right: 0.9rem;
`
export const Btn = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue50};
  ${({ theme }) => theme.common.flexCenter};
  .button-label {
    color: ${({ theme }) => theme.palette.white};
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 0.4rem;
  }
`
