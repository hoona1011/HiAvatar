import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  totalAvatarData: '',
  avatarList: '',
  avatarDetailList: '',
  backgroundList: ''
}

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    changeTotalAvatarData(state, action) {
      state.totalAvatarData = action.payload.diff
    },
    changeAvatarList(state, action) {
      state.avatarList = action.payload.diff
    },
    changeAvatarDetailList(state, action) {
      state.avatarDetailList = action.payload.diff
    },
    changeBackgroundList(state, action) {
      state.backgroundList = action.payload.diff
    }
  }
})

export const {
  changeTotalAvatarData,
  changeAvatarList,
  changeAvatarDetailList,
  changeBackgroundList
} = avatarSlice.actions

export const useAvatar = () => {
  // 타입 추가 예정
  const totalAvatarData = useSelector((state) => state.avatar.totalAvatarData)
  const avatarList = useSelector((state) => state.avatar.avatarList)
  const avatarDetailList = useSelector((state) => state.avatar.avatarDetailList)
  const backgroundList = useSelector((state) => state.avatar.backgroundList)
  const dispatch = useDispatch()

  return {
    totalAvatarData,
    avatarList,
    avatarDetailList,
    backgroundList,
    dispatch
  }
}

export default avatarSlice.reducer
