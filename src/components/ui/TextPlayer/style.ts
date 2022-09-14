import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 912px;
`
export const PlayerBar = styled.ul`
  & > li {
    margin-right: 1.6rem;
    display: flex;

    // 리셋
    list-style: none;
  }
  & li:last-child {
    margin-right: 0;
  }
  & li:nth-child(2) {
    flex-grow: 1;
  }
  & > li > div {
    margin-right: 0.8rem;
  }
  & > li > div:last-child {
    margin-right: 0;
  }

  width: 100%;
  height: 7.2rem;
  display: flex;
  padding: 1.6rem;
  background-color: #e1e1e1;
  border-radius: 1rem;
`

export const ItemNum = styled.div`
  width: 4.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  background-color: #bfbfbf;

  font-size: 1.6rem;
`

export const TextEdit = styled.input`
  &::placeholder {
    color: #626262;
  }
  text-indent: 1.6rem;
  border: none;
  border-radius: 1rem;
  width: 100%;
`

export const SetUpBtnList = styled.ul`
  & > li {
    display: flex;
    margin-right: 0.4rem;
  }
  & > li:last-child {
    margin-right: 0;
  }
  & > li > button {
    padding: 0 0.8rem;
    height: 2.5rem;
    align-items: center;
    background-color: #c2c2c2;
    border-radius: 5rem;
    font-size: 1.4rem;
    color: #fff;
    border: none;
  }

  display: flex;
  justify-content: center;
  padding: 8px 0;
`
