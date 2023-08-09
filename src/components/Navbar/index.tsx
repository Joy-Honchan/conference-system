import { useState, ReactNode } from 'react'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import SideBar from './SideBar'
import TopMenu from './TopMenu'

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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopMenu />
      <SideBar open={sidBarOpen} setClose={handleSidebarClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
