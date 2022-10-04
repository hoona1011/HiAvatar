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
        <Route path='project-history' element={<ProjectHistory />} />
        <Route
          path='project-text-edit/:projectId'
          element={<ProjectTextEdit />}
        />
        <Route path='project-avatar/:projectId' element={<ProjectAvatar />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default Router
