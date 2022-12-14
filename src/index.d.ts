export interface AvatarVoicePlayerProps {
  characterName: string
  hashtag1?: string
  hashtag2?: string
  hashtag3?: string
  buttonType: string
  audioUrl: string
  selectedCharacter: string
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

export interface HistoryPlayerProps {
  videoUrl: string
  thumbnail: string
  videoName: string
}

// 희영
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
  isShowHistoryModal?: boolean
  thumbnail?: string
  width?: string
  theme: any
}

export interface TooltipMessageProps {
  content: string
  width: string
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
