import { useState, lazy, ReactNode, Suspense } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Skeleton from '@mui/material/Skeleton'

import RouteConfig from 'configs/route'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

//icon
const MeetingRoomIcon = lazy(() => import('@mui/icons-material/MeetingRoom'))
const EditCalendarIcon = lazy(() => import('@mui/icons-material/EditCalendar'))
const PersonIcon = lazy(() => import('@mui/icons-material/Person'))

const ROUTE_ICON_MAPPING: Record<string, ReactNode> = {
  'Room Status': <MeetingRoomIcon />,
  'Form Meeting': <EditCalendarIcon />,
  'My Schedule': <PersonIcon />
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
  drawerWidth: number
}>(({ theme, open, drawerWidth }) => ({
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

export default function SideBar({
  open,
  children,
  drawerWidth
}: {
  open: boolean
  children: ReactNode
  drawerWidth: number
}) {
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
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        open={open}
        variant="persistent"
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
                <Suspense fallback={<Skeleton variant="circular" />}>
                  {ROUTE_ICON_MAPPING[route.name]}
                </Suspense>
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Main open={open} drawerWidth={drawerWidth}>
        <Toolbar />
        {RouteConfig[selectedId]?.pageTitle ? (
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {RouteConfig[selectedId].pageTitle}
          </Typography>
        ) : (
          <Typography variant="h4">404</Typography>
        )}
        {children}
      </Main>
    </>
  )
}
