import styled from 'styled-components'

export const Wrapper = styled.div`
  & > div {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(2) {
    flex-grow: 1;
    padding-left: 3.7rem;
    font-size: 2.1rem;
  }
  width: 100%;
  min-width: 120rem;
  padding-right: 2.5rem;
  height: 8rem;
  background-color: #e7e7e7;
  display: flex;
`
export const EditBtn = styled.button`
  margin-left: 0.8rem;
`
