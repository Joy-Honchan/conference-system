import { lazy } from 'react'
import { NonIndexRouteObject } from 'react-router-dom'
import SuspenseWrapper from 'components/SuspenseWrapper'
//Page
const RoomStatus = lazy(() => import('pages/RoomStatus'))
// const FutureVacancy = lazy(() => import('pages/FutureVacancy'))
const FormMeeting = lazy(() => import('pages/FormMeeting'))
const MySchedule = lazy(() => import('pages/MySchedule'))
// const Dashboard = lazy(() => import('pages/Dashboard'))

const RouteConfig: RouteItem[] = [
  {
    path: '/',
    name: 'Room Status',
    element: <SuspenseWrapper component={<RoomStatus />} />,
    pageTitle: 'Room Status'
  },
  // {
  //   path: '/future_vacancy',
  //   name: 'Future Vacancy',
  //   element: <SuspenseWrapper component={<FutureVacancy />} />,
  //   pageTitle: 'Search for Room Vacancy'
  // },
  {
    path: '/form_meeting',
    name: 'Form Meeting',
    element: <SuspenseWrapper component={<FormMeeting />} />,
    pageTitle: 'Form Meeting'
  },
  {
    path: '/my_schedule',
    name: 'My Schedule',
    element: <SuspenseWrapper component={<MySchedule />} />,
    pageTitle: 'My Schedule'
  }
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   element: <SuspenseWrapper component={<Dashboard />} />,
  //   pageTitle: 'Dashboard'
  // }
]

export default RouteConfig

export interface RouteItem extends NonIndexRouteObject {
  name: string
  pageTitle?: string
}
