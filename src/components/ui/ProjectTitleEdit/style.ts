import styled from 'styled-components'
import type { StyledComponentsProps } from 'index'

export const EditBtn = styled.button`
  margin-left: -1.2rem;
`

export const ProjectName = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  padding-right: 2rem;
`

export const TitleEdit = styled.div`
  & .hide {
    position: absolute;
    opacity: 0;
    z-index: -100;
    white-space: pre;
    font-size: 1.6rem;
    font-weight: 500;
    padding-left: 2rem;
  }

  & input {
    border: none;
    font-size: 1.6rem;
    padding: 0;
    font-weight: 500;
  }

  & input:focus {
    text-decoration: underline;
  }
`
