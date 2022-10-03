//

// 지훈

export interface NextButtonProps {
  requestFunc: any // 추후 수정
}

export interface VoiceControllerProps {
  label: string
  min: number
  max: number
  step: number
  controlType: string
  optionValue: number
}
export interface AvatarVoicePlayerProps {
  characterName: string
  hashtag1?: string
  hashtag2?: string
  hashtag3?: string
  buttonType: string
}
export interface Modalprops {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  modalText?: string
  setModalText?: React.Dispatch<React.SetStateAction<string>>
}
interface ProjectRightMenuProps {
  renderType: string
  setRenderType: React.Dispatch<React.SetStateAction<string>>
}

export interface RadioButtonProps {
  name: string
  value: string
  content: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  renderType?: string
  IconRenderType?: string
  defaultChecked?: boolean
}

export interface HistoryPlayerProps {
  videoUrl: string
  thumbnail: string
  videoName: string
}

// 희영
export interface Avatar {
  [avatar: string]: AvatarContent
}
export interface AvatarContent {
  data: AvatarData
}
export interface AvatarData {
  avatarName: string
  avatarType: string
  bgName: string
  language: string
  sex: string
  characterName: string
  speed: number
  pitch: number
  sentenceSpacing: number
  dummyData: AvatarDummyData
}
export interface AvatarDummyData {
  avatar1: DummyDataContent
  avatar2: DummyDataContent
  avatar3: DummyDataContent
  avatar4: DummyDataContent
  avatar5: DummyDataContent
  avatar6: DummyDataContent
  avatar7: DummyDataContent
  backgroundList: BackgroundList[]
}
export interface DummyDataContent {
  thumbnail?: string
  detailList1: DetailList[]
  detailList2: DetailList[]
  detailList3: DetailList[]
}
export interface BackgroundList {
  position: string
  thumbnail: string
}
export interface DetailList {
  position: string
  thumbnail: string
}
export interface SelectedValue {
  avatarName?: string
  avatarType?: string
  bgName?: string
}
export interface AvatarState {
  totalAvatarData: AvatarData[] | AvatarData
  avatarList: AvatarDummyData[] | unknown[]
  avatarDetailList: DummyDataContent[]
  backgroundList: BackgroundList[]
  selectedValue: SelectedValue
  isAllSelected: boolean
  isShowModal: boolean
}
// 아래 세 개는 renderType 말고는 다른 prop가 없지만 추후 확장성을 고려하여 제작하였습니다
interface RenderTypeProps {
  renderType: string
}
export interface ProjectRightNavProps extends RenderTypeProps {}
export interface MainSliderProps extends RenderTypeProps {}
export interface ProjectNavProps extends RenderTypeProps {}

export interface StyledComponentsProps {
  isSelected?: boolean
  isShowModal?: boolean
  theme: any
}

export interface Projects {
  data: HistoryData[]
  code: number
  status: string
}
export interface HistoryData {
  projects: ProjectsHistory[]
  videos: VideosHistory[]
}
export interface ProjectsHistory {
  projectId: number
  projectName: string
  lastModifiedAt: string
}
export interface VideosHistory {
  videoId: number
  videoName: string
  thumbnail: string
  videoUrl: string
  createdAt: string
}

// 현재
export interface IconProps {
  bgColor?: string
  fontColor?: string
  borderColor?: string
  fillColor?: string
  width: string
  height: string
  isSelected?: boolean
}

// 수연
