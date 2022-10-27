import styled from 'styled-components'

export const Container = styled.div`
  width: 21.3rem;
  height: 26.3rem;
  background-color: ${({ theme }) => theme.palette.GNABG};
  border-radius: 1rem;
  margin-top: 50rem;
  box-shadow: 0 0 2rem #e7eaf4;
`
export const Wrap = styled.div`
  text-align: center;
  padding-top: 4.8rem;
`
export const IdInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 1.6rem;
`
export const MyBtn = styled.button`
  background-color: ${({ theme }) => theme.palette.blue50};
  width: 12rem;
  height: 4rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.palette.white};
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.6rem;
  margin-bottom: 0.8rem;
`
export const LogoutBtn = styled.button`
  background-color: ${({ theme }) => theme.palette.blue5};
  width: 12rem;
  height: 4rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.palette.blue70};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
`
export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const Link = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  text-decoration: underline;
  cursor: pointer;

  color: ${({ theme }) => theme.palette.txt};
  margin-top: 3.2rem;
  margin-right: 1rem;
`
