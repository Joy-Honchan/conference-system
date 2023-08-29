import { ReactNode } from 'react'
import { Box, CssBaseline } from '@mui/material'
import SideBarContainer from './SideBar'
import TopMenu from './TopMenu'

export default function TemplatWithNavebar({
  children
}: {
  children: ReactNode
}) {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <TopMenu />
      <SideBarContainer>{children}</SideBarContainer>
    </Box>
  )
}
