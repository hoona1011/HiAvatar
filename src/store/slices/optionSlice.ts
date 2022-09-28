import { createSlice, current } from '@reduxjs/toolkit'

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
    //   text: '',
    //   sentenceSpacing: 0.1
    // }
  ],
  userSelectedList: []
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
    },
    renderText(state, action) {
      const textDatas = action.payload
      state.splitTextList = textDatas
    },
    changeText(state, action) {
      const inputData = action.payload

      // let updateTexts = ''

      const splitTextList = state.splitTextList.map((item) => {
        // updateTexts += item.text + '.'
        return item
      })

      // state.texts = ''
      // state.texts = updateTexts.slice(0, -1)

      const findTextItem = splitTextList.find((item) => {
        return item.sentenceId === inputData.sentenceId
      })

      Object.assign(findTextItem, inputData)
      state.splitTextList = splitTextList
    },
    removeText(state, action) {
      const itemData = action.payload
      const filterdSplitData = state.splitTextList.filter((item) => {
        return item.sentenceId !== itemData.sentenceId
      })
      const findTextItem = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      let i = findTextItem.sentenceId

      for (i; i < state.splitTextList.length; i += 1) {
        state.splitTextList.forEach((item) => {
          if (item.sentenceId === i) {
            item.sentenceId = i -= 1
          }
        })
      }

      console.log(current(findTextItem))

      state.splitTextList = filterdSplitData
    },
    editText(state, action) {
      const itemData = action.payload
      const findTextItem = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      let i = findTextItem.sentenceId

      for (i; i < state.splitTextList.length; i += 1) {
        state.splitTextList.forEach((item) => {
          if (item.sentenceId === i) {
            item.sentenceId = i += 1
          }
        })
      }
      state.splitTextList = [
        ...state.splitTextList,
        {
          sentenceId: findTextItem.sentenceId - 1,
          text: '',
          sentenceSpacing: ''
        }
      ]

      state.splitTextList.sort(function (a, b) {
        return a.sentenceId - b.sentenceId
      })
    },
    selectedText(state, action) {
      const { splitTextList, itemData } = action.payload
      const selectedTextList = splitTextList.map((item) => {
        let focuseItem
        if (item.sentenceId === itemData?.sentenceId) {
          focuseItem = { sentenceId: item.sentenceId, focus: true }
        } else {
          focuseItem = { sentenceId: item.sentenceId, focus: false }
        }
        return focuseItem
      })

      state.userSelectedList = [...selectedTextList]
    }
  }
})

export const {
  changeOption,
  renderText,
  changeText,
  removeText,
  editText,
  selectedText
} = optionSlice.actions
