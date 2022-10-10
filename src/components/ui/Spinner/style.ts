import styled from 'styled-components'

interface Props {
  width?: string
}
export const Container = styled.div<Props>`
  margin: 0 auto;
  font-size: ${({ width }) => (width ? width : '1rem')};
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #0047ff, 1.8em -1.8em 0 0em #e6edff,
        2.5em 0em 0 0em #e6edff, 1.75em 1.75em 0 0em #e6edff,
        0em 2.5em 0 0em #e6edff, -1.8em 1.8em 0 0em #e6edff,
        -2.6em 0em 0 0em #b2c7ff, -1.8em -1.8em 0 0em #6691ff;
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em #6691ff, 1.8em -1.8em 0 0em #0047ff,
        2.5em 0em 0 0em #e6edff, 1.75em 1.75em 0 0em #e6edff,
        0em 2.5em 0 0em #e6edff, -1.8em 1.8em 0 0em #e6edff,
        -2.6em 0em 0 0em #e6edff, -1.8em -1.8em 0 0em #b2c7ff;
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em #b2c7ff, 1.8em -1.8em 0 0em #6691ff,
        2.5em 0em 0 0em #0047ff, 1.75em 1.75em 0 0em #e6edff,
        0em 2.5em 0 0em #e6edff, -1.8em 1.8em 0 0em #e6edff,
        -2.6em 0em 0 0em #e6edff, -1.8em -1.8em 0 0em #e6edff;
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em #e6edff, 1.8em -1.8em 0 0em #b2c7ff,
        2.5em 0em 0 0em #6691ff, 1.75em 1.75em 0 0em #0047ff,
        0em 2.5em 0 0em #e6edff, -1.8em 1.8em 0 0em #e6edff,
        -2.6em 0em 0 0em #e6edff, -1.8em -1.8em 0 0em #e6edff;
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em #e6edff, 1.8em -1.8em 0 0em #e6edff,
        2.5em 0em 0 0em #b2c7ff, 1.75em 1.75em 0 0em #6691ff,
        0em 2.5em 0 0em #0047ff, -1.8em 1.8em 0 0em #e6edff,
        -2.6em 0em 0 0em #e6edff, -1.8em -1.8em 0 0em #e6edff;
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em #e6edff, 1.8em -1.8em 0 0em #e6edff,
        2.5em 0em 0 0em #e6edff, 1.75em 1.75em 0 0em #b2c7ff,
        0em 2.5em 0 0em #6691ff, -1.8em 1.8em 0 0em #0047ff,
        -2.6em 0em 0 0em #e6edff, -1.8em -1.8em 0 0em #e6edff;
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em #e6edff, 1.8em -1.8em 0 0em #e6edff,
        2.5em 0em 0 0em #e6edff, 1.75em 1.75em 0 0em #e6edff,
        0em 2.5em 0 0em #b2c7ff, -1.8em 1.8em 0 0em #6691ff,
        -2.6em 0em 0 0em #0047ff, -1.8em -1.8em 0 0em #e6edff;
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em #e6edff, 1.8em -1.8em 0 0em #e6edff,
        2.5em 0em 0 0em #e6edff, 1.75em 1.75em 0 0em #e6edff,
        0em 2.5em 0 0em #e6edff, -1.8em 1.8em 0 0em #b2c7ff,
        -2.6em 0em 0 0em #6691ff, -1.8em -1.8em 0 0em #0047ff;
    }
  }
`

// export const Spinner = styled.div`
//   border: 0.6rem solid #fff;
//   border-top: 0.6rem solid ${({ theme }) => theme.palette.blue70};
//   border-radius: 50%;
//   width: 4rem;
//   height: 4rem;
//   animation: spin 1s linear infinite;
//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `
