import { ReactNode, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { Box, CssBaseline } from '@mui/material'
import SideBarContainer from './SideBar'
import TopMenu from './TopMenu'

export default function TemplatWithNavebar({
  children
}: {
  children: ReactNode
}) {
  const match = useMediaQuery('(min-width:900px)')
  const [open, setOpen] = useState(match)
  const handleOpen = () => setOpen((prev) => !prev)
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <TopMenu open={open} handleOpen={handleOpen} />
      <SideBarContainer drawerWidth={240} open={open}>
        {children}
      </SideBarContainer>
    </Box>
  )
}
