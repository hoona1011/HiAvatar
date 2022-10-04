import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 0.8rem;
`
export const PlayerBar = styled.ul`
  & > li {
    display: flex;
    // 리셋
    list-style: none;
  }
  & li:last-child {
    margin-right: 0;
  }
  & li:nth-child(2) {
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
    margin-left: 0.8rem;
  }
  & > li > div:last-child > div {
    margin-right: 0.8rem;
  }
  & button {
    line-height: 0;
  }

  height: 5.5rem;
  display: flex;
  padding: 0.8rem;
  background-color: ${({ focus }) => (!focus ? '#F2F6FF' : '#99B6FF')};
  border-radius: 1rem;
  position: relative;
  box-shadow: ${({ focus }) =>
    !focus ? 'none' : '0 0.5rem 1rem rgba(205, 219, 255, 0.5)'};
`

export const ItemNum = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  background-color: #e6edff;

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
  /* position: absolute;
  right: -3.2rem;
  top: calc(50% - 1.2rem); */
`

export const SetUpBtnList = styled.ul`
  & > li {
    width: 5.8rem;
    overflow: hidden;
    margin-right: 0.4rem;
    background-color: #7fa3ff;
    border-radius: 5rem;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: width 0.3s;
  }
  & > li:last-child {
    margin-right: 0;
  }
  & > li:last-child:hover {
    width: 20rem;
    transition: width 0.3s;
    & .visibility {
      display: block;
    }
  }

  & .visibility {
    display: none;
  }

  display: ${({ focus }) => (!focus ? 'none' : 'flex')};
  justify-content: center;
  padding-top: 0.8rem;
`

export const TextEditBtn = styled.div`
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
`

export const SntncSpcngBtn = styled.div`
  font-size: 1rem;
  padding: 0 1.2rem;
  height: 2.8rem;
  width: 21.2rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const SntncSpcng = styled.input`
  -webkit-appearance: none;
    height: 0.2rem;
    width: 10.2rem;
    margin: 0 0.8rem;
    background: #99B6FF;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      background:#ffffff;
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
    }
  }
  /* padding: 0 1.2rem; */
  /* height: 2.8rem;
  align-items: center;
  background-color: #c2c2c2;
  border-radius: 5rem;
  font-size: 1rem;
  color: #fff;
  border: none; */
`
