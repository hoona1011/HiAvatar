import React from 'react'
import styled from 'styled-components'

const AvatarVoicePlayerContainer = styled.div`
  width: 36rem;
  height: 12rem;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
`
const AvatarVoicePlayerTextWrapper = styled.div`
  margin: auto;
`
const AvatarVoicePlayerAvatarName = styled.div`
  font-size: 21px;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 1rem;
`
const AvatarVoicePlayerLanguage = styled.button`
  background-color: #efefef;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  padding: 0.8rem;
  margin-right: 0.5rem;
`
const AvatarVoicePlayerBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: auto;
`
const AvatarVoicePlayerPlayBtn = styled.div`
  margin-right: 0.5rem;
`
const AvatarVoicePlayerStopBtn = styled.div``
export const AvatarVoicePlayer = () => {
  return (
    <AvatarVoicePlayerContainer>
      <AvatarVoicePlayerTextWrapper>
        <AvatarVoicePlayerAvatarName>가영</AvatarVoicePlayerAvatarName>
        <AvatarVoicePlayerLanguage>#가나다</AvatarVoicePlayerLanguage>
        <AvatarVoicePlayerLanguage>#가나다</AvatarVoicePlayerLanguage>
        <AvatarVoicePlayerLanguage>#가나다</AvatarVoicePlayerLanguage>
      </AvatarVoicePlayerTextWrapper>
      <AvatarVoicePlayerBtnWrapper>
        <AvatarVoicePlayerPlayBtn>
          <svg
            width='52'
            height='52'
            viewBox='0 0 52 52'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='26.1273'
              cy='26.0001'
              r='25.6273'
              fill='#858585'
              fill-opacity='0.5'
            />
            <path
              d='M22.3105 20.002V33.0882L33.2158 26.5451L22.3105 20.002Z'
              fill='white'
            />
            <path
              d='M22.3105 20.002L22.6964 19.3588C22.4647 19.2198 22.1762 19.2162 21.941 19.3493C21.7059 19.4824 21.5605 19.7317 21.5605 20.002H22.3105ZM22.3105 33.0882H21.5605C21.5605 33.3584 21.7059 33.6077 21.941 33.7409C22.1762 33.874 22.4647 33.8704 22.6964 33.7313L22.3105 33.0882ZM33.2158 26.5451L33.6016 27.1882C33.8275 27.0527 33.9658 26.8085 33.9658 26.5451C33.9658 26.2816 33.8275 26.0375 33.6016 25.902L33.2158 26.5451ZM23.0605 33.0882V20.002H21.5605V33.0882H23.0605ZM32.8299 25.902L21.9247 32.4451L22.6964 33.7313L33.6016 27.1882L32.8299 25.902ZM21.9247 20.6451L32.8299 27.1882L33.6016 25.902L22.6964 19.3588L21.9247 20.6451Z'
              fill='white'
            />
          </svg>
        </AvatarVoicePlayerPlayBtn>
        <div className='stopBtn'>
          <svg
            width='53'
            height='52'
            viewBox='0 0 53 52'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='26.3817'
              cy='26.0001'
              r='25.6273'
              fill='#858585'
              fill-opacity='0.5'
            />
            <rect x='20.5' y='20.3728' width='13' height='12' fill='white' />
          </svg>
        </div>
      </AvatarVoicePlayerBtnWrapper>
    </AvatarVoicePlayerContainer>
  )
}
