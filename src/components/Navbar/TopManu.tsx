import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

//icons
const MenuIcon = React.lazy(() => import('@mui/icons-material/Menu'))
const LogoutIcon = React.lazy(() => import('@mui/icons-material/Logout'))

export default function TopManu() {
  return (
    <AppBar position="static">
      <ToolBar>
        <IconButton sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component='div' sx={{ flexGrow: 1 }}>
          TopManu
        </Typography>
        <Button startIcon={<LogoutIcon/>}>Logout</Button>
      </ToolBar>
    </AppBar>
  )
}
