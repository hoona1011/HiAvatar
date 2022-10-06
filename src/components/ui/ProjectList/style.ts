import styled from 'styled-components'

export const Container = styled.div`
  height: 26rem;
  padding: 1.65rem 0 0 2.4rem;
  margin-bottom: 2.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 2rem 0 ${({ theme }) => theme.palette.boxShadow};
`

export const Top = styled.div`
  display: flex;
  align-items: center;

  height: 1.9rem;
  margin-bottom: 1.6rem;
`

export const Title = styled.div`
  margin-left: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`

export const ProjectContainer = styled.div`
  display: flex;

  width: 115.2rem;
  height: 19.4rem;
`

export const NoProject = styled.div`
  margin: auto;

  color: ${({ theme }) => theme.palette.gray30};
  font-size: 1.4rem;
  text-align: center;
`

export const Inner = styled.div`
  flex-shrink: 0;

  width: 21.6rem;
  height: 19.4rem;
  margin-right: 1.8rem;
`

export const Project = styled.div`
  height: 16rem;
  margin-bottom: 0.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue5};
  cursor: pointer;
`

export const Name = styled.div`
  color: ${({ theme }) => theme.palette.txt};
  font-size: 1.2rem;
  font-weight: 600;

  line-height: 1.432rem;
  text-align: center;
`

export const Date = styled.div`
  color: '#7A7575';
  font-size: 1rem;
  font-weight: 500;

  line-height: 1.2rem;
  text-align: center;
`
