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

export interface SelectedValue {
  selectedValue: {
    avatarName: string
    avatarType: string
    bgName: string
  }
}

export interface avatarState extends SelectedValue {
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
}

// 수연
