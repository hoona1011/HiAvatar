import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <S.Landing>
        <S.section1Container>
          <S.section1Inner>
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
            <S.Button
              onClick={() => {
                navigate('/project-history')
              }}
            >
              지금 시작해보세요.
            </S.Button>
          </S.section1Inner>
        </S.section1Container>
        <div>
          <S.section2Container>
            <S.section2Inner>
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
              <S.Button
                onClick={() => {
                  navigate('/project-history')
                }}
              >
                지금 시작해보세요.
              </S.Button>
            </S.section2Inner>
          </S.section2Container>
        </div>
        <S.section3Container>
          <S.section3Inner>
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
            <S.Button
              onClick={() => {
                navigate('/project-history')
              }}
            >
              지금 시작해보세요.
            </S.Button>
            <S.section3Image>
              <img
                src='https://user-images.githubusercontent.com/91241596/195172957-ee21439b-84d7-4ac5-97e4-c3e12d9135e4.png'
                alt=''
              />
            </S.section3Image>
          </S.section3Inner>
        </S.section3Container>
        <S.section4Container>
          <S.section4Inner>
            <S.TopText>
              다양한 분야에서
              <br />
              활용할 수 있어요.
            </S.TopText>
            <S.wrap>
              <S.MidText4>
                여러분이 말을 하지 않아도 전문 아나운서처럼
                <br />
                말할 수 있도록 도와드립니다.
              </S.MidText4>
              <S.Button
                onClick={() => {
                  navigate('/project-history')
                }}
              >
                지금 시작해보세요.
              </S.Button>
            </S.wrap>
          </S.section4Inner>
        </S.section4Container>
      </S.Landing>
    </div>
  )
}
