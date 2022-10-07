import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector, useAppDispatch } from 'store'

import type { AvatarState, AvatarData, AvatarList, SelectedValue } from 'avatar'

const initialState: AvatarState = {
  totalAvatarData: {
    avatarName: '',
    avatarType: '',
    bgName: '',
    language: '',
    sex: '',
    characterName: '',
    speed: 0,
    pitch: 0,
    sentenceSpacing: 0,
    dummyData: {
      avatar1: {
        thumbnail: '',
        detailList1: [
          {
            position: '',
            thumbnail: ''
          }
        ],
        detailList2: [
          {
            position: '',
            thumbnail: ''
          }
        ],
        detailList3: [
          {
            position: '',
            thumbnail: ''
          }
        ]
      },
      backgroundList: [
        {
          position: '',
          thumbnail: ''
        }
      ]
    }
  },
  avatarList: [],
  avatarDetailList: {
    thumbnail: '',
    detailList1: [
      {
        position: '',
        thumbnail: ''
      }
    ],
    detailList2: [
      {
        position: '',
        thumbnail: ''
      }
    ],
    detailList3: [
      {
        position: '',
        thumbnail: ''
      }
    ]
  },
  backgroundList: [],
  selectedValue: {
    avatarName: 'avatar1',
    avatarType: '',
    bgName: ''
  },
  isAllSelected: false,
  isShowModal: false,
  avatarPreview: '',
  isAvatarPreviewLoading: false
}

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    changeTotalAvatarData(
      state: AvatarState,
      action: PayloadAction<AvatarData>
    ) {
      const avatarData = action.payload
      const disposableAvatarData = Object.entries(avatarData.dummyData)
      const disposableBackgroundData = disposableAvatarData.pop()
      const avatarList = disposableAvatarData as [string, AvatarList][]
      const backgroundList = disposableBackgroundData as [string, AvatarList[]]

      state.totalAvatarData = avatarData
      state.avatarList = avatarList
      console.log(avatarList[0][1])
      state.backgroundList = backgroundList[1]
    },
    changeAvatarDetailList(state: AvatarState, action: PayloadAction<string>) {
      const avatarDetailList = state.avatarList.filter(
        (avatar) => avatar[0] === action.payload
      )
      state.avatarDetailList = avatarDetailList[0][1] as AvatarList
    },
    changeSelectedValue(
      state: AvatarState,
      action: PayloadAction<SelectedValue>
    ) {
      const selectedValue = action.payload
      const key = Object.keys(selectedValue)[0]
      const value = Object.values(selectedValue)[0]

      // key가 'avatarName'인 경우는 사용자가 선택한 아바타가 바뀌는 것이므로 아바타 타입을 초기화 시켜준다
      if (key === 'avatarName') {
        state.selectedValue = {
          ...state.selectedValue,
          [key as string]: value,
          ['avatarType']: ''
        }
      }
      state.selectedValue = {
        ...state.selectedValue,
        [key]: value
      }
    },
    changeIsAllSelected(state: AvatarState) {
      const values = Object.values(state.selectedValue)
      const res = values.every((value) => value.length > 0)
      state.isAllSelected = res
    },
    changeIsShowModal(state: AvatarState, action: PayloadAction<boolean>) {
      state.isShowModal = action.payload
    },
    changeAvatarPreview(state: AvatarState, action: PayloadAction<string>) {
      state.avatarPreview = action.payload
    },
    changeIsAvatarPreviewLoading(
      state: AvatarState,
      action: PayloadAction<boolean>
    ) {
      state.isAvatarPreviewLoading = action.payload
    }
  }
})

export const {
  changeTotalAvatarData,
  changeAvatarDetailList,
  changeSelectedValue,
  changeIsAllSelected,
  changeIsShowModal,
  changeAvatarPreview,
  changeIsAvatarPreviewLoading
} = avatarSlice.actions

export const useAvatar = () => {
  const totalAvatarData = useAppSelector(
    (state) => state.avatar.totalAvatarData
  )
  const avatarList = useAppSelector((state) => state.avatar.avatarList)
  const avatarDetailList = useAppSelector(
    (state) => state.avatar.avatarDetailList
  )
  const backgroundList = useAppSelector((state) => state.avatar.backgroundList)
  const selectedValue = useAppSelector((state) => state.avatar.selectedValue)
  const isAllSelected = useAppSelector((state) => state.avatar.isAllSelected)
  const isShowModal = useAppSelector((state) => state.avatar.isShowModal)
  const avatarPreview = useAppSelector((state) => state.avatar.avatarPreview)
  const isAvatarPreviewLoading = useAppSelector(
    (state) => state.avatar.isAvatarPreviewLoading
  )
  const dispatch = useAppDispatch()

  return {
    totalAvatarData,
    avatarList,
    avatarDetailList,
    backgroundList,
    selectedValue,
    isAllSelected,
    isShowModal,
    avatarPreview,
    isAvatarPreviewLoading,
    dispatch
  }
}

export default avatarSlice.reducer
