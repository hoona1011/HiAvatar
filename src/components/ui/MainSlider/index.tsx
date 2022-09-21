import React, { useState, useEffect, useRef } from 'react'
import * as S from './style'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/components/navigation/navigation.min.css'
import { SwiperNextIcon, SwiperPrevIcon } from 'components/Icons'
import { MainSliderProps } from 'index'
import avatarData from 'avatarDb'
import {
  changeAvatarDetailList,
  changeAvatarList,
  useAvatar
} from 'store/slices/avatarSlice'

export const MainSlider = ({ renderType }: MainSliderProps) => {
  // swiper 관련
  SwiperCore.use([Navigation])
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null)
  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 8,
        slidesPerView: 4,
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current
        },
        onBeforeInit: (swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }
          swiper.navigation.update()
        }
      })
    }
  }, [swiperSetting])

  const [dummyData, setDummyData] = useState(avatarData[0].data.dummyData)
  const { avatarList, avatarDetailList, dispatch } = useAvatar()

  const avatarListHandler = () => {
    const data = Object.entries(dummyData) // 2차원 배열로 만들어주기
    data.pop() // 마지막 요소는 `backgroundList` 이므로 제거
    dispatch(changeAvatarList({ diff: data }))
  }

  const avatarDetailListHandler = (selectedAvatar: string) => {
    const data = avatarList.filter((avatar) => avatar[0] === selectedAvatar)
    dispatch(changeAvatarDetailList({ diff: data[0][1] }))
  }

  useEffect(() => {
    avatarListHandler()
  }, [])

  const RenderValue = () => {
    switch (renderType) {
      case 'AvatarSelector':
        return (
          <Swiper {...swiperSetting}>
            {avatarList.map((avatar, index: string) => {
              return (
                <SwiperSlide
                  key={avatar[0]}
                  onClick={() => {
                    avatarDetailListHandler(avatar[0])
                  }}
                >
                  <S.Content />
                  <S.Name>아바타 {index + 1}</S.Name>
                </SwiperSlide>
              )
            })}
          </Swiper>
        )
      case 'AvatarSort-1':
        return (
          <Swiper {...swiperSetting}>
            {avatarDetailList.detailList1 &&
              avatarDetailList?.detailList1.map(({ position }) => {
                return (
                  <SwiperSlide key={position}>
                    <S.Content />
                    <S.Name>{position}</S.Name>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        )
      case 'AvatarSort-2':
        return (
          <Swiper {...swiperSetting}>
            {avatarDetailList.detailList2 &&
              avatarDetailList?.detailList2.map(({ position }) => {
                return (
                  <SwiperSlide key={position}>
                    <S.Content />
                    <S.Name>{position}</S.Name>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        )
      case 'AvatarSort-3':
        return (
          <Swiper {...swiperSetting}>
            {avatarDetailList.detailList3 &&
              avatarDetailList?.detailList3.map(({ position }) => {
                return (
                  <SwiperSlide key={position}>
                    <S.Content />
                    <S.Name>{position}</S.Name>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        )
    }
  }

  return (
    <S.Container>
      <S.PrevBtnContainer ref={prevRef}>
        <SwiperPrevIcon width='32' height='32' />
      </S.PrevBtnContainer>
      {swiperSetting && RenderValue()}
      <S.NextBtnContainer ref={nextRef}>
        <SwiperNextIcon width='32' height='32' />
      </S.NextBtnContainer>
    </S.Container>
  )
}
