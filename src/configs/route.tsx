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
    path: '/form_meeting',
    name: 'Form Meeting',
    element: <FormMeeting />,
    pageTitle: 'Form Meeting'
  },
  {
    path: '/my_schedule',
    name: 'My Schedule',
    element: <MySchedule />,
    pageTitle: 'My Schedule'
  }
]

export default RouteConfig

export interface RouteItem extends NonIndexRouteObject {
  name: string
  pageTitle?: string
}
