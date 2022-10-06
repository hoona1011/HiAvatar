import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  width: 15.6rem;
  height: 3.2rem;
  margin: 0 auto;

  border-radius: 1rem;
  background-color: ${({ disabled, theme }) =>
    disabled ? '#D9D9D9' : theme.palette.blue50}; // '#D9D9D9'해당 색상은 임시
  cursor: ${({ disabled }) => (disabled ? 'default !important' : 'pointer')};
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  margin-right: 0.917rem;

  color: ${({ theme }) => theme.palette.white};
  font-size: 1.2rem;
  font-weight: 500;
`
