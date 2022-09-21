import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 74.4rem;
  .swiper {
    &-container {
      border: 1px solid blue;
      margin: 0.8rem 0 0;
    }
    &-wrapper {
      border: 1px solid red;
    }
    &-slide {
      border: 1px solid;
      height: 12.2rem;
      margin-right: 0.8rem;
    }
  }
`

export const PrevBtnContainer = styled.button`
  z-index: 2;
  position: absolute;

  top: 4.5rem;
  left: -1.6rem;
`
export const NextBtnContainer = styled.button`
  z-index: 2;
  position: absolute;

  top: 4.5rem;
  right: -1.6rem;
`

export const Content = styled.div`
  height: 10rem;

  border-radius: 1rem;
  background-color: #e7e7e7;
`

export const Name = styled.div`
  height: 1.4rem;
  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`
