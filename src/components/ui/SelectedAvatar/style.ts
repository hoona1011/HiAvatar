import styled from 'styled-components'
import type { StyledComponentsProps } from 'index'

export const Container = styled.div`
  margin-bottom: 3.05rem;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 1.9rem;
  margin-bottom: 1.6rem;
`

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 0.8rem;
`

export const PreviewAvatar = styled.div<StyledComponentsProps>`
  width: 15.6rem;
  height: 27.8rem;
  margin: 0 auto 0.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue3};
  background-image: url(${({ thumbnail }) => thumbnail});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const PreviewAvatarLoading = styled.div<StyledComponentsProps>`
  ${({ theme }) => theme.common.flexCenter}
  width: 15.6rem;
  height: 27.8rem;
  margin: 0 auto 0.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.blue3};
`

export const Spinner = styled.div`
  border: 0.6rem solid #fff;
  border-top: 0.6rem solid ${({ theme }) => theme.palette.blue70};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
