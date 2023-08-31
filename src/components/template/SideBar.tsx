import { useState, lazy, ReactNode } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { IconSuspenseWrapper } from 'components/SuspenseWrapper'

import RouteConfig from 'configs/route'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//icon
const MeetingRoomIcon = lazy(() => import('@mui/icons-material/MeetingRoom'))
const AccessTimeIcon = lazy(() => import('@mui/icons-material/AccessTime'))
const EditCalendarIcon = lazy(() => import('@mui/icons-material/EditCalendar'))
const PersonIcon = lazy(() => import('@mui/icons-material/Person'))
const DashboardIcon = lazy(() => import('@mui/icons-material/Dashboard'))

const ROUTE_ICON_MAPPING: Record<string, ReactNode> = {
  'Room Status': <MeetingRoomIcon />,
  'Future Vacancy': <AccessTimeIcon />,
  'Form Meeting': <EditCalendarIcon />,
  'My Schedule': <PersonIcon />,
  Dashboard: <DashboardIcon />
}

export default function SideBar({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const currIndex = RouteConfig.findIndex(
    (route) => route.path === location.pathname
  )
  const [selectedId, setSelectedId] = useState(currIndex)

  const handleListItemClick = (index: number, path?: string) => {
    setSelectedId(index)
    if (path) {
      navigate(path)
    }
  }
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box'
          }
        }}
      >
        <Toolbar />
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper'
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {RouteConfig.map((route, index) => (
            <ListItemButton
              key={index}
              selected={selectedId === index}
              onClick={() => handleListItemClick(index, route.path)}
            >
              <ListItemIcon>
                <IconSuspenseWrapper
                  component={ROUTE_ICON_MAPPING[route.name]}
                />
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          flexWrap: 'wrap'
        }}
      >
        <Toolbar />
        {RouteConfig[selectedId].pageTitle ? (
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {RouteConfig[selectedId].pageTitle}
          </Typography>
        ) : null}
        {children}
      </Box>
    </>
  )
}
