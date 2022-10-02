import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  texts: '',
  language: '한국어',
  sex: '남자',
  characterName: '',
  speed: 0,
  pitch: 0,
  sentenceSpacing: 0,
  audioFile: '',
  splitTextList: [
    {
      sentenceId: 1,
      text: '',
      sentenceSpacing: 0
    }
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

      const findTextItem = state.splitTextList.find((item) => {
        return item.sentenceId === inputData.sentenceId
      })

      Object.assign(findTextItem, inputData)

      // state.texts를 갱신하는 로직
      let updateTexts = ''

      state.splitTextList.map((item) => {
        updateTexts += item.text + '.'
      })

      state.texts = ''
      state.texts = updateTexts.slice(0, -1)
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

      for (i + 1; i < state.splitTextList.length + 1; i += 1) {
        state.splitTextList.forEach((item) => {
          if (item.sentenceId === i) {
            item.sentenceId = i -= 1
          }
        })
      }

      state.splitTextList = filterdSplitData

      // state.texts를 갱신하는 로직
      let updateTexts = ''

      state.splitTextList.map((item) => {
        updateTexts += item.text + '.'
      })

      state.texts = ''
      state.texts = updateTexts.slice(0, -1)
    },
    editText(state, action) {
      const itemData = action.payload
      const findTextItem = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      console.log('itemData', itemData)
      console.log('findTextItem', current(findTextItem))

      let i = findTextItem.sentenceId

      for (i + 1; i < state.splitTextList.length + 1; i += 1) {
        state.splitTextList.forEach((item) => {
          // console.log('item', item.sentenceId)
          // console.log('i', i)
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
          sentenceSpacing: 0
        }
      ]

      state.splitTextList.sort(function (a, b) {
        return a.sentenceId - b.sentenceId
      })

      // state.texts를 갱신하는 로직
      let updateTexts = ''

      state.splitTextList.map((item) => {
        updateTexts += item.text + '.'
      })

      state.texts = ''
      state.texts = updateTexts.slice(0, -1)
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
    },
    changeChnsnSpcng(state, action) {
      const itemData = action.payload
      console.log(itemData)
      console.log('splitTextList', current(state.splitTextList))

      const findItemData = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      Object.assign(findItemData, itemData)

      // console.log('spacingValue', spacingValue)
      // console.log('itemData', itemData)
    },
    outFocus(state) {
      state.userSelectedList.map((item) => {
        item.focus = false
      })
    }
  }
})

export const {
  changeOption,
  renderText,
  changeText,
  removeText,
  editText,
  selectedText,
  outFocus,
  changeChnsnSpcng
} = optionSlice.actions
