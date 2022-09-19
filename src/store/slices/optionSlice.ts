import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  texts: '',
  language: '',
  sex: '',
  characterName: '',
  speed: 0,
  pitch: 0,
  sentenceSpacing: 0,
  audioFile: '',
  splitTextList: [
    // {
    //   sentenceId: 1,
    //   text: '안녕하세요',
    //   sentenceSpacing: 0.1
    // }
  ]
}
export interface X {
  [key: string]: string | number | any[] // 추후 수정
}
interface OptionState extends X {
  texts: string
  language: string
  sex: string
  characterName: string
  speed: number
  pitch: number
  sentenceSpacing: number
  audioFile: string
  splitTextList: any[]
}
export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    changeOption(state, action) {
      const { name, value } = action.payload

      ;(state as OptionState)[name] = value
    }
  }
})

export const { changeOption } = optionSlice.actions
