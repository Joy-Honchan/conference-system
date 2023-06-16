import { lazy, Suspense, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useNavigate
} from 'react-router-dom'
import RouteConfig from 'configs/route'

const Login = lazy(() => import('pages/Login'))

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <InnerRouter />
    },
    {
      path: '/login',
      element: <Login />
    },
    // {
    //   path: '/logout',
    //   element: <Suspense fallback={null}>{/* <Logout/> */}</Suspense>
    // }
  ])
  return <RouterProvider router={router} />
}

export default App

const InnerRouter = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])
  const routes = useRoutes(RouteConfig)
  return (
    <div>
      Navbar
      {routes}
    </div>
  )
}
