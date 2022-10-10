export interface Projects {
  data: HistoryData[]
  code: number
  status: string
}
export interface HistoryData {
  projects: ProjectsHistory[]
  videos: VideosHistory[]
  isCreateing: boolean
  isShowHistoryModal: boolean
}

export interface ProjectsHistory extends ProjectInfo {
  lastModifiedAt: string
}
export interface VideosHistory {
  videoId: number
  videoName: string
  thumbnail: string
  videoUrl: string
  createdAt: string
}

export interface Project {
  data: ProjectInfo
}
export interface ProjectInfo {
  projectId: number
  projectName: string
}

export interface Video {
  data: VideoData
  code: number
  status: string
}
export interface VideoData {
  result: string
  videoId: number
  videoName: string
  createdAt: string
}
