import { createSlice, current } from '@reduxjs/toolkit'

const initialState: OptionState = {
  texts: '',
  language: '한국어',
  sex: '남자',
  characterName: '', //요청 보낼 때만 필요한 값이 되었음
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
  userSelectedList: [],
  dummyData: {},
  totalAudioUrl: '',
  textPreviewData: {},
  textsPreviewData: {}
}
export interface X {
  [key: string]: string | number | any[] | any // 추후 수정
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
  userSelectedList: any[]
  dummyData: any
  totalAudioUrl: string
  textPreviewData: any
  textsPreviewData: any
}
export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    changeOption(state, action) {
      const { name, value } = action.payload

      ;(state as any)[name] = value
    },
    renderText(state, action) {
      const textDatas = action.payload
      state.splitTextList = textDatas
    },
    changeText(state, action) {
      const inputData = action.payload

      const findTextItem: any = state.splitTextList.find((item) => {
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
      const findTextItem: any = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      let i = findTextItem.sentenceId + 1

      for (i; i <= state.splitTextList.length; i += 1) {
        state.splitTextList.forEach((item) => {
          if (item.sentenceId === i) {
            item.sentenceId = i += 1
          }
        })
      }
      if (filterdSplitData.length) {
        state.splitTextList = filterdSplitData
      } else {
        state.splitTextList = [
          {
            sentenceId: 1,
            text: '',
            sentenceSpacing: 0
          }
        ]
      }

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
      const findTextItem: any = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      let i = findTextItem.sentenceId + 1

      for (i; i <= state.splitTextList.length; i += 1) {
        state.splitTextList.forEach((item) => {
          if (item.sentenceId === i) {
            item.sentenceId = i += 1
          }
        })
      }

      state.splitTextList = [
        ...state.splitTextList,
        {
          sentenceId: findTextItem.sentenceId + 1,
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
    selectedText(state: any, action) {
      const { splitTextList, itemData } = action.payload
      const selectedTextList = splitTextList.map((item: any) => {
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

      const findItemData: any = state.splitTextList.find((item) => {
        return item.sentenceId === itemData.sentenceId
      })

      Object.assign(findItemData, itemData)
    },
    outFocus(state) {
      state.userSelectedList.map((item: any) => {
        item.focus = false
      })
    },
    getOption(state, action) {
      //일단 노가다로 처리합니다...state를 통째로 바꾸려면 어떻게 해야하나요?? 안먹히네요
      const {
        texts,
        language,
        sex,
        characterName,
        speed,
        pitch,
        sentenceSpacing,
        splitTextList,
        dummyData,
        totalAudioUrl
      } = action.payload
      state.texts = texts
      state.language = language
      state.sex = sex
      state.characterName = characterName
      state.speed = speed
      state.pitch = pitch
      state.sentenceSpacing = sentenceSpacing
      state.splitTextList = splitTextList
      state.dummyData = dummyData
      state.totalAudioUrl = totalAudioUrl
    },
    textCreatePreview(state, action) {
      const textData = action.payload
      state.textPreviewData = { ...textData }
    },
    textsCreatePreview(state, action) {
      const textData = action.payload
      state.textsPreviewData = { ...textData }
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
  changeChnsnSpcng,
  getOption,
  textCreatePreview,
  textsCreatePreview
} = optionSlice.actions
