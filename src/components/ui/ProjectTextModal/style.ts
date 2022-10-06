import styled from 'styled-components'
import theme from 'styles/theme'

export const Background = styled.div`
  /* display: none; */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`
export const Modal = styled.div`
  width: 79rem;
  height: 48.2rem;
  background-color: #ffffff;
  margin: 10% auto;
  padding: 1.6rem 2.4rem;
  border-radius: 1rem;
  position: relative;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.2rem;
  margin-bottom: 0.8rem;
`
export const Label = styled.div`
  display: flex;
  label {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 0.8rem;
  }
`
export const CloseBtn = styled.button`
  path {
    fill: ${({ theme }) => theme.palette.blue50};

    &:hover {
      fill: ${({ theme }) => theme.palette.blue60};
    }
  }
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 36.2rem;
  resize: none;
  background: ${({ theme }) => theme.palette.background};
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 1rem;
  border: transparent;
  padding: 1.6rem;
  outline: none;
  margin-bottom: 1.6rem;
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
  justify-content: center;
`
export const CancelBtn = styled.button`
  width: 16rem;
  height: 3.2rem;
  color: ${({ theme }) => theme.palette.blue70};
  font-weight: 500;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.palette.blue3};
  border-radius: 1rem;
  margin-right: 1.6rem;
  &:hover {
    background-color: ${({ theme }) => theme.palette.blue10};
  }
`

export const EnterBtn = styled.button`
  width: 16rem;
  height: 3.2rem;

  color: ${({ theme }) => theme.palette.white};
  font-weight: 500;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.palette.blue50};
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue70};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.gray20};
  }
`
