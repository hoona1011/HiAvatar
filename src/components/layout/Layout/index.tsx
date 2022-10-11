import { useCookies } from 'react-cookie'
import { Navigate, Outlet } from 'react-router-dom'
import { TheHeader } from '../TheHeader'

export const Layout = () => {
  const [cookies] = useCookies()
  const token = cookies.accessToken

  if (token === 'undefined' || token === undefined) {
    alert('로그인이 필요합니다!!')
    return <Navigate to='/sign-in' />
  } else {
    return (
      <>
        <TheHeader />
        <Outlet />
      </>
    )
  }
  return (
    <div>
      {token === 'undefined' || token === undefined ? (
        <Navigate to='/sign-in' />
      ) : (
        <>
          <TheHeader />
          <Outlet />
        </>
      )}
    </div>
  )
}
