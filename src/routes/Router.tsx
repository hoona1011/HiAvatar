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
import { TheHeader } from 'components'

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<TheHeader />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='project-history' element={<ProjectHistory />} />
          <Route
            path='project-text-edit/:projectId'
            element={<ProjectTextEdit />}
          />
          <Route path='project-avatar/:projectId' element={<ProjectAvatar />} />
        </Route>
        <Route path='my-page' element={<MyPage />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default Router
