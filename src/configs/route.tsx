import { lazy } from 'react'
import { NonIndexRouteObject } from 'react-router-dom'
//Page
const RoomStatus = lazy(() => import('pages/RoomStatus'))
const FormMeeting = lazy(() => import('pages/FormMeeting'))
const MySchedule = lazy(() => import('pages/MySchedule'))

const RouteConfig: RouteItem[] = [
  {
    path: '/',
    name: 'Room Status',
    element: <RoomStatus />,
    pageTitle: 'Room Status'
  },
  {
    path: '/my_schedule',
    name: 'My Schedule',
    element: <MySchedule />,
    pageTitle: 'My Schedule'
  },
  {
    path: '/form_meeting',
    name: 'Form Meeting',
    element: <FormMeeting />,
    pageTitle: 'Form Meeting'
  }
]

export default RouteConfig

export interface RouteItem extends NonIndexRouteObject {
  name: string
  pageTitle?: string
}
