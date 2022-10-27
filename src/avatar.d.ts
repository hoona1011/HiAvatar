export interface Avatar {
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
  avatar2?: DummyDataContent
  avatar3?: DummyDataContent
  avatar4?: DummyDataContent
  backgroundList: BackgroundList[]
}
export interface DummyDataContent {
  thumbnail: string
  detailList1: DetailList[]
  detailList2: DetailList[]
  detailList3: DetailList[]
}
export interface DetailList {
  position: string
  thumbnail: string
}
export interface BackgroundList {
  position: string
  thumbnail: string
}

export interface AvatarPreview {
  data: PreviewData
}
export interface PreviewData {
  thumbnail: string
}

export interface SelectedValue {
  avatarName?: string
  avatarType?: string
  bgName?: string
}

export interface AvatarState {
  totalAvatarData: AvatarData
  avatarList: [string, AvatarList][]
  avatarDetailList: AvatarList
  backgroundList: AvatarList[]
  selectedValue: SelectedValue
  isAllSelected: boolean
  isShowModal: boolean
  avatarPreview: string
  isAvatarPreviewLoading: boolean
}

export interface AvatarList {
  thumbnail: string
  position?: string
  detailList1?: DetailList[]
  detailList2?: DetailList[]
  detailList3?: DetailList[]
}
