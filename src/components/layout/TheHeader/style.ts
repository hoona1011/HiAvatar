import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 5.6rem;
  background-color: #fbfcff;
`

export const Inner = styled.div`
  & > div {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(2) {
    flex-grow: 1;
    padding-left: 2.9rem;
    font-size: 2.1rem;
  }

  display: flex;

  width: 120rem;
  height: 100%;
  margin: 0 auto;
`

export const BtnForm = styled.button`
  display: flex;
  align-items: center;

  height: 3.6rem;
  padding: 0 2.4rem;
  margin-left: 1.6rem;

  font-size: 1.2rem;
  color: #fff;

  border-radius: 0.8rem;
  border: none;
  background-color: #6691ff;
`

export const EditBtn = styled.button`
  margin-left: 0.8rem;
`

export const ProjectName = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`

export const TitleEdit = styled.div`
  & .hide {
    position: absolute;
    opacity: 0;
    z-index: -100;
    white-space: pre;
  }

  & input {
    border: none;
    font-size: 1.6rem;
    padding: 0;
    font-weight: 500;
  }

  & input:focus {
    text-decoration: underline;
  }
`
