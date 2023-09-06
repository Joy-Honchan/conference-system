import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

import { useNavigate } from 'react-router-dom'

//icons
const MenuIcon = React.lazy(() => import('@mui/icons-material/Menu'))
const LogoutIcon = React.lazy(() => import('@mui/icons-material/Logout'))

export default function TopMenu() {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login')
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        borderRadius: 0
      }}
    >
      <ToolBar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, color: 'text.contrast' }}
        >
          Conference System
        </Typography>
        <Button
          onClick={handleLogout}
          startIcon={<LogoutIcon />}
          variant="outlined"
          sx={{
            backgroundColor: '#fff',
            ':hover': {
              backgroundColor: '#d9d9d9',
              color: '#000'
            }
          }}
        >
          Logout
        </Button>
      </ToolBar>
    </AppBar>
  )
}
