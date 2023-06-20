import { useState, ReactNode} from 'react'

import SideBar from './SideBar'
import TopManu from './TopManu'

export default function TemplatWithNavebar({
  children
}: {
  children: ReactNode
}) {
  const [sidBarOpen, setSideBarOpen] = useState(false)

  const handleMenuIconClick = () => {
    setSideBarOpen(!sidBarOpen)
  }
  const handleSidebarClose = () => {
    setSideBarOpen(false)
  }
  return (
    <>
      <TopManu onClick={handleMenuIconClick}/>
      <SideBar open={sidBarOpen} setClose={handleSidebarClose} />
      {children}
    </>
  )
}
