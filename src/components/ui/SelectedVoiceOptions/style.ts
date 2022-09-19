import styled from 'styled-components'

export const Container = styled.div`
  height: 20.8rem;
`

export const Title = styled.div`
  margin-bottom: 1.6rem;

  font-size: 1.5rem;
  font-weight: 600;
`

export const SelectedOptions = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  height: 17.4rem;

  border-radius: 1rem;
  background-color: #ededed;
`

export const OptionsInner = styled.div`
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
  color: #6b6b6b;
  font-weight: 500;
`

export const OptionValue = styled.div`
  font-weight: 600;
`
