import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.8rem;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 1.9rem;
  margin-bottom: 1.65rem;
`

export const Options = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  height: 17.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.GNABG};
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 28.8rem;
  height: 13.9rem;
`

export const Option = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.4rem;
`

export const OptionKey = styled.div`
  color: rgba(14, 25, 55, 0.5);

  font-weight: 500;
  line-height: 1.671rem;
`

export const OptionValue = styled.div`
  font-weight: 600;
  line-height: 1.671rem;
`
