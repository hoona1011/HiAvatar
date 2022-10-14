import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  display: flex;
  margin-top: 4.4rem;
`
export const Wrapper = styled.div`
  margin: 0 auto;
`
export const TopText = styled.div`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
`
export const MyPwWrapper = styled.div`
  margin-bottom: 2rem;
`
export const MidText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
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
export const TempSpan = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
`
export const ChangePwWrapper = styled.div`
  margin-bottom: 2rem;
  flex-direction: column;
`
export const NewPwWrapper = styled.div`
  margin-bottom: 2.5rem;
`
export const PositionWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
export const PwCheckBtn = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 34rem;
  cursor: default;
`
export const NewPwSpan = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
`
export const SubmitBtn = styled.button`
  background-color: ${({ theme }) => theme.palette.gray20};
  color: #fff;
  width: 38.4rem;
  height: 6rem;
  border-radius: 1rem;
  font-size: 1.5rem;

  margin-bottom: 6.7rem;
`
export const ErrorSpan = styled.span`
  font-size: 1.3rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.palette.orange2};
`
