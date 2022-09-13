import { Route, Routes } from 'react-router-dom'
import { TheHeader, TheFooter } from '../components'
import {
  SignIn,
  SignUp,
  MyPage,
  LandingPage,
  ProjectHistory,
  ProjectAvatar,
  ProjectTextEdit,
  ProjectTextEnter
} from '../pages'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default Router
