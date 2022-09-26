//

// 지훈

interface VoiceControllerProps {
  label: string
  min: number
  max: number
  step: number
  controlType: string
  optionValue: number
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
  renderType: string
  setRenderType: React.Dispatch<React.SetStateAction<string>>
}

interface RadioButtonProps {
  name: string
  value: string
  content: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
  renderType: string
  IconRenderType: string
}
// 희영
export interface ProjectRightNavProps {
  renderType: string
}

export interface MainSliderProps {
  renderType: string
}

export interface SelectedValue {
  selectedValue: {
    avatarName: string
    avatarType: string
    bgName: string
  }
}

export interface AvatarState extends SelectedValue {
  totalAvatarData: any[]
  avatarList: any[]
  avatarDetailList: any[]
  backgroundList: any | unknown[]
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
