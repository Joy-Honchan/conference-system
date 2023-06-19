import { lazy, Suspense, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useNavigate
} from 'react-router-dom'
import RouteConfig from 'configs/route'

import ThemeProvider from 'providers/ThemeProvider'

const Login = lazy(() => import('pages/Login'))

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <InnerRouter />
    },
    {
      path: 'login',
      element: <Login />
    }
    // {
    //   path: '/logout',
    //   element: <Suspense fallback={null}>{/* <Logout/> */}</Suspense>
    // }
  ])
  return (
    <ThemeProvider>
      <RouterProvider
        router={router}
        // fallbackElement={<div>Router is loading</div>}
      />
    </ThemeProvider>
  )
}

export default App

const InnerRouter = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // if no login token
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
