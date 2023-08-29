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
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <TopMenu />
      <SideBar open={sidBarOpen} setClose={handleSidebarClose} />
      <Box
        component="main"
        sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
