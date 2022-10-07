import React from 'react'
import * as S from './style'
// import section1 from './image/section1.png'
// import section2 from './image/section2.png'
// import section3 from './image/section3.png'
// import section4 from './image/section4.png'
// import image1 from '../../assets/section1.png'
// import image2 from '../../assets/section2.png'

export const LandingPage = () => {
  return (
    <div>
      LandingPage
      <S.Landing>
        <S.Section1>
          <img
            src={
              'https://user-images.githubusercontent.com/77940847/194546409-0b06d712-8d59-4cf4-ae40-ba7207bdd035.png'
            }
            width='100%'
            height='25%'
          />
        </S.Section1>
        <S.Section1Container>
          <S.TopText>
            당신의 얼굴로
            <br />
            AI가 만드는 다국어 영상
          </S.TopText>
          <S.MidText>
            HiAvatar는 여러분의 PR영상을 AI기술 기반으로
            <br />
            편집부터, 다국어 음성까지 편리하게 만들어주는 서비스입니다.
          </S.MidText>
          <S.Button>지금 시작해보세요.</S.Button>
        </S.Section1Container>
        <S.Section2>
          <img
            src={
              'https://user-images.githubusercontent.com/77940847/194546415-253dbbed-6ffa-4eb9-8c40-0df5a47ac966.png'
            }
            width='100%'
            height='25%'
          />
        </S.Section2>
        <S.Section2Container>
          <S.TopText>
            영상 제작의 피로도를
            <br />
            0%로 줄여줘요.
          </S.TopText>
          <S.MidText>
            한번의 촬영으로 텍스트를 입력하고 원하는 아바타를 선택하면
            <br />
            내가 원하는 영상을 만들 수 있습니다.
          </S.MidText>
          <S.Button>지금 시작해보세요.</S.Button>
        </S.Section2Container>
        <S.Section3>
          <img
            src={
              'https://user-images.githubusercontent.com/77940847/194546418-15b85c5e-dc48-4b9e-b3c4-465f00ec4d0c.png'
            }
            width='100%'
            height='25%'
          />
        </S.Section3>
        <S.Section3Container>
          <S.TopText>
            어려울 것 같다구요?
            <br />
            HiAvatar에게 맡기세요.
          </S.TopText>
          <S.MidText>
            Ai 아바타 한 번 만들면
            <br />
            평생 자동으로 영상제작이 가능합니다.
          </S.MidText>
          <S.Button>지금 시작해보세요.</S.Button>
        </S.Section3Container>
        <S.Section4>
          <img
            src={
              'https://user-images.githubusercontent.com/77940847/194546423-68d95797-5ab3-4055-863c-118076d4c774.png'
            }
            width='100%'
            height='25%'
          />
        </S.Section4>
        <S.Section4Container>
          <S.TopText>
            다양한 분야에서
            <br />
            활용할 수 있어요.
          </S.TopText>
          <S.MidText>
            여러분이 말을 하지 않아도 전문 아나운서처럼
            <br />
            말할 수 있도록 도와드립니다.
          </S.MidText>
          <S.Button>지금 시작해보세요.</S.Button>
        </S.Section4Container>
      </S.Landing>
    </div>
  )
}
