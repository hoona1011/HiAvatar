import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  ${({ theme }) => theme.common.flexCenter};
  height: calc(100vh - 10rem - 5.6rem);
`
export const Wrapper = styled.div`
  margin: 0 auto;
  /* text-align: center; */
`
export const TopText = styled.div`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 9.8rem;
`
export const MidText = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin-bottom: 0.5rem;
`
export const PositionWrap = styled.div`
  position: relative;
`
export const EmailInput = styled.input`
  width: 38.4rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  /* &:focus {
    border: 0.1rem solid ${({ theme }) => theme.palette.orange2};
  } */
  margin-bottom: 0.5rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.gray20};
  }
  text-indent: 1.6rem;
  font-size: 1.5rem;
`
export const IdCheckBtn = styled.button`
  background-color: ${({ theme }) => theme.palette.gray20};
  :active {
    background-color: ${({ theme }) => theme.palette.blue70};
  }
  color: ${({ theme }) => theme.palette.white};
  width: 7.7rem;
  height: 3.2rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  position: absolute;
  left: 29.2rem;
  top: 1.3rem;
`
export const PwWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 9.8rem;
`
export const PasswordText = styled.div`
  font-size: 1.5rem;
`
export const PwInput = styled.input`
  width: 38.4rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.gray20};
  }
  text-indent: 1.6rem;
  font-size: 1.5rem;
`
export const PwCheckBtn = styled.div`
  position: absolute;
  top: 2rem;
  left: 34rem;
  cursor: default;
`
export const SignUpBtn = styled.button`
  width: 38.4rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.gray20};
  :active {
    background-color: ${({ theme }) => theme.palette.blue90};
  }
  font-size: 2rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.white};
`
export const SignUpABtn = styled.button`
  width: 38.4rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue70};
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 7.5rem;
  color: ${({ theme }) => theme.palette.white};
`
export const ErrorSpan = styled.span`
  display: flex;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.palette.orange2};
`
