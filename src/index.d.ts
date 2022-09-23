//

// 지훈
export interface RadioButtonProps {
  buttonType: string
  value: string
  content: string
}

interface AvatarVoicePlayerProps {
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
  setRenderType: React.Dispatch<React.SetStateAction<string>>
}

interface RadioButtonProps {
  buttonType: string
  value: string
  content: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
}
// 희영
export interface ProjectRightNavProps {
  renderType: string
}

export interface MainSliderProps {
  renderType: string
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
