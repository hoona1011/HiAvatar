import React, { useState, useEffect, useRef } from 'react'
import * as S from './style'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperNextIcon, SwiperPrevIcon } from 'components/Icons'
import 'swiper/components/navigation/navigation.min.css'
import {
  changeTotalAvatarData,
  changeAvatarDetailList,
  useAvatar,
  changeSelectedValue
} from 'store/slices/avatarSlice'
import { useGetAvatarQuery } from 'api/avatarApi'

import type { MainSliderProps, SelectedValue, DetailList } from 'index'

export const MainSlider = ({ renderType }: MainSliderProps) => {
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const { data: avatarData, isLoading, isError } = useGetAvatarQuery()
  const { avatarList, avatarDetailList, selectedValue, dispatch } = useAvatar()
  SwiperCore.use([Navigation])

  const avatarListHandler = () => {
    avatarData && dispatch(changeTotalAvatarData({ diff: avatarData }))

    if (!selectedValue.avatarType) {
      avatarDetailListHandler('avatar1') // 기본값 지정
    }
  }
  const avatarDetailListHandler = (selectedAvatar: string) => {
    dispatch(changeAvatarDetailList({ diff: selectedAvatar }))
  }
  const selectedValueHandler = (selectedValue: SelectedValue) => {
    dispatch(changeSelectedValue({ diff: selectedValue }))
  }

  useEffect(() => {
    avatarData && avatarListHandler()
  }, [avatarData])

  // swiper 관련
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

  if (isLoading || !avatarData) {
    return <div>로딩중</div>
  }

  if (isError) {
    return <div>에러</div>
  }
  const RenderValue = () => {
    switch (renderType) {
      case 'AvatarSelector':
        return (
          <Swiper {...swiperSetting}>
            {avatarList.map((avatar, index: number) => {
              return (
                <SwiperSlide
                  key={avatar[0]}
                  onClick={() => {
                    avatarDetailListHandler(avatar[0])
                    selectedValueHandler({
                      avatarName: avatar[0]
                    })
                  }}
                >
                  <S.Content
                    isSelected={selectedValue?.avatarName === avatar[0]}
                  />
                  <S.Name isSelected={selectedValue?.avatarName === avatar[0]}>
                    아바타 {index + 1}
                  </S.Name>
                </SwiperSlide>
              )
            })}
          </Swiper>
        )
      case 'AvatarSort-1':
        return (
          <Swiper {...swiperSetting}>
            {avatarDetailList.detailList1 &&
              avatarDetailList?.detailList1.map(({ position }: DetailList) => {
                return (
                  <SwiperSlide
                    key={position}
                    onClick={() => {
                      selectedValueHandler({
                        avatarType: position
                      })
                    }}
                  >
                    <S.Content
                      isSelected={selectedValue?.avatarType === position}
                    />
                    <S.Name isSelected={selectedValue?.avatarType === position}>
                      {position}
                    </S.Name>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        )
      case 'AvatarSort-2':
        return (
          <Swiper {...swiperSetting}>
            {avatarDetailList.detailList2 &&
              avatarDetailList?.detailList2.map(({ position }: DetailList) => {
                return (
                  <SwiperSlide
                    key={position}
                    onClick={() => {
                      selectedValueHandler({
                        avatarType: position
                      })
                    }}
                  >
                    <S.Content
                      isSelected={selectedValue?.avatarType === position}
                    />
                    <S.Name isSelected={selectedValue?.avatarType === position}>
                      {position}
                    </S.Name>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        )
      case 'AvatarSort-3':
        return (
          <Swiper {...swiperSetting}>
            {avatarDetailList.detailList3 &&
              avatarDetailList?.detailList3.map(({ position }: DetailList) => {
                return (
                  <SwiperSlide
                    key={position}
                    onClick={() => {
                      selectedValueHandler({
                        avatarType: position
                      })
                    }}
                  >
                    <S.Content
                      isSelected={selectedValue?.avatarType === position}
                    />
                    <S.Name isSelected={selectedValue?.avatarType === position}>
                      {position}
                    </S.Name>
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
        <SwiperPrevIcon width='3.2rem' height='3.2rem' />
      </S.PrevBtnContainer>
      <S.NextBtnContainer ref={nextRef}>
        <SwiperNextIcon width='3.2rem' height='3.2rem' />
      </S.NextBtnContainer>
      {swiperSetting && RenderValue()}
    </S.Container>
  )
}
