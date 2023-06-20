import { useState, lazy, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { IconSuspenseWrapper } from 'components/SuspenseWrapper'

import RouteConfig from 'configs/route'

//icon
const MeetingRoomIcon = lazy(() => import('@mui/icons-material/MeetingRoom'))
const AccessTimeIcon = lazy(() => import('@mui/icons-material/AccessTime'))
const EditCalendarIcon = lazy(() => import('@mui/icons-material/EditCalendar'))
const PersonIcon = lazy(() => import('@mui/icons-material/Person'))

interface SideBarProps {
  open: boolean
  setClose: () => void
}

const ROUTE_ICON_MAPPING: Record<string, ReactNode> = {
  'Room Status': <MeetingRoomIcon />,
  'Future Vacancy': <AccessTimeIcon />,
  'Form Meeting': <EditCalendarIcon />,
  'My Scheule': <PersonIcon />
}

export default function SideBar({ open, setClose }: SideBarProps) {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(0)

  const handleListItemClick = (index: number, path?: string) => {
    setSelectedId(index)
    if (path) {
      navigate(path)
    }
  }
  return (
    <Drawer anchor="left" open={open} onClose={setClose} variant="permanent">
      <Toolbar />
      <List
        sx={{
          width: '100%',
          minWidth: 250,
          maxWidth: 480,
          bgcolor: 'background.paper',
          pt: 0
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
              <IconSuspenseWrapper component={ROUTE_ICON_MAPPING[route.name]} />
            </ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
