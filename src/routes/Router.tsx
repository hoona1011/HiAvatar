import { Route, Routes } from 'react-router-dom'
import {
  SignIn,
  SignUp,
  MyPage,
  LandingPage,
  ProjectHistory,
  ProjectAvatar,
  ProjectTextEdit
} from '../pages'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='my-page' element={<MyPage />} />
        <Route path='project-avatar' element={<ProjectAvatar />} />
        <Route path='project-history' element={<ProjectHistory />} />
        <Route path='project-text-edit/:id' element={<ProjectTextEdit />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default Router
