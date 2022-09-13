// 색상 관련
const palette = {}

// 레이아웃 관련
const common = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexEnd: `
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexSpaceBetWeen: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexColumnStart: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `
}

// font 관련
const fontSizes = {
  // region: '12rem',
  // entryTitle: '4rem',
  // title: '2rem',
  // subtitle: '1.5rem',
  // inputText: '1.8rem',
  // buttonText: '1.5rem',
  // bigParagraph: '1.8rem',
  // paragraph: '1.6rem',
  // smallParagraph: '1.4rem',
  // inputErrorMessage: '1.4rem'
}
const fontWeight = {
  // bold: 800,
  // medium: 700,
  // normal: 400
}

// 지정해둔 값 내보내기
const theme = {
  palette,
  common,
  fontSizes,
  fontWeight
}

export default theme
