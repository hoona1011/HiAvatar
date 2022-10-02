import styled from 'styled-components'

export const Wrapper = styled.div`
  width: calc(100% - 3.2rem);
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
  & li:nth-child(1) {
    flex-grow: 1;
    position: relative;
  }
  & > li > div {
    margin-right: 0.8rem;
    display: flex;
    align-items: center;
  }
  & > li > div:last-child {
    margin-right: 0;
  }

  width: 100%;
  height: 5.5rem;
  display: flex;
  padding: 0.8rem;
  background-color: ${({ focus }) => (!focus ? '#e1e1e1' : 'red')};
  border-radius: 1rem;
  position: relative;
`

export const ItemNum = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  background-color: #bfbfbf;

  position: absolute;
  top: 0.8rem;
  left: 0.8rem;

  font-size: 1.2rem;
`

export const TextEdit = styled.input`
  &::placeholder {
    color: #626262;
  }
  text-indent: 4rem;
  border: none;
  border-radius: 1rem;
  width: 100%;
`

export const CloseButton = styled.button`
  position: absolute;
  right: -3.2rem;
  top: calc(50% - 1.2rem);
`

export const SetUpBtnList = styled.ul`
  & > li {
    display: flex;
    margin-right: 0.4rem;
  }
  & > li:last-child {
    margin-right: 0;
  }

  display: ${({ focus }) => (!focus ? 'none' : 'flex')};
  justify-content: center;
  padding: 0.8rem 0;
`

export const TextEditBtn = styled.button`
  padding: 0 1.2rem;
  height: 2.8rem;
  align-items: center;
  background-color: #c2c2c2;
  border-radius: 5rem;
  font-size: 1rem;
  color: #fff;
  border: none;
`

export const SntncSpcng = styled.input`
  /* padding: 0 1.2rem; */
  /* height: 2.8rem;
  align-items: center;
  background-color: #c2c2c2;
  border-radius: 5rem;
  font-size: 1rem;
  color: #fff;
  border: none; */
`
