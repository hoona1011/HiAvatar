import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  avatarList: '',
  avatarDetailList: ''
}

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    changeAvatarList(state, action) {
      console.log(action.payload.diff)
      state.avatarList = action.payload.diff
    },
    changeAvatarDetailList(state, action) {
      state.avatarDetailList = action.payload.diff
    }
  }
})

export const { changeAvatarList, changeAvatarDetailList } = avatarSlice.actions

export const useAvatar = () => {
  // 타입 추가 예정
  const avatarList = useSelector((state) => state.avatar.avatarList)
  const avatarDetailList = useSelector((state) => state.avatar.avatarDetailList)
  const dispatch = useDispatch()

  return {
    avatarList,
    avatarDetailList,
    dispatch
  }
}

export default avatarSlice.reducer
