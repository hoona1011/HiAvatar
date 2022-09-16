import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 9.6rem;
  border-radius: 1rem;
  padding: 1.6rem 0.8rem;
  background-color: #ffffff;

  label {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #060606;
  }
`

export const RangeContainer = styled.div`
  width: 25rem;
  /* width: 100%; */
  right: 0;
  left: 0;
  margin: 0.8rem auto;

  input[type='range'] {
    -webkit-appearance: none;
    height: 0.2rem;
    width: 100%;
    background: #bdbdbd;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
      background: #595959;
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
