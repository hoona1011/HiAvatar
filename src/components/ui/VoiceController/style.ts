import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 9.6rem;
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
  align-items: center;
  width: 25rem;
  right: 0;
  left: 0;
  margin: 2.4rem auto 0;
  span {
    color: #b5b5b5;
    font-size: 1.2rem;
    font-weight: 500;
  }
  input[type='range'] {
    -webkit-appearance: none;
    height: 0.2rem;
    width: 100%;
    margin: 0 0.8rem;
    background: ${({ theme, controlType }) => {
      switch (controlType) {
        case 'speed':
          return theme.palette.blue5
        case 'pitch':
          return theme.palette.orange1
        case 'sentenceSpacing':
          return theme.palette.purple5
      }
    }};

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
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
      cursor: pointer;
    }
  }
`

export const RangeLabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #b5b5b5;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.8rem;
`
