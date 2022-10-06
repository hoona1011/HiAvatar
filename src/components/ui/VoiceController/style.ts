import styled, { css } from 'styled-components'

export const Container = styled.div`
  /* height: 9.6rem; */
  border-radius: 1rem;
  padding: 1.8rem 1.95rem;
  background-color: #ffffff;
  box-shadow: 0 0 2rem 0 rgba(231, 234, 244, 1);

  label {
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.txt};
  }
`
export const RangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.4rem;

  .slider-label {
    color: #b5b5b5;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .slider-container {
    flex-grow: 1;
    position: relative;
    margin: auto 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .slider-balloon {
      position: absolute;
      top: -3rem;
      left: ${({ progress }) => `calc(${progress}%)`};

      background: ${({ theme, controlType }) => {
        switch (controlType) {
          case 'speed':
            return theme.palette.blue50
          case 'pitch':
            return theme.palette.orange2
          case 'sentenceSpacing':
            return theme.palette.purple50
        }
      }};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.palette.white};
      padding: 0.8rem 0.4rem;
      border-radius: 0.5rem;
      width: 3.4rem;
      height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input[type='range'] {
      -webkit-appearance: none;
      height: 0.2rem;
      width: 100%;

      background: ${({ theme, progress, controlType }) => {
        // Range slider color finder depending on control type, progress or container color
        const colorFinder = (type, isProgress) => {
          switch (type) {
            case 'speed':
              return isProgress ? theme.palette.blue50 : theme.palette.blue5
            case 'pitch':
              return isProgress ? theme.palette.orange2 : theme.palette.orange1
            case 'sentenceSpacing':
              return isProgress ? theme.palette.purple50 : theme.palette.purple5
          }
        }

        // return linear-gradient
        return css`linear-gradient(
      to right,
      ${colorFinder(controlType, true)} 0%,
      ${colorFinder(controlType, true)} ${progress}%,
      ${colorFinder(controlType)} ${progress}%,
      ${colorFinder(controlType)} 100%
      )`
      }};

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: grab;
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        background: ${({ theme, controlType }) => {
          switch (controlType) {
            case 'speed':
              return theme.palette.blue50

            case 'pitch':
              return theme.palette.orange2
            case 'sentenceSpacing':
              return theme.palette.purple50
          }
        }};

        &:active {
          cursor: grabbing;
        }
      }
    }
  }
`
