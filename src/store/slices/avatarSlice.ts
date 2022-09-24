import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import type { avatarState } from 'index'

const initialState: avatarState = {
  totalAvatarData: [],
  avatarList: [],
  avatarDetailList: [],
  backgroundList: [],
  selectedValue: {
    avatarName: '',
    avatarType: '',
    bgName: ''
  }
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
        (avatar) => avatar[0] === action.payload.diff
      )
      state.avatarDetailList = avatarDetailList[0][1]
    },
    changeSelectedValue(state, action) {
      const selectedValue = action.payload.diff
      const key = Object.keys(selectedValue)[0]
      const value = Object.values(selectedValue)[0]
      state.selectedValue = {
        ...state.selectedValue,
        [key]: value
      }
      console.log('바뀌고 난 후', state.selectedValue)
    }
  }
})

export const {
  changeTotalAvatarData,
  changeAvatarDetailList,
  changeSelectedValue
} = avatarSlice.actions

export const useAvatar = () => {
  // 타입 추가 예정
  const totalAvatarData = useSelector((state) => state.avatar.totalAvatarData)
  const avatarList = useSelector((state) => state.avatar.avatarList)
  const avatarDetailList = useSelector((state) => state.avatar.avatarDetailList)
  const backgroundList = useSelector((state) => state.avatar.backgroundList)
  const selectedValue = useSelector((state) => state.avatar.selectedValue)
  const dispatch = useDispatch()

  return {
    totalAvatarData,
    avatarList,
    avatarDetailList,
    backgroundList,
    selectedValue,
    dispatch
  }
}

export default avatarSlice.reducer
