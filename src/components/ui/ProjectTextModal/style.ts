import styled from 'styled-components'

export const Background = styled.div`
  /* display: none; */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`
export const Modal = styled.div`
  width: 86rem;
  height: 51rem;
  background-color: #ffffff;
  margin: 10% auto;
  padding: 1.6rem;
  border-radius: 1rem;
  position: relative;
  text-align: center;

  textarea {
    /* width: 100%;
    height: 39rem;
    resize: none;
    background: #f3f3f3;
    display: block;
    font-size: 1.4rem;
    border-radius: 1rem;
    border: transparent;
    padding: 1.6rem;
    margin: 1.6rem 0;
    outline: none;
    scrollbar-color: red;

    &::-webkit-scrollbar {
      width: 0.8rem;
      cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #808080;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
      background-color: #d6d6d6;
    } */
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    margin: auto 0;
    font-size: 1.6rem;
    font-weight: 600;
  }
`
export const CloseBtn = styled.button`
  cursor: pointer;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 39rem;
  resize: none;
  background: #f3f3f3;
  display: block;
  font-size: 1.4rem;
  border-radius: 1rem;
  border: transparent;
  padding: 1.6rem;
  margin: 1.6rem 0;
  outline: none;
  scrollbar-color: red;

  &::-webkit-scrollbar {
    width: 0.8rem;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #d6d6d6;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CancelBtn = styled.button`
  width: 96px;
  height: 32px;
  color: #1c1c1c;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: #ececec;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 1.6rem;
`

export const EnterBtn = styled.button`
  width: 96px;
  height: 32px;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: #232323;
  border-radius: 1rem;
  cursor: pointer;
`
