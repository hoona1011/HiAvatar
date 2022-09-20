import React, { useState, useEffect, useRef } from 'react'
import * as S from './style'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/components/navigation/navigation.min.css'
import { SwiperNextIcon, SwiperPrevIcon } from '../../Icons'

interface MainSliderProps {
  data: { name: string }[]
}

export const MainSlider = ({ data }: MainSliderProps) => {
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

  return (
    <S.Container>
      <S.PrevBtnContainer ref={prevRef}>
        <SwiperPrevIcon width='32' height='32' />
      </S.PrevBtnContainer>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          {data.map((avatar) => {
            const { name } = avatar
            return (
              <SwiperSlide key={name}>
                <S.Content />
                <S.Name>{name}</S.Name>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
      <S.NextBtnContainer ref={nextRef}>
        <SwiperNextIcon width='32' height='32' />
      </S.NextBtnContainer>
    </S.Container>
  )
}
