import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #e7e7e7;
`

export const Inner = styled.div`
  & > div {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(2) {
    flex-grow: 1;
  }

  display: flex;

  width: 120rem;
  height: 100%;
  margin: 0 auto;
`

export const SignUpBtn = styled.button`
  display: flex;
  align-items: center;

  height: 4rem;
  padding: 0 2.8rem;

  font-size: 1.6rem;
  color: #fff;

  border-radius: 0.8rem;
  border: none;
  background-color: #757575;
`
