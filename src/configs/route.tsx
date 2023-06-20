import { ReactNode, lazy } from 'react'
import { NonIndexRouteObject, Outlet } from 'react-router-dom'
//父層 component 是 Outlet，才能使用 children
import SuspenseWrapper from 'components/SuspenseWrapper'
//Page
const Home = lazy(() => import('pages/Home'))

const RouteConfig: RouteItem[] = [
  {
    path: '/',
    name: 'Room Status',
    element: <SuspenseWrapper component={<Home />} />
  },
  {
    path: '/future_vacancy',
    name: 'Future Vacancy',
    element: <div>Hello</div>
  },
  {
    path: '/form_meeting',
    name: 'Form Meeting',
    element: <div>Hello</div>
  },
  {
    path: '/my_scheule',
    name: 'My Scheule',
    element: <div>Hello</div>
  }
]

export default RouteConfig

export interface RouteItem extends NonIndexRouteObject {
  name: string
}
