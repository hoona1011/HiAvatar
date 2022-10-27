import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  ${({ theme }) => theme.common.flexCenter};
  height: calc(100vh - 10rem - 5.6rem);
`
export const Wrapper = styled.div`
  margin: 0 auto;
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
  margin-bottom: 2.4rem;
`
export const MidText = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`
export const EmailInput = styled.input`
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
export const PwWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
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
export const SignInBtn = styled.button`
  background-color: ${({ theme }) => theme.palette.gray20};
  color: #fff;
  width: 38.4rem;
  height: 6rem;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 500;
  :active {
    background-color: ${({ theme }) => theme.palette.blue90};
  }
`
export const BotText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0;
`
export const SignUpSpan = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
export const SimpleLogBtn = styled.button`
  background-color: #e9e9e9;
  width: 38.4rem;
  height: 5.2rem;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`
export const ErrorSpan = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.palette.orange2};
`
export const SimpleText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;
  text-align: center;
`
export const SimpleWrapper = styled.div`
  div {
    display: inline;
    margin-left: 0.8rem;
  }
  align-items: center;
  text-align: center;
  margin-bottom: 5.3rem;
`
