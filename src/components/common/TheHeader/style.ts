import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 5.6rem;
  background-color: #fbfcff;
`

export const Inner = styled.div`
  & > div {
    position: relative;
    display: flex;
    align-items: center;
  }
  & > div:nth-child(2) {
    flex-grow: 1;
    padding-left: 2.9rem;
    font-size: 2.1rem;
  }

  display: flex;
  width: 120rem;
  height: 100%;
  margin: 0 auto;
`

export const MyInfo = styled.div`
  & .my-info-button {
    display: flex;
    align-items: center;

    height: 3.6rem;
    padding: 0 1.6rem;
    margin-left: 0.8rem;

    font-size: 1.2rem;
    color: #fff;

    border-radius: 1rem;
    border: none;
    background-color: ${({ theme }) => theme.palette.blue50};
  }
  &:hover .my-info-button {
    background-color: ${({ theme }) => theme.palette.blue70};
  }
  &:hover .my-info-con {
    display: block;
  }
  & .my-info-con {
    display: none;
    position: absolute;
    left: calc(50% - 10em);
    top: 4.4rem;
    padding-top: 1.2rem;
    width: 21.3rem;
    height: 26.3rem;

    & .my-info-con__inner {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      align-items: center;
      background-color: #fbfcff;
      box-shadow: 0 0 2rem #e7eaf4;
      border-radius: 1rem;
      & .title {
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1.6rem;
      }
      & .my-account-btn {
        display: flex;
        width: 12rem;
        height: 4rem;
        border-radius: 1rem;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 1.3rem;
        margin-bottom: 0.8rem;

        background-color: ${({ theme }) => theme.palette.blue50};
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.palette.blue70};
        }
      }
      & .sign-out-btn {
        display: flex;
        width: 12rem;
        height: 4rem;
        border-radius: 1rem;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.palette.blue70};
        font-size: 1.3rem;
        margin-bottom: 3.2rem;

        background-color: ${({ theme }) => theme.palette.blue5};
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.palette.blue10};
        }
      }

      & .service {
        & span {
          font-size: 1rem;
          text-decoration: underline;
          margin: 0.4rem;
        }
      }
    }
  }
`

export const HistoryBtnGroup = styled.div`
  position: relative;
`

export const BtnForm = styled.button`
  display: flex;
  align-items: center;

  height: 3.6rem;
  padding: 0 1.6rem;
  margin-left: 0.8rem;

  font-size: 1.2rem;
  color: #fff;

  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.blue50};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue70};
  }

  & .icon {
    display: inherit;
    margin-right: 0.5rem;
  }
`
export const BtnFormV1 = styled.button`
  display: flex;
  align-items: center;

  height: 3.6rem;
  padding: 0 1.6rem;
  margin-left: 0.8rem;

  font-size: 1.2rem;
  color: #fff;

  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.blue70};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue90};
  }

  & .icon {
    display: inherit;
    margin-right: 0.5rem;
  }
`

export const EditBtn = styled.button`
  margin-left: 0.8rem;
`

export const ProjectName = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`

export const TitleEdit = styled.div`
  & .hide {
    position: absolute;
    opacity: 0;
    z-index: -100;
    white-space: pre;
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

export const AuthBtnGroup = styled.div`
  display: flex;
`
