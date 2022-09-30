import React from 'react'
import * as S from './style'
import { TooltipIcon } from 'components/Icons'
import { ProjectHistoryPlayer } from 'components'

export const ProjectVideoList = () => {
  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>생성된 영상을 확인하세요.</S.Title>
      </S.Top>
      <S.VideoContainer>
        {/* <S.NoProject>
          생성된 영상이 없습니다. 영상을 제작해주세요.
        </S.NoProject> */}
        <S.Inner>
          <ProjectHistoryPlayer
            videoUrl='/src/assets/testVerticalVideo.mp4'
            thumbnail='/src/assets/thumbnail.png'
            videoName='연습용 이름'
          />
        </S.Inner>
      </S.VideoContainer>
    </S.Container>
  )
}
