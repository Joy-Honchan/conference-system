import { lazy, Suspense, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useNavigate
} from 'react-router-dom'
import RouteConfig from 'configs/route'

//ThemeProvider
import ThemeProvider from 'providers/ThemeProvider'

import TemplatWithNavebar from 'components/Navbar'

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
  // useEffect(() => {
  //   // if no login token
  //   navigate('/login')
  // }, [])
  const routes = useRoutes(RouteConfig)
  return <TemplatWithNavebar>{routes}</TemplatWithNavebar>
}
