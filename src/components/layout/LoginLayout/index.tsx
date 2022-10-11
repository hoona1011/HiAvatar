import React from 'react'
import { Outlet } from 'react-router-dom'
import { TheFooter } from '../TheFooter'
import { TheHeader } from '../TheHeader'

export const LoginLayout = () => {
  return (
    <>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </>
  )
}
