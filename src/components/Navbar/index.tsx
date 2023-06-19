import React from 'react'

import SideBar from './SideBar'
import TopManu from './TopManu'

export default function TemplatWithNavebar({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TopManu />
      <SideBar />
      {children}
    </>
  )
}
