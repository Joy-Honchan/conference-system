import { lazy, Suspense, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useNavigate
} from 'react-router-dom'
import RouteConfig from 'configs/route'
import TemplatWithNavebar from 'components/Navbar'

//ThemeProvider
import ThemeProvider from 'providers/ThemeProvider'
//NotistackProvider
import NotistackProvider from 'providers/NotistackProvider'
//SWRQueryProvider
import SWRQueryProvider from 'providers/SWRQueryProvider'
//Redux
import { Provider } from 'react-redux'
import store from 'store'

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
    <Provider store={store}>
      <SWRQueryProvider>
        <ThemeProvider>
          <NotistackProvider>
            <RouterProvider
              router={router}
              // fallbackElement={<div>Router is loading</div>}
            />
          </NotistackProvider>
        </ThemeProvider>
      </SWRQueryProvider>
    </Provider>
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
