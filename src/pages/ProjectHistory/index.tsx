import { ProjectHistoryPlayer } from 'components'

export const ProjectHistory = () => {
  return (
    <div>
      <ProjectHistoryPlayer
        videoUrl='/src/assets/testVerticalVideo.mp4'
        thumbnail='/src/assets/thumbnail.png'
        videoName='연습용 이름'
      />
    </div>
  )
}
