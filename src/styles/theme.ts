// 색상 관련
const palette = {
  //ETC
  white: '#FFFFFF',
  txt: '#0E1937',
  txt50: '',
  boxShadow: '#e7eaf4',
  clickBackground: '',
  progressBarGradient: '',
  GNABG: '#FBFCFF',

  //BLUE
  blue3: '#F4F7FF',
  blue5: '#E6EDFF',
  blue10: '#CCDAFF',
  blue20: '#B2C7FF',
  blue30: '#99B6FF',
  blue40: '#7FA3FF',
  blue50: '#6691FF',
  blue60: '#4C7EFF',
  blue70: '#336CFF',
  blue80: '#1A5AFF',
  blue90: '#0047FF',
  //PURPLE
  purple5: '#F0E6FF',
  purple10: '#DFCCFF',
  purple20: '#CFB2FF',
  purple30: '#C099FF',
  purple40: '#AF7FFF',
  purple50: '#A066FF',
  purple60: '#904CFF',
  purple70: '#8133FF',
  purple80: '#711AFF',
  purple90: '#711AFF', //figma 상에서 80,90이 동일한 색상으로 적혀있긴 한데 일단 작성했습니다.
  //ORANGE
  orange1: '#FFF2E2',
  orange2: '#E47B00',
  orange15: '#FFEACF',
  //GRAY
  gray30: '#0000004D',
  gray50: '',
  gray100: ''
}

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
