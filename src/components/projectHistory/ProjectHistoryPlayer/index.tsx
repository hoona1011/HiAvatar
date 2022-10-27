import { DownloadIcon } from 'components/Icons'
import { HistoryPlayerProps } from 'index'
import { useRef } from 'react'
import * as S from './style'

export const ProjectHistoryPlayer = ({
  videoUrl,
  thumbnail,
  videoName
}: HistoryPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const downloadHandler = async () => {
    fetch(videoUrl).then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${videoName}.mp4` // 연습용 이름.mp4
        a.click()
      })
    })
  }
  return (
    <S.Container>
      <S.VideoWrapper>
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnail}
          controls={true}
        ></video>
      </S.VideoWrapper>

      <S.Btn onClick={downloadHandler}>
        <DownloadIcon width='1.6rem' height='1.6rem' />
        <div className='button-label'>Download</div>
      </S.Btn>
    </S.Container>
  )
}
