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
import { Layout, LoginLayout } from 'components'

const Router = () => {
  return (
    <>
      <Routes>
        {/* 보호받는 존 */}
        <Route element={<Layout />}>
          <Route path='project-history' element={<ProjectHistory />} />
          <Route
            path='project-text-edit/:projectId'
            element={<ProjectTextEdit />}
          />
          <Route path='project-avatar/:projectId' element={<ProjectAvatar />} />
          <Route path='my-page' element={<MyPage />} />
        </Route>
        {/* 로그인 및 랜딩페이지*/}
        <Route element={<LoginLayout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router
