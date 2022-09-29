import { createSlice } from '@reduxjs/toolkit'
import { useAppSelector, useAppDispatch } from 'store'

import type { AvatarState } from 'index'

const initialState: AvatarState = {
  totalAvatarData: [],
  avatarList: [],
  avatarDetailList: [],
  backgroundList: [],
  selectedValue: {
    avatarName: 'avatar1',
    avatarType: '',
    bgName: ''
  },
  isAllSelected: false,
  isShowModal: false
}

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    changeTotalAvatarData(state, action) {
      const avatarData = action.payload.diff
      const avatarList = Object.entries(avatarData.dummyData) // 2차원 배열로 만들어주기
      const backgroundList = avatarList.pop() // 마지막 요소는 `backgroundList` 이므로 따로 보관

      state.totalAvatarData = avatarData
      state.avatarList = avatarList
      state.backgroundList = (backgroundList as any[])[1]
    },
    changeAvatarDetailList(state, action) {
      const avatarDetailList = state.avatarList.filter(
        (avatar) => (avatar as unknown[])[0] === action.payload.diff
      )
      state.avatarDetailList = (avatarDetailList as any[])[0][1]
    },
    changeSelectedValue(state, action) {
      const selectedValue = action.payload.diff
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
    changeIsAllSelected(state, action) {
      const values = Object.values(state.selectedValue)
      const res = values.every((value) => value.length > 0)
      state.isAllSelected = res
    },
    changeIsShowModal(state, action) {
      state.isShowModal = action.payload.diff
    }
  }
})

export const {
  changeTotalAvatarData,
  changeAvatarDetailList,
  changeSelectedValue,
  changeIsAllSelected,
  changeIsShowModal
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
  const dispatch = useAppDispatch()

  return {
    totalAvatarData,
    avatarList,
    avatarDetailList,
    backgroundList,
    selectedValue,
    isAllSelected,
    isShowModal,
    dispatch
  }
}

export default avatarSlice.reducer
