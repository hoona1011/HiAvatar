import React from 'react'
import * as S from './style'
import { TooltipIcon } from 'components/Icons'
import { ProjectHistoryPlayer } from 'components'
import { useHistory } from 'store/slices/historySlice'

export const ProjectVideoList = () => {
  const { videos } = useHistory()

  const renderValue = () => {
    if (videos.length) {
      return videos.map((video) => {
        const { videoId, videoName, videoUrl, thumbnail } = video

        return (
          <S.Inner key={videoId}>
            <ProjectHistoryPlayer
              videoUrl={videoUrl}
              thumbnail={thumbnail}
              videoName={videoName}
            />
          </S.Inner>
        )
      })
    } else {
      return (
        <S.NoProject>생성된 영상이 없습니다. 영상을 제작해주세요.</S.NoProject>
      )
    }
  }

  return (
    <S.Container>
      <S.Top>
        <TooltipIcon width='1.6rem' height='1.6rem' />
        <S.Title>생성된 영상을 확인하세요.</S.Title>
      </S.Top>
      <S.VideoContainer>{renderValue()}</S.VideoContainer>
    </S.Container>
  )
}
