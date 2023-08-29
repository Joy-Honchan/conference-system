import { ReactNode, lazy } from 'react'
import { NonIndexRouteObject, Outlet } from 'react-router-dom'
//父層 component 是 Outlet，才能使用 children
import SuspenseWrapper from 'components/SuspenseWrapper'
//Page
const RoomStatus = lazy(() => import('pages/RoomStatus'))
const FutureVacancy = lazy(() => import('pages/FutureVacancy'))
const FormMeeting = lazy(() => import('pages/FormMeeting'))
const MySchedule = lazy(() => import('pages/MySchedule'))
const Dashboard = lazy(() => import('pages/Dashboard'))

const RouteConfig: RouteItem[] = [
  {
    path: '/',
    name: 'Room Status',
    element: <SuspenseWrapper component={<RoomStatus />} />
  },
  {
    path: '/future_vacancy',
    name: 'Future Vacancy',
    element: <SuspenseWrapper component={<FutureVacancy />} />
  },
  {
    path: '/form_meeting',
    name: 'Form Meeting',
    element: <SuspenseWrapper component={<FormMeeting />} />
  },
  {
    path: '/my_schedule',
    name: 'My Schedule',
    element: <SuspenseWrapper component={<MySchedule />} />
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: <SuspenseWrapper component={<Dashboard />} />
  }
]

export default RouteConfig

export interface RouteItem extends NonIndexRouteObject {
  name: string
}
